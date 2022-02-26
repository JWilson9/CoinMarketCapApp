// @flow
import { useQuery } from 'react-query';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { fetchCryptoCurrencyItemInfo } from 'src/api';

export default function CryptoItemDetails(): React.MixedElement {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery(
    'crypto-cur',
    fetchCryptoCurrencyItemInfo
  );

  console.log(data);

  return <div> Crypto details {id}</div>;
}
