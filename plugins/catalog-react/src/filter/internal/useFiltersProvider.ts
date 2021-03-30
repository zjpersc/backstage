/*
 * Copyright 2021 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useApi } from '@backstage/core';
import { useCallback, useMemo, useRef } from 'react';
import { useAsync } from 'react-use';
import { catalogApiRef } from '../../api';
import { Filter } from '../types';
import { FiltersContext } from './context';
import { useClientFiltersHolder } from './useClientFiltersHolder';
import { useServerFiltersHolder } from './useServerFiltersHolder';

/**
 * Implements the actual business logic of the filters context.
 */
export function useFiltersProvider(): FiltersContext {
  // The actual filter contents are delegated to these hooks
  const {
    compoundClientFilter,
    setClientFilter,
    removeClientFilter,
  } = useClientFiltersHolder();
  const {
    compoundServerFilter,
    setServerFilter,
    removeServerFilter,
  } = useServerFiltersHolder();

  // This is the main server request path. Whenever the server filters change,
  // we issue a request to the backend for entities matching those filters.
  const catalog = useApi(catalogApiRef);
  const { loading, error, value: serverEntities } = useAsync(
    function reloadEntitiesOnFilterChange() {
      return catalog
        .getEntities({ filter: compoundServerFilter })
        .then(response => response.items);
    },
    [catalog, compoundServerFilter],
  );

  // The output list of entities is computed as a side effect of either the
  // client filters changing, or the server entities changing.
  const entities = useMemo(() => {
    return (serverEntities ?? []).filter(e => compoundClientFilter(e));
  }, [compoundClientFilter, serverEntities]);

  // Each filter component is given a unique id as it registers itself with the
  // context. It then sets its own current filter values. This function must
  // have a stable reference.
  const nextFilterId = useRef(0);
  const registerFilter = useCallback(
    (initialValue?: () => Filter) => {
      const id = String(nextFilterId.current++);
      const filter = initialValue ? initialValue() : {};
      if (filter.predicate) {
        setClientFilter(id, filter.predicate);
      }
      if (filter.serverFilter) {
        setServerFilter(id, filter.serverFilter);
      }
      return id;
    },
    [setClientFilter, setServerFilter],
  );

  // Lets inputs unregister themselves on unmount. This function must have a
  // stable reference.
  const unregisterFilter = useCallback(
    (id: string) => {
      removeClientFilter(id);
      removeServerFilter(id);
    },
    [removeClientFilter, removeServerFilter],
  );

  // Updates the filter settings of a given id. This function must have a
  // stable reference.
  const setFilter = useCallback(
    (id: string, filter: Filter) => {
      if (filter.predicate) {
        setClientFilter(id, filter.predicate);
      } else {
        removeClientFilter(id);
      }
      if (filter.serverFilter) {
        setServerFilter(id, filter.serverFilter);
      } else {
        removeServerFilter(id);
      }
    },
    [setClientFilter, setServerFilter, removeClientFilter, removeServerFilter],
  );

  return {
    loading,
    error,
    serverEntities: serverEntities ?? [],
    entities,
    registerFilter,
    unregisterFilter,
    setFilter,
  };
}
