'use client';

import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff, ErrorOutline } from '@mui/icons-material';
import Button from '../components/Button';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  const [touchedFields, setTouchedFields] = useState({ email: false, password: false, confirmPassword: false });

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length === 1) {
      setShowPasswordRules(true);
    }
  };

  const handleBlur = (field: string) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleContinueClick = () => {
    console.log("Botón Continuar clickeado");
  };

  // Validar que el correo electrónico tenga un formato válido
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Verificar si la confirmación de la contraseña es igual a la contraseña
  const isPasswordConfirmed = confirmPassword === password;

  // Reglas de validación de contraseña
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

  // Determinar si el botón debe estar habilitado
  const isFormValid = isEmailValid && isPasswordConfirmed && passwordValidationRules.every(rule => rule.isValid);

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
          onBlur={() => handleBlur('email')}
          error={!isEmailValid && touchedFields.email} // Mostrar error solo después de perder el foco
          helperText={!isEmailValid && touchedFields.email ? "Correo electrónico no válido" : ""}
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: !isEmailValid && touchedFields.email ? (
              <InputAdornment position="end">
                <ErrorOutline color="error" />
              </InputAdornment>
            ) : null,
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
            onChange={handlePasswordChange}
            onBlur={() => handleBlur('password')}
            InputProps={{
              style: { backgroundColor: '#FAFAFA' },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? (
                      <VisibilityOff color={!passwordValidationRules.every(rule => rule.isValid) && touchedFields.password ? 'error' : 'inherit'} />
                    ) : (
                      <Visibility color={!passwordValidationRules.every(rule => rule.isValid) && touchedFields.password ? 'error' : 'inherit'} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {showPasswordRules && (
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
          )}
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
            onBlur={() => handleBlur('confirmPassword')}
            error={!isPasswordConfirmed && touchedFields.confirmPassword} // Mostrar error solo después de perder el foco
            helperText={!isPasswordConfirmed && touchedFields.confirmPassword ? "Las contraseñas no coinciden" : ""}
            InputProps={{
              style: { backgroundColor: '#FAFAFA' },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowConfirmPassword}>
                    {showConfirmPassword ? (
                      <VisibilityOff color={!isPasswordConfirmed && touchedFields.confirmPassword ? 'error' : 'inherit'} />
                    ) : (
                      <Visibility color={!isPasswordConfirmed && touchedFields.confirmPassword ? 'error' : 'inherit'} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>

      <Button
        label="Continuar"
        onClick={handleContinueClick}
        fullWidth
        disabled={!isFormValid} // Deshabilitar el botón si el formulario no es válido
        className={!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}
      />
    </div>
  );
};

export default LoginForm;
