// @flow

import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';
import type { CryptoListType } from '../api/CryptoApiTypes';
import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';

import * as React from 'react';

type Props = $ReadOnly<{
  item: CryptoListType,
}>;

export default function CryptoListItem({ item }: Props): React.MixedElement {
  function calculatePercentage(priceChange: number): React.MixedElement {
    const color = priceChange > 0 ? 'green' : 'red';

    return (
      <ListItemText primaryTypographyProps={{ color }} primary={priceChange} />
    );
  }
  return (
    <>
      <Link to={`/crypto/${item.id}`} style={styles.linkStyle}>
        <Box sx={styles.root}>
          <ListItemText secondary={item.id} />
          <ListItemText primary={item.name} />
          <ListItemText secondary={item.symbol} />
          <Box sx={styles.priceContainer}>
            {calculatePercentage(item?.quote['USD']?.percent_change_24h)}
            <ListItemText secondary={item?.quote['USD']?.price} />
          </Box>
        </Box>
        <Divider />
      </Link>
    </>
  );
}

const styles = {
  root: {
    display: 'flex',
    bgcolor: 'background.paper',
    margin: 'auto',
  },
  priceContainer: { justifyContent: 'flex-end', margin: 'auto' },
  linkStyle: {
    textDecoration: 'none',
    width: '100%',
  },
};
