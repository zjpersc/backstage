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

import { Content } from '@backstage/core';
import { FiltersProvider } from '@backstage/plugin-catalog-react';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import CatalogLayout from '../CatalogPage/CatalogLayout';
import { CatalogFilters2 } from './CatalogFilters2';
import { CatalogTable2 } from './CatalogTable2';

const useStyles = makeStyles(theme => ({
  contentWrapper: {
    display: 'grid',
    gridTemplateAreas: "'filters' 'table'",
    gridTemplateColumns: '250px 1fr',
    gridColumnGap: theme.spacing(2),
  },
  buttonSpacing: {
    marginLeft: theme.spacing(2),
  },
}));

export const CatalogPage2 = () => {
  const styles = useStyles();
  return (
    <FiltersProvider>
      <CatalogLayout>
        <Content>
          <div className={styles.contentWrapper}>
            <CatalogFilters2 />
            <CatalogTable2 />
          </div>
        </Content>
      </CatalogLayout>
    </FiltersProvider>
  );
};
