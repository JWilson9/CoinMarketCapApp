// @flow

import { useQuery } from 'react-query';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { fetchCurrency } from '../api';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

// import FetchRenderer from './common/CryptoFetchRendererCommon';

export default function CryptoItemDetails(): React.MixedElement {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery('crypto-cur-1', () =>
    fetchCurrency(id)
  );

  // TODO: Create a common component to render the different states from the api
  if (error) {
    return <div>An error occurred: {error?.message}</div>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  /*
o Logo
o Name
o Description
o Links out to Twitter and any other sites such as website, telegram


  */

  /*
o Logo
o Name
o Description
o Links out to Twitter and any other sites such as website, telegram
  */

  console.log(data[id]?.name);

  return (
    <>
      <Link to="/">
        <Button variant="text">Back to Home</Button>
      </Link>
      <div> Crypto details {id}</div>
      <div> Crypto Name {data[id]?.name}</div>
      <div> Crypto Logo {data[id]?.logo}</div>
      <div> Crypto Description {data[id]?.logo}</div>
    </>
  );
}
