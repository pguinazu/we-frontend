'use client';

import React, { useState } from 'react';
import { TextField, Button, InputAdornment } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import PopUp from './PopUp';

const LoginPersonalInfoForm: React.FC = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [touchedFields, setTouchedFields] = useState({ name: false, lastName: false, phone: false });

  const handleCreateAccount = () => {
    // Lógica para crear cuenta aquí
  };

  const handleTermsChange = () => {
    setTermsAccepted((prev) => !prev);
  };

  const handleOpenPopUp = () => {
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, field: string) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  // Validaciones
  const isNameValid = /^[a-zA-Z\s]+$/.test(name);
  const isLastNameValid = /^[a-zA-Z\s]+$/.test(lastName);
  const isPhoneValid = /^\d{8,18}$/.test(phone);

  // Verificar si el formulario es válido
  const isFormValid = isNameValid && isLastNameValid && isPhoneValid && termsAccepted;

  return (
    <div className="relative mx-auto mt-10 p-5 w-[296px] h-auto bg-[#202020] shadow-md rounded-md flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <TextField
          label="Nombre"
          placeholder="Juan"
          variant="filled"
          value={name}
          onChange={handleInputChange(setName, 'name')}
          fullWidth
          error={!isNameValid && touchedFields.name}
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
          value={lastName}
          onChange={handleInputChange(setLastName, 'lastName')}
          fullWidth
          error={!isLastNameValid && touchedFields.lastName}
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

        <TextField
          label="Teléfono"
          placeholder="5411 2563-2500"
          variant="filled"
          value={phone}
          onChange={handleInputChange(setPhone, 'phone')}
          fullWidth
          error={!isPhoneValid && touchedFields.phone}
          helperText={!isPhoneValid && touchedFields.phone ? "Solo números y guiones" : ""}
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: (
              !isPhoneValid && touchedFields.phone && (
                <InputAdornment position="end">
                  <ErrorOutline color="error" />
                </InputAdornment>
              )
            ),
          }}
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={termsAccepted}
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
          fontWeight: 'bold',
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
            <h2 className="text-lg font-bold mb-4">Términos y Condiciones</h2>
            <p>Aquí van los términos y condiciones del servicio...</p>
          </div>
        </PopUp>
      )}
    </div>
  );
};

export default LoginPersonalInfoForm;
