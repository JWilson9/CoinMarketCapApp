// @flow

import axios from '../utils/axios';
import type { CryptoListType, CyptoDetailsType } from './CryptoApiTypes';

export const fetchCryptoCurrencyList = async (): Promise<CryptoListType> => {
  const { data } = await axios.get('/v1/cryptocurrency/listings/latest');
  return data?.data;
};

export const fetchCurrency = async (id: number): Promise<CyptoDetailsType> => {
  const { data } = await axios.get('/v2/cryptocurrency/info', {
    params: { id },
  });

  return data?.data;
};
