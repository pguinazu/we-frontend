export interface Crypto {
  icon?: string;
  id: number;
  name: string;
  symbol: string | null;
  disabled: boolean;
  blockchains: Network[];
}

export interface Network {
  icon?: string;
  id: number;
  name: string;
  disabled: boolean;
  tokens: Crypto[];
}
