// @flow

import { useQuery } from 'react-query';
import { fetchCryptoCurrencyList } from '../api';

import ListItem from '@mui/material/ListItem';

import CircularProgress from '@mui/material/CircularProgress';

import CryptoListItem from './CryptoListItem';
import * as React from 'react';

import CardContent from '@mui/material/CardContent';

export default function Home(): React.MixedElement {
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
            <CryptoListItem item={data} />
          </ListItem>
        );
      })}
    </CardContent>
  );
}
