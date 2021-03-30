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
import {
  catalogApiRef,
  Filter,
  useFilterInput,
} from '@backstage/plugin-catalog-react';
import {
  Divider,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core';
import { sortBy, sortedUniq } from 'lodash';
import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAsync } from 'react-use';

const useStyles = makeStyles(theme => ({
  divider: {
    margin: theme.spacing(1, 0),
  },
}));

const ALL = '-';

function useCandidateKinds() {
  const catalogApi = useApi(catalogApiRef);
  const [params] = useSearchParams();

  const { value: entitiesResponse } = useAsync(
    () => catalogApi.getEntities({ fields: ['kind'] }),
    [catalogApi],
  );

  const result = useMemo(() => {
    const kinds = new Set(entitiesResponse?.items.map(e => e.kind));
    const param = params.get('kind');
    if (param && param !== ALL) {
      kinds.add(param);
    }
    return sortedUniq(sortBy([...kinds]));
  }, [entitiesResponse, params]);

  return result;
}

function valueToFilter(value: string): Filter {
  if (value === ALL) {
    return {};
  }
  return { serverFilter: { kind: [value] } };
}

export const KindFilter = () => {
  const classes = useStyles();
  const [params, setParams] = useSearchParams();
  const [value, setValue] = useState(() => params.get('kind') || ALL);
  const kinds = useCandidateKinds();
  const { loading, error, setFilter } = useFilterInput(() =>
    valueToFilter(value),
  );

  function onChange({ target }: React.ChangeEvent<{ value: unknown }>) {
    const newValue = target.value as string;
    setValue(newValue);
    setFilter(valueToFilter(newValue));
    const newParams = new URLSearchParams(params);
    if (newValue !== ALL) {
      newParams.set('kind', newValue);
      setParams(newParams);
    } else {
      newParams.delete('kind');
      setParams(newParams);
    }
  }

  return (
    <FormControl disabled={Boolean(loading || error)}>
      <InputLabel id="entity-kind">Kind</InputLabel>
      <Select labelId="entity-kind" value={value} onChange={onChange}>
        <MenuItem value="-">All</MenuItem>
        <Divider className={classes.divider} />
        {kinds.map(kind => (
          <MenuItem key={kind} value={kind}>
            {kind}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
