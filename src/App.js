// @flow

import { QueryClient, QueryClientProvider } from 'react-query';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoList from './components/CryptoList';
import CryptoItemDetails from './components/CryptoItemDetails';
import Box from '@mui/material/Box';
import * as React from 'react';

const queryClient = new QueryClient();

export default function App(): React.MixedElement {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Container maxWidth="sm">
          <Box
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <Routes>
              <Route exact path="/" element={<CryptoList />} />
            </Routes>
            <Routes>
              <Route exact path="/crypto/:id" element={<CryptoItemDetails />} />
            </Routes>
          </Box>
        </Container>
      </QueryClientProvider>
    </Router>
  );
}
