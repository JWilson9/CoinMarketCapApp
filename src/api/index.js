// @flow

import axios from '../utils/axios';
import type { CryptoListType, CyptoDetailsType } from './CryptoApiTypes';

export const fetchCryptoCurrencyList = async (): Promise<CryptoListType> => {
  const { data } = await axios.get('/v1/cryptocurrency/listings/latest');
  return data?.data; // API's response returns object array with data and status attributes. Just return data for now
};

export const fetchCurrency = async (id: number): Promise<CyptoDetailsType> => {
  const { data } = await axios.get('/v2/cryptocurrency/info', {
    params: { id },
  });

  console.log(data?.data[id]);
  return data?.data;
};
