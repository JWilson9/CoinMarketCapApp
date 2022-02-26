// @flow

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';
import type { CryptoItem } from 'CryptoTypes';

import * as React from 'react';

type Props = $ReadOnly<{
  item: CryptoItem,
}>;

export default function CryptoListItem({ item }: Props): React.MixedElement {
  return (
    <Link to={`/crypto/${item.id}`}>
      <ListItemButton>
        <ListItemText primary={item.id} />
        <ListItemText secondary={item.name} />
        <ListItemText secondary={item.symbol} />
      </ListItemButton>
    </Link>
  );
}
