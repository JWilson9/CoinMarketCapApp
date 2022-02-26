import axios from 'src/utils/axios';

/**
 * API to fetch list of latest crypto currencies
 * @returns {Array}
 */
export const fetchCryptoCurrencyList = async () => {
  const { data } = await axios.get('/v1/cryptocurrency/listings/latest');
  return data?.data; // API's response returns object array with data and status attributes. Just return data for now
};

export const fetchCryptoCurrencyItemInfo = async () => {
  const { data } = await axios.get('/v1/cryptocurrency/n0id519evd/id/2268');
  return data; // API's response returns object array with data and status attributes. Just return data for now
};
