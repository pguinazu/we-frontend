export interface Crypto {
  icon?: string;
  id: number;
  name: string;
  symbol: string | null;
  disabled: boolean;
  blockchains: any[];
}

export interface Network {
  icon?: string;
  id: number;
  name: string;
  disabled: boolean;
  tokens: any[];
}
