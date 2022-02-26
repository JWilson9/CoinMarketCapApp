// @flow

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';
import MUILink from '@mui/material/Link';
import type { CyptoDetailsType } from '../api/CryptoApiTypes';
import Box from '@mui/material/Box';

import * as React from 'react';

type Props = $ReadOnly<{
  item: CyptoDetailsType,
}>;

export default function CryptoListItem({ item }: Props): React.MixedElement {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={() => {}}
    >
      <Link to={`/crypto/${item.id}`} style={{ textDecoration: 'none' }}>
        <ListItemButton>
          <ListItemText primary={item.id} />
          <ListItemText secondary={item.name} />
          {/* <ListItemText secondary={item.symbol} /> */}
        </ListItemButton>
      </Link>
    </Box>
  );
}
