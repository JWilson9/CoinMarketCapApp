// @flow

type CryptoItemPrice = {
  [string]: {
    price: ?number,
    percent_change_24h: ?number,
  },
};

export const WEBSITE_LINKS = {
  facebook: 'facebook',
  twitter: 'twitter',
  website: 'website',
};

type ItemWebsiteType = $Keys<typeof WEBSITE_LINKS>;

export type CryptoListType = {
  id: ?number,
  name: ?string,
  symbol: ?string,
  quote: ?CryptoItemPrice,
  priceChange: ?string,
};

export type CyptoDetailsType = {
  id: ?number,
  name: ?string,
  description: ?string,
  logo: ?string,
  urls: {
    [ItemWebsiteType]: ?Array<string>,
  },
};
