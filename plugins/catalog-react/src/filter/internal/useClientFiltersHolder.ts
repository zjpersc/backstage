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
import { useCallback, useRef, useState } from 'react';

/**
 * Helper hook which keeps track of a set of id-referenced client filters, and
 * the compound "union" of them.
 */
export function useClientFiltersHolder() {
  const filters = useRef<{ [filterId: string]: (entity: Entity) => boolean }>(
    {},
  );
  const [compound, setCompound] = useState<(entity: Entity) => boolean>(
    () => (_entity: Entity) => true,
  );

  function rebuildCompound() {
    const currentFilters = Object.values(filters.current);
    setCompound(function compoundClientFilter(entity: Entity): boolean {
      for (const filter of currentFilters) {
        if (!filter(entity)) {
          return false;
        }
      }
      return true;
    });
  }

  const setClientFilter = useCallback(
    (id: string, value: (entity: Entity) => boolean) => {
      const previous = filters.current[id];
      filters.current[id] = value;
      if (previous !== value) {
        rebuildCompound();
      }
    },
    [],
  );

  const removeClientFilter = useCallback((id: string) => {
    const previous = filters.current[id];
    if (previous !== undefined) {
      delete filters.current[id];
      rebuildCompound();
    }
  }, []);

  return {
    compoundClientFilter: compound,
    setClientFilter,
    removeClientFilter,
  };
}
