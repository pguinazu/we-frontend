'use client';
import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '../components/Button';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleContinueClick = () => {
    console.log("Botón Continuar clickeado");
  };

  // Funciones de validación de contraseña
  const passwordValidationRules = [
    {
      label: "La contraseña debe tener mínimo 8 caracteres y máximo 16 caracteres",
      isValid: password.length >= 8 && password.length <= 16,
    },
    {
      label: "La contraseña debe contener al menos una Mayúscula",
      isValid: /[A-Z]/.test(password),
    },
    {
      label: "La contraseña debe contener al menos un número",
      isValid: /[0-9]/.test(password),
    },
    {
      label: "La contraseña debe contener al menos un caracter especial",
      isValid: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 w-[296px] bg-[#202020] shadow-md rounded-md flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <TextField
          label="Correo electrónico"
          placeholder="juan@gmail.com"
          variant="filled"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
          }}
        />

        <div className="relative">
          <TextField
            label="Contraseña"
            placeholder="Contraseña"
            variant="filled"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              style: { backgroundColor: '#FAFAFA' },
              endAdornment: (
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />

          {/* Lista de validaciones */}
          <ul className="mt-2 text-sm list-disc pl-5">
            {passwordValidationRules.map((rule, index) => (
              <li
                key={index}
                className={rule.isValid ? 'text-white' : 'text-red-500'}
              >
                {rule.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <TextField
            label="Confirmar contraseña"
            placeholder="Repetir contraseña"
            variant="filled"
            type={showConfirmPassword ? 'text' : 'password'}
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
      </div>

      <Button
        label="Continuar"
        onClick={handleContinueClick}
        fullWidth
      />
    </div>
  );
};

export default LoginForm;
