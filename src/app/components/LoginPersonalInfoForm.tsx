'use client';

import React, { useState } from 'react';
import { TextField, Button, InputAdornment } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import PopUp from './PopUp';
import { useRouter } from 'next/navigation';
import PhoneInput from './PhoneInput';
import { useForm } from '../contexts/SignUpContext';
import { authService } from '../services/auth/authService';
import * as yup from 'yup';

interface TouchedState {
  firstName: boolean;
  lastName: boolean;
  termsAccepted: boolean;
}

const LoginPersonalInfoForm: React.FC = () => {
  const { formData, setFormData } = useForm();
  const [showPopUp, setShowPopUp] = useState(false);
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string }>({});
  const [touched, setTouched] = useState<TouchedState>({
    firstName: false,
    lastName: false,
    termsAccepted: false,
  });
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const router = useRouter();

  // Validación con yup
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .matches(/^[a-zA-ZñÑ\s]+$/, 'Este campo no permite números ni caracteres especiales')
      .required('Este campo es obligatorio'),
    lastName: yup
      .string()
      .matches(/^[a-zA-ZñÑ\s]+$/, 'Este campo no permite números ni caracteres especiales')
      .required('Este campo es obligatorio'),
    termsAccepted: yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones'),
  });

  const validateField = (field: keyof typeof formData, value: string) => {
    try {
      schema.validateSyncAt(field, { [field]: value });
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    } catch (error: any) {
      setErrors((prev) => ({ ...prev, [field]: error.message }));
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    if (typeof value === 'string') {
      validateField(field, value); // Validar de inmediato
    }
  };

  const handleBlur = (field: keyof TouchedState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field as keyof typeof formData, formData[field as keyof typeof formData] as string);
  };

  const handleCreateAccount = async () => {
    console.log('Form data:', formData);
    try {
      await schema.validate(formData, { abortEarly: false });
      const result = await authService.signUp(formData);
      console.log('User registered:', result);
      router.push('/auth/success-account');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleOpenPopUp = () => setShowPopUp(true);
  const handleClosePopUp = () => setShowPopUp(false);

  // Validar el formulario completo
  const isFormValid =
    Object.values(errors).every((error) => !error) && // Todos los campos deben ser válidos
    touched.firstName && // El nombre debe haber sido tocado
    touched.lastName && // El apellido debe haber sido tocado
    isPhoneValid && // El teléfono debe ser válido
    formData.termsAccepted; // Los términos deben estar aceptados

  return (
    <div className="relative mt-2 w-full h-auto bg-[#202020] shadow-md rounded-md flex flex-col gap-6 p-3 pb-3">
      <div className="flex flex-col gap-4">
        <TextField
          label="Nombre"
          placeholder="Juan"
          variant="filled"
          value={formData.firstName}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
          onBlur={() => handleBlur('firstName')} // Actualizar touched al perder foco
          fullWidth
          error={!!errors.firstName} // Mostrar error si es inválido
          helperText={errors.firstName || ''} // Mostrar mensaje de error
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: (
              errors.firstName && (
                <InputAdornment position="end">
                  <ErrorOutline color="error" />
                </InputAdornment>
              )
            ),
          }}
        />

        <TextField
          label="Apellido"
          placeholder="Perez"
          variant="filled"
          value={formData.lastName}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
          onBlur={() => handleBlur('lastName')} // Actualizar touched al perder foco
          fullWidth
          error={!!errors.lastName} // Mostrar error si es inválido
          helperText={errors.lastName || ''} // Mostrar mensaje de error
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: (
              errors.lastName && (
                <InputAdornment position="end">
                  <ErrorOutline color="error" />
                </InputAdornment>
              )
            ),
          }}
        />

        <PhoneInput onValidChange={setIsPhoneValid} />
      </div>

      <div className="flex items-center gap-2">
        <input
          id="termsAccepted"
          type="checkbox"
          checked={formData.termsAccepted}
          onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
          onBlur={() => handleBlur('termsAccepted')}
          className="w-4 h-4 bg-[#65558F]"
        />
        <label htmlFor="termsAccepted" className="text-[#FEF7FF] text-sm">
          Aceptar <button className="underline" onClick={handleOpenPopUp}>términos y condiciones</button>
        </label>
      </div>

      <Button
        variant="contained"
        color="inherit"
        fullWidth
        onClick={handleCreateAccount}
        style={{
          backgroundColor: isFormValid ? '#FAFAFA' : '#AFAFAF',
          color: '#202022',
          height: '48px',
          fontWeight: '600',
          borderRadius: '4px',
          textTransform: 'none',
        }}
        disabled={!isFormValid}
      >
        Crear cuenta
      </Button>

      {showPopUp && (
        <PopUp onClose={handleClosePopUp}>
          <div className="text-black">
            <h2 className="text-lg mb-4">Términos y Condiciones</h2>
            <p>Aquí van los términos y condiciones del servicio...</p>
          </div>
        </PopUp>
      )}
    </div>
  );
};

export default LoginPersonalInfoForm;
