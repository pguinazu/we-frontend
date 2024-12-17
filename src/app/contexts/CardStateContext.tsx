"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type CardStateContextType = {
  isCardPaused: boolean;
  setIsCardPaused: (isPaused: boolean) => void;
  cardId: number | null;  // cardId ahora es number o null inicialmente
  setCardId: (id: number | null) => void;  // Función para actualizar el cardId como número
};

const CardStateContext = createContext<CardStateContextType | undefined>(undefined);

export const CardStateProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isCardPaused, setIsCardPaused] = useState(false);
  const [cardId, setCardId] = useState<number | null>(null);  // Estado inicial para cardId como number

  return (
    <CardStateContext.Provider value={{ isCardPaused, setIsCardPaused, cardId, setCardId }}>
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
