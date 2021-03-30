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

import { Entity } from '@backstage/catalog-model';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { filtersContext } from './internal/context';
import { Filter } from './types';

/**
 * The interface available to a filter input (e.g. a filter setting component)
 */
export type FilterInput = {
  loading: boolean;
  error: Error | undefined;
  serverEntities: Entity[];
  setFilter: (filter: Filter) => void;
};

/**
 * Used by components that want to give inputs to a filter set.
 *
 * Provides both the active state of the context, as well as methods to change
 * one's own current filter setting.
 *
 * @param id A unique ID for this filter input
 * @param initialValue An optional initial value provider at mount
 */
export function useFilterInput(initialValue?: () => Filter): FilterInput {
  const context = useContext(filtersContext);
  if (!context) {
    throw new Error(
      'useFilterInput can only be used from inside a FiltersProvider',
    );
  }

  const {
    loading,
    error,
    serverEntities,
    registerFilter,
    unregisterFilter,
    setFilter,
  } = context;

  // On first mount, register ourselves to get an id and an initial value set
  const id = useRef<string>('');
  useEffect(() => {
    id.current = registerFilter(initialValue);
    return () => {
      unregisterFilter(id.current);
    };
    // The initialValue is skipped here intentionally
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerFilter, unregisterFilter]);

  // Wrap the context's setFilter with one that supplies the correct id.
  const setOurFilter = useCallback(
    (newFilterValue: Filter) => {
      setFilter(id.current, newFilterValue);
    },
    [setFilter],
  );

  return {
    loading,
    error,
    serverEntities,
    setFilter: setOurFilter,
  };
}
