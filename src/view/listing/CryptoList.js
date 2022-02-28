// @flow

import { useQuery } from 'react-query';
import { fetchCryptoCurrencyList } from '../../api';
import ListItem from '@mui/material/ListItem';
import CircularProgress from '@mui/material/CircularProgress';
import CurrencyListItem from './CurrencyListItem';
import CardContent from '@mui/material/CardContent';

import * as React from 'react';

type Props = $ReadOnly<{}>;

export default function CryptoList(props: Props): React.MixedElement {
  const { data, error, isLoading } = useQuery(
    'crypto-list',
    fetchCryptoCurrencyList
  );

  if (error) {
    return <div>An error occurred: {error?.message}</div>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <CardContent>
      {data.map((data) => {
        return (
          <ListItem key={data.id}>
            <CurrencyListItem item={data} />
          </ListItem>
        );
      })}
    </CardContent>
  );
}
