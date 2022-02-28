// @flow

// https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider

import { useState } from 'react';
import { ethers } from 'ethers';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WalletCardInfo from './WalletCardInfo';

import * as React from 'react';

export default function WalletCard(): React.MixedElement {
  const [errorMessage, setErrorMessage] = useState(null);
  const [metaMaskAccount, setMetaMaskAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  function connectWallet(): void {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result) => {
          setMetaMaskAccount(result[0]);
          getAccountBalance(result[0].toString());
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage('Metamask is not installed');
    }
  }

  function getAccountBalance(account: string): void {
    window.ethereum
      .request({ method: 'eth_getBalance', params: [account, 'latest'] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <Box>
      {errorMessage != null ? (
        <Box>
          <Typography variant="body2" component="body2">
            There was an error
          </Typography>
        </Box>
      ) : (
        <WalletCardInfo
          metaMaskAccount={metaMaskAccount}
          userBalance={userBalance}
          connectWallet={connectWallet}
        />
      )}
    </Box>
  );
}

/*
<div className="walletCard">
        <h4> {'Connection to MetaMask using window.ethereum methods'} </h4>
        <button onClick={connectWalletHandler}>{connButtonText}</button>
        <div className="accountDisplay">
          <h3>Address: {defaultAccount}</h3>
        </div>
        <div className="balanceDisplay">
          <h3>Balance: {userBalance}</h3>
        </div>
        {errorMessage}
      </div>

*/
