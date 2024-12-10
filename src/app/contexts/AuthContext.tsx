'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import Cookies from 'js-cookie';

// Define la interfaz del contexto
interface AuthContextType {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
}

// Crea el contexto sin valores iniciales específicos
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor del contexto
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(null);

  // Actualizar cookies cuando cambie el token
  useEffect(() => {
    if (token) {
      Cookies.set('authToken', token, { expires: 7 }); // Guardar token en cookies por 7 días
    } else {
      Cookies.remove('authToken'); // Eliminar token si es null
    }
  }, [token]);

  // Recuperar el token de las cookies al cargar el contexto
  useEffect(() => {
    const savedToken = Cookies.get('authToken');
    if (savedToken) {
      setTokenState(savedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken: setTokenState }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }

  return context;
};
