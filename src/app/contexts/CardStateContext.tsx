"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

type CardStateContextType = {
  isCardPaused: boolean;
  setIsCardPaused: (isPaused: boolean) => void;
};

const CardStateContext = createContext<CardStateContextType | undefined>(undefined);

export const CardStateProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isCardPaused, setIsCardPaused] = useState(false);

  return (
    <CardStateContext.Provider value={{ isCardPaused, setIsCardPaused }}>
      {children}
    </CardStateContext.Provider>
  );
};

export const useCardState = (): CardStateContextType => {
  const context = useContext(CardStateContext);
  if (context === undefined) {
    throw new Error('useCardState must be used within a CardStateProvider');
  }
  return context;
};
