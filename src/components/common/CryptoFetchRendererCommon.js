import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

type Props = $Readonly<{
  errorMessage: Exception,
  isLoading: boolean,
  children: React.MixedElement,
}>;

export default function CryptoFetchRendererCommon({
  error,
  isLoading,
  children,
}: Props): React.MixedElement {
  if (error) {
    return <div>An error occurred: {error?.message}</div>;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return children;
}
