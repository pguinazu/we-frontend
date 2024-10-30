'use client';
import React, { useState } from 'react';
import { TextField, IconButton, Button } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 w-[296px] h-[362px] bg-[#202020] shadow-md rounded-md flex flex-col gap-6">
      {/* <h1 className="text-white text-lg font-bold">Registro</h1>
      <p className="text-gray-400 text-sm">Ingresa tus datos para crear una cuenta</p> */}

      <div className="flex flex-col gap-4">
        <TextField
          label="Correo electrónico"
          placeholder="juan@gmail.com"
          variant="filled"
          fullWidth
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
          }}
        />

        <TextField
          label="Contraseña"
          placeholder="Contraseña"
          variant="filled"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: (
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />

        <TextField
          label="Confirmar contraseña"
          placeholder="Repetir contraseña"
          variant="filled"
          type={showConfirmPassword ? 'text' : 'password'}
          fullWidth
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: (
              <IconButton onClick={handleClickShowConfirmPassword}>
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
      </div>

      <Button
        variant="contained"
        color="inherit"
        fullWidth
        style={{
          backgroundColor: '#AFAFAF',
          color: '#202020',
          height: '48px',
          fontWeight: 'bold',
          borderRadius: '4px',
        }}
      >
        Continuar
      </Button>
    </div>
  );
};

export default LoginForm;
