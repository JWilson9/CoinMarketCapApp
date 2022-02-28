// @flow

import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';
import type { CryptoListType } from '../../api/CurrencyApiTypes';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';

import * as React from 'react';

type Props = $ReadOnly<{
  item: CryptoListType,
}>;

export default function CurrencyListItem({ item }: Props): React.MixedElement {
  function calculatePercentage(
    priceChange: ?number
  ): React.MixedElement | null {
    if (priceChange == null) {
      return null;
    }
    const color = priceChange > 0 ? 'green' : 'red';

    return (
      <ListItemText primaryTypographyProps={{ color }} primary={priceChange} />
    );
  }

  const quote = item?.quote != null ? item?.quote['USD'] : null;

  return (
    <>
      <Link to={`/crypto/${item.id ?? 0}`} style={styles.linkStyle}>
        <Box sx={styles.root}>
          <ListItemText secondary={item.id} />
          <ListItemText primary={item.name} />
          <ListItemText secondary={item.symbol} />
          <Box sx={styles.priceContainer}>
            {item?.quote != null && item?.quote['USD'] != null ? (
              <>
                {calculatePercentage(quote?.percent_change_24h)}
                <ListItemText secondary={quote?.percent_change_24h ?? 'N/A'} />
              </>
            ) : (
              <Typography variant="body2">N/A</Typography>
            )}
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
