// @flow

import Container from '@mui/material/Container';
import { useQuery } from 'react-query';
// $FlowFixMe
import { fetchCryptoCurrencyList } from 'src/api';

import type { CryptoItem } from 'CryptoTypes';

import ListItem from '@mui/material/ListItem';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CryptoListItem from './CryptoListItem';
import * as React from 'react';

export default function Home(): React.MixedElement {
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
    <Container maxWidth="sm">
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            {data.map((data) => {
              console.log(data);
              const cryptoData: CryptoItem = {
                id: data.id,
                name: data.name,
                symbol: data.symbol,
              };

              return (
                <ListItem key={data.id}>
                  <CryptoListItem item={cryptoData} />
                </ListItem>
              );
            })}
          </List>
        </nav>
      </Box>
    </Container>
  );
}
