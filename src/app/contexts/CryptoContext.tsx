"use client";

import React, { createContext, useContext, useState, useMemo, useEffect } from "react";

interface CryptoContextValue {
  selectedCrypto: {
    icon?: string; 
    title: string;
    subtitle: string;
  } | null;
  selectedNetwork: {
    icon?: string; 
    title: string;
    subtitle: string;
    hash: string;
  } | null;
  setSelectedCrypto: (crypto: CryptoContextValue["selectedCrypto"]) => void;
  setSelectedNetwork: (network: CryptoContextValue["selectedNetwork"]) => void;
}

const CryptoContext = createContext<CryptoContextValue | undefined>(undefined);

export const CryptoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoContextValue["selectedCrypto"]>(() => {
    const savedCrypto = localStorage.getItem("selectedCrypto");
    return savedCrypto ? JSON.parse(savedCrypto) : null;
  });

  const [selectedNetwork, setSelectedNetwork] = useState<CryptoContextValue["selectedNetwork"]>(() => {
    const savedNetwork = localStorage.getItem("selectedNetwork");
    return savedNetwork ? JSON.parse(savedNetwork) : null;
  });

  // Guarda en localStorage cuando cambian los valores
  useEffect(() => {
    if (selectedCrypto) {
      localStorage.setItem("selectedCrypto", JSON.stringify(selectedCrypto));
    } else {
      localStorage.removeItem("selectedCrypto");
    }
  }, [selectedCrypto]);

  useEffect(() => {
    if (selectedNetwork) {
      localStorage.setItem("selectedNetwork", JSON.stringify(selectedNetwork));
    } else {
      localStorage.removeItem("selectedNetwork");
    }
  }, [selectedNetwork]);

  const value = useMemo(
    () => ({
      selectedCrypto,
      setSelectedCrypto,
      selectedNetwork,
      setSelectedNetwork,
    }),
    [selectedCrypto, selectedNetwork]
  );

  return (
    <CryptoContext.Provider value={value}>
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
