// @flow

import { useQuery } from 'react-query';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { fetchCurrency } from '../api';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { WEBSITE_LINKS } from '../api/CryptoApiTypes';
import CryptoItemDetailsWebsite from './CryptoItemDetailsWebsite';

import { Link } from 'react-router-dom';

// import FetchRenderer from './common/CryptoFetchRendererCommon';

export default function CryptoItemDetails(): React.MixedElement {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery(['crypto-item-details', id], () =>
    fetchCurrency(id)
  );

  const websiteRows = Object.keys(WEBSITE_LINKS);

  if (error) {
    return <div>An error occurred: {error?.message}</div>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <CardHeader
        avatar={<Avatar alt={data[id]?.name} src={data[id]?.logo} />}
        title={data[id]?.name ?? 'N/A'}
        subheader={`ID: ${id}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data[id]?.description}
        </Typography>
        <Box sx={{ paddingTop: 4, paddingBottom: 4 }}>
          {websiteRows.map((row) => {
            console.log(row);
            return (
              <CryptoItemDetailsWebsite
                key={row}
                label={row}
                links={data[id]?.urls[row]}
              />
            );
          })}
        </Box>

        <Box>
          <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
            <Button variant="text">Back to Home</Button>
          </Link>
        </Box>
      </CardContent>
    </>
  );
}
