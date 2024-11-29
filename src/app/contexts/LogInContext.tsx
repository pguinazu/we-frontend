'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LoginData } from '../interfaces/formData'; // Usa la interfaz LoginData definida

// Define las propiedades del contexto
interface LoginContextProps {
  loginData: LoginData;
  setLoginData: (data: LoginData) => void;
}

// Crea el contexto sin valores iniciales específicos
const LoginContext = createContext<LoginContextProps | undefined>(undefined);

// Crea el proveedor del contexto
export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [loginData, setLoginData] = useState<LoginData>({
    userEmail: '',
    password: '',
    rememberMe: false,
  });

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </LoginContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin debe usarse dentro de un LoginProvider');
  }
  return context;
};
