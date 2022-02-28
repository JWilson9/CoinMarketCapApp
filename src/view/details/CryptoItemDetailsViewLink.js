// @flow

import * as React from 'react';
import MUILink from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = $ReadOnly<{
  label: string,
  links: Array<string>,
}>;

export default function CryptoItemDetailsViewLink({
  label,
  links,
}: Props): React.MixedElement {
  return (
    <>
      {links.map((item, id) => {
        return (
          <Box key={id}>
            <Typography variant="body2" color="text.secondary">
              {label}
            </Typography>
            <MUILink key={id} href={item} underline="none" rel="noopener">
              {item}
            </MUILink>
          </Box>
        );
      })}
    </>
  );
}
