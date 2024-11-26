'use client';

import React, { useState } from 'react';
import { TextField, Button, InputAdornment } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import PopUp from './PopUp';
import { useRouter } from 'next/navigation';
import PhoneInput2 from './PhoneInput2';
import { useForm } from '../LoginContext';

const LoginPersonalInfoForm: React.FC = () => {
  const { formData, setFormData } = useForm();
  const [showPopUp, setShowPopUp] = useState(false);
  const [touchedFields, setTouchedFields] = useState({ name: false, lastName: false }); // Rastrear campos tocados

  const router = useRouter();

  const handleCreateAccount = () => {
    console.log("Form data:", formData);
    router.push('/auth/success-account');
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

  const handleBlur = (field: string) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  // Validaciones
  const isNameValid = /^[a-zA-Z\s]+$/.test(formData.name);
  const isLastNameValid = /^[a-zA-Z\s]+$/.test(formData.lastName);

  // Verificar si el formulario es válido
  const isFormValid = isNameValid && isLastNameValid;

  return (
    <div className="relative mt-4 w-full h-auto bg-[#202020] shadow-md rounded-md flex flex-col gap-6 p-2 pb-3">
      <div className="flex flex-col gap-4">
        <TextField
          label="Nombre"
          placeholder="Juan"
          variant="filled"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onBlur={() => handleBlur('name')} // Marcar el campo como tocado al salir
          fullWidth
          error={!isNameValid && touchedFields.name} // Mostrar error solo si el campo fue tocado
          helperText={!isNameValid && touchedFields.name ? "Solo letras y espacios" : ""}
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: (
              !isNameValid && touchedFields.name && (
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
          onBlur={() => handleBlur('lastName')} // Marcar el campo como tocado al salir
          fullWidth
          error={!isLastNameValid && touchedFields.lastName} // Mostrar error solo si el campo fue tocado
          helperText={!isLastNameValid && touchedFields.lastName ? "Solo letras y espacios" : ""}
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: (
              !isLastNameValid && touchedFields.lastName && (
                <InputAdornment position="end">
                  <ErrorOutline color="error" />
                </InputAdornment>
              )
            ),
          }}
        />

        <PhoneInput2 />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={formData.termsAccepted}
          onChange={handleTermsChange}
          className="w-4 h-4 bg-[#65558F]"
        />
        <label className="text-[#FEF7FF] text-sm">
          Aceptar <a href="#" className="underline" onClick={handleOpenPopUp}>términos y condiciones</a>
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
            <h2 className="text-lg mb-4">Términos y Condiciones</h2>
            <p>Aquí van los términos y condiciones del servicio...</p>
          </div>
        </PopUp>
      )}
    </div>
  );
};

export default LoginPersonalInfoForm;
