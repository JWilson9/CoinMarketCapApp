// @flow

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Props = $ReadOnly<{
  metaMaskAccount: ?string,
  userBalance: ?string,
  connectWallet: () => mixed,
}>;
export default function WalletCardInfo({
  metaMaskAccount,
  userBalance,
  connectWallet,
}: Props): React.MixedElement {
  return (
    <>
      {metaMaskAccount == null ? (
        <Button variant="contained" onClick={connectWallet}>
          Connect MetaMask
        </Button>
      ) : (
        <Box>
          <Box>
            <Typography variant="body2" component="div">
              {metaMaskAccount}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" component="div">
              Balance: {userBalance}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
