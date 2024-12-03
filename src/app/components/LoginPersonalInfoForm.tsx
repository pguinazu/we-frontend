'use client';

import React, { useState } from 'react';
import { TextField, Button, InputAdornment } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import PopUp from './PopUp';
import { useRouter } from 'next/navigation';
import PhoneInput from './PhoneInput';
import { useForm } from '../contexts/SignUpContext';
import { authService } from '../services/auth/authService';

const LoginPersonalInfoForm: React.FC = () => {
  const { formData, setFormData } = useForm();
  const [showPopUp, setShowPopUp] = useState(false);

  const router = useRouter();

  const handleCreateAccount = async () => {
    console.log("Form data:", formData); // Log para ver los datos en consola
    try {
      const result = await authService.signUp(formData);
      console.log('User registered:', result);
      router.push('/auth/success-account');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleTermsChange = () => {
    setFormData({ ...formData, termsAccepted: !formData.termsAccepted });
  };

  const handleOpenPopUp = () => {
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  // Validaciones
  const isNameValid = /^[a-zA-Z\s]+$/.test(formData.firstName);
  const isLastNameValid = /^[a-zA-Z\s]+$/.test(formData.lastName);

  // Verificar si el formulario es válido
  const isFormValid = isNameValid && isLastNameValid ; //agregar validacion isPhoneValid, revisando regla segun autocomplete de codigo de area

  return (
    <div className="relative mt-10 w-full h-auto bg-[#202020] shadow-md rounded-md flex flex-col gap-6 p-2 pb-3">
      <div className="flex flex-col gap-4">
        <TextField
          label="Nombre"
          placeholder="Juan"
          variant="filled"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          fullWidth
          error={!isNameValid} // lint fix: se quito && touchedFields.name
          helperText={!isNameValid ? "Solo letras y espacios" : ""} // lint fix: se quito && touchedFields.name
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: (
              !isNameValid && ( // lint fix: se quito && touchedFields.name
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
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          fullWidth
          error={!isLastNameValid} // lint fix: se quito && touchedFields.lastName
          helperText={!isLastNameValid ? "Solo letras y espacios" : ""} // lint fix: se quito && touchedFields.lastName
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: (
              !isLastNameValid && ( // lint fix: se quito && touchedFields.lastName
                <InputAdornment position="end">
                  <ErrorOutline color="error" />
                </InputAdornment>
              )
            ),
          }}
        />

        <PhoneInput />
      </div>

      <div className="flex items-center gap-2">
        <input
          id="termsAccepted"
          type="checkbox"
          checked={formData.termsAccepted}
          onChange={handleTermsChange}
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
          backgroundColor: isFormValid ? '#FAFAFA' : '#d3d3d3',
          color: '#202022',
          height: '48px',
          fontWeight: '600',
          borderRadius: '4px',
          textTransform: 'none'
        }}
        disabled={!isFormValid}
      >
        Crear cuenta
      </Button>

      {showPopUp && (
        <PopUp onClose={handleClosePopUp}>
          <div className="text-black">
            <h2 className="text-lg  mb-4">Términos y Condiciones</h2>
            <p>Aquí van los términos y condiciones del servicio...</p>
          </div>
        </PopUp>
      )}
    </div>
  );
};

export default LoginPersonalInfoForm;
