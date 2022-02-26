// @flow

import { useQuery } from 'react-query';
import { fetchCryptoCurrencyList } from '../api';

import ListItem from '@mui/material/ListItem';

import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import CryptoListItem from './CryptoListItem';
import * as React from 'react';

export default function Home(): React.MixedElement {
  // TODO: Put key into a constants file
  const { data, error, isLoading } = useQuery(
    'crypto-cur',
    fetchCryptoCurrencyList
  );

  if (error) {
    return <div>An error occurred: {error?.message}</div>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <nav aria-label="main mailbox folders">
      <List>
        {data.map((data) => {
          return (
            <ListItem key={data.id}>
              <CryptoListItem item={data} />
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
}
