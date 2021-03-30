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

import { isEqual } from 'lodash';
import { useCallback, useRef, useState } from 'react';

/**
 * Helper hook which keeps track of a set of id-referenced server filters, and
 * the compound "union" of them.
 */
export function useServerFiltersHolder() {
  const filters = useRef<{ [filterId: string]: Record<string, string[]> }>({});
  const [compound, setCompound] = useState<Record<string, string[]>>({});

  function rebuildCompound() {
    setCompound(oldCompound => {
      const result: Record<string, string[]> = {};
      for (const filter of Object.values(filters.current)) {
        for (const [key, values] of Object.entries(filter)) {
          if (!result[key]) {
            result[key] = [...values];
          } else {
            result[key] = [
              ...result[key],
              ...values.filter(v => !result[key].includes(v)),
            ];
          }
        }
      }
      return isEqual(result, oldCompound) ? oldCompound : result;
    });
  }

  const setServerFilter = useCallback(
    (id: string, value: Record<string, string[]>) => {
      filters.current[id] = value;
      rebuildCompound();
    },
    [],
  );

  const removeServerFilter = useCallback((id: string) => {
    delete filters.current[id];
    rebuildCompound();
  }, []);

  return {
    compoundServerFilter: compound,
    setServerFilter,
    removeServerFilter,
  };
}
