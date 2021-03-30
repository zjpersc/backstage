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
import { ResponseErrorPanel, Table, TableColumn } from '@backstage/core';
import { useFilterOutput } from '@backstage/plugin-catalog-react';
import React, { useMemo } from 'react';

export type CatalogTable2Props = {
  //
};

type EntityRow = {
  entity: Entity;
};

function toRows(entities: Entity[]): EntityRow[] {
  return entities.map(entity => {
    return {
      entity,
    };
  });
}

const columns: TableColumn<EntityRow>[] = [
  {
    title: 'Name',
    field: 'entity.metadata.name',
    highlight: true,
  },
];

export const CatalogTable2 = (props: CatalogTable2Props) => {
  const { loading, error, entities } = useFilterOutput();
  const rows = useMemo(() => toRows(entities), [entities]);

  if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  return (
    <Table<EntityRow>
      isLoading={loading}
      columns={columns}
      options={{
        paging: true,
        pageSize: 20,
        actionsColumnIndex: -1,
        loadingType: 'linear',
        showEmptyDataSourceMessage: !loading,
        padding: 'dense',
        pageSizeOptions: [20, 50, 100],
      }}
      data={rows}
    />
  );
};
