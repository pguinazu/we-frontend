'use client';

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import PopUp from './PopUp';

const LoginPersonalInfoForm: React.FC = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);  

  const handleCreateAccount = () => {
    // Handle create account logic here
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

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  };

  return (
    <div className="relative mx-auto mt-10 p-5 w-[296px] h-auto bg-[#202020] shadow-md rounded-md flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <TextField
          label="Nombre"
          placeholder="Juan"
          variant="filled"
          value={name}
          onChange={handleInputChange(setName)}
          fullWidth
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
          }}
        />

        <TextField
          label="Apellido"
          placeholder="Perez"
          variant="filled"
          value={lastName}
          onChange={handleInputChange(setLastName)}
          fullWidth
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
          }}
        />

        <TextField
          label="Teléfono"
          placeholder="5411 2563-2500"
          variant="filled"
          value={phone}
          onChange={handleInputChange(setPhone)}
          fullWidth
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
          }}
        />
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" checked={termsAccepted} onChange={handleTermsChange} className="w-4 h-4 bg-[#65558F]" />
        <label className="text-[#FEF7FF] text-sm">Aceptar <a href="#" className="underline" onClick={handleOpenPopUp}>términos y condiciones</a></label>
      </div>

      <Button
        variant="contained"
        color="inherit"
        fullWidth
        onClick={handleCreateAccount}
        style={{
          backgroundColor: '#FAFAFA',
          color: '#202022',
          height: '48px',
          fontWeight: 'bold',
          borderRadius: '4px',
          textTransform: 'none'
        }}
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
