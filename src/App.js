// @flow

import { QueryClient, QueryClientProvider } from 'react-query';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CryptoItemDetails from './components/CryptoItemDetails';
import * as React from 'react';
const queryClient = new QueryClient();

export default function App(): React.MixedElement {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Container maxWidth="sm">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/crypto/:id" element={<CryptoItemDetails />} />
          </Routes>
        </Container>
      </QueryClientProvider>
    </Router>
  );
}
