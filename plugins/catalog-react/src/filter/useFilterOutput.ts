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
import { useContext } from 'react';
import { filtersContext } from './internal/context';

/**
 * The interface available to the filter output (e.g. a results table)
 */
export type FilterOutput = {
  loading: boolean;
  error: Error | undefined;
  entities: Entity[];
};

/**
 * Used by components that want to render the output of the filters.
 */
export function useFilterOutput(): FilterOutput {
  const context = useContext(filtersContext);
  if (!context) {
    throw new Error(
      'useFilterOutput can only be used from inside a FiltersProvider',
    );
  }

  const { loading, error, entities } = context;

  return {
    loading,
    error,
    entities,
  };
}
