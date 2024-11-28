"use client";

import React, { createContext, useContext, useState } from "react";

interface CryptoContextValue {
  selectedCrypto: {
    icon: string;
    title: string;
    subtitle: string;
  } | null;
  selectedNetwork: {
    icon: string;
    title: string;
    subtitle: string;
    hash: string;
  } | null;
  setSelectedCrypto: (crypto: CryptoContextValue["selectedCrypto"]) => void;
  setSelectedNetwork: (network: CryptoContextValue["selectedNetwork"]) => void;
}

const CryptoContext = createContext<CryptoContextValue | undefined>(undefined);

export const CryptoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoContextValue["selectedCrypto"]>(null);
  const [selectedNetwork, setSelectedNetwork] = useState<CryptoContextValue["selectedNetwork"]>(null);

  return (
    <CryptoContext.Provider
      value={{ selectedCrypto, setSelectedCrypto, selectedNetwork, setSelectedNetwork }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export const useCryptoContext = () => {
  const context = useContext(CryptoContext);
  if (!context) {
    throw new Error("useCryptoContext must be used within a CryptoProvider");
  }
  return context;
};
