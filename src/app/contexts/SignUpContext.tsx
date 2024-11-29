'use client'

// FormContext.tsx
import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { SignUpForm } from '../interfaces/formData';

// Define las propiedades del contexto, que incluyen los datos y una función para actualizar los datos
interface FormContextProps {
  formData: SignUpForm;
  setFormData: (data: SignUpForm) => void;
}

// Crea el contexto sin valores iniciales específicos
const FormContext = createContext<FormContextProps | undefined>(undefined);

// Crea el proveedor del contexto, que envuelve a los componentes que necesitan acceso a los datos
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<SignUpForm>({
    email: '',
    password: '',
    confirmPassword: '', // sacar/confirmar si se saca para peticion a api
    firstName: '',
    lastName: '',
    termsAccepted: false, // sacar/confirmar si se saca para peticion a api
    phoneNumber: '',
    phoneCountryCode: ''
  });

  // Usa useMemo para evitar la recreación del valor del contexto en cada render
  const contextValue = useMemo(() => ({ formData, setFormData }), [formData]);

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};

// Hook personalizado para usar el contexto en los componentes
export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm debe usarse dentro de un FormProvider');
  }
  return context;
};
