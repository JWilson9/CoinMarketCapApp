// @flow

import { QueryClient, QueryClientProvider } from 'react-query';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoList from './view/listing/CryptoList';
import CurrencyItemDetailsView from './view/details/CurrencyItemDetailsView';
import Box from '@mui/material/Box';
import * as React from 'react';

import WalletCard from './view/metamask/WalletCard';
import Card from '@mui/material/Card';

const queryClient = new QueryClient();

export default function App(): React.MixedElement {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div style={{ width: '100%' }}>
          <Box sx={style.topBar}>
            <Box sx={{ marginRight: 'auto' }}> Simple Cyptocurrency App </Box>
            <WalletCard />
          </Box>
          <Container maxWidth="sm" sx={{ padding: 10 }}>
            <Card sx={{ minWidth: 560 }} raised={true}>
              <Routes>
                <Route exact path="/" element={<CryptoList />} />
                <Route
                  exact
                  path="/crypto/:id"
                  element={<CurrencyItemDetailsView />}
                />
              </Routes>
            </Card>
          </Container>
        </div>
      </QueryClientProvider>
    </Router>
  );
}

const style = {
  topBar: {
    display: 'flex',
    padding: '20px',
    backgroundColor: 'teal',
    color: '#fff',
  },
};
