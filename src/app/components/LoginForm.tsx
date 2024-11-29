'use client';

import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff, ErrorOutline } from '@mui/icons-material';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';
import { useForm } from '../LoginContext'; 

const LoginForm: React.FC = () => {
  const { formData, setFormData } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordRules, setShowPasswordRules] = useState(false);
  const [touchedFields, setTouchedFields] = useState({ email: false, password: false, confirmPassword: false });
  
  const router = useRouter();
  
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });
    setShowPasswordRules(true);
  };

  const handleBlur = (field: string) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleContinueClick = () => {
    console.log("Form data:", formData); // Log para ver los datos en consola
    router.push('/auth/login-last-step');
  };

  // Validación del correo electrónico
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(formData.email);

  // Verificar confirmación de contraseña
  const isPasswordConfirmed = formData.confirmPassword === formData.password;

  // Reglas de validación de contraseña
  const passwordValidationRules = [
    {
      label: "La contraseña debe tener mínimo 8 caracteres y máximo 16 caracteres",
      isValid: formData.password.length >= 8 && formData.password.length <= 16,
    },
    {
      label: "La contraseña debe contener al menos una Mayúscula",
      isValid: /[A-Z]/.test(formData.password),
    },
    {
      label: "La contraseña debe contener al menos un número",
      isValid: /\d/.test(formData.password),
    },
    {
      label: "La contraseña debe contener al menos un caracter especial",
      isValid: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
    },
  ];

  // Determinar si el formulario es válido
  const isFormValid = isEmailValid && isPasswordConfirmed && passwordValidationRules.every(rule => rule.isValid);

  return (
    <div className="relative w-full max-w-xs p-5 bg-[#202020] shadow-md rounded-md flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <TextField
          label="Correo electrónico"
          placeholder="juan@gmail.com"
          variant="filled"
          fullWidth
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onBlur={() => handleBlur('email')}
          error={!isEmailValid && touchedFields.email}
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
            value={formData.password}
            onChange={handlePasswordChange}
            onBlur={() => handleBlur('password')}
            InputProps={{
              style: { backgroundColor: '#FAFAFA' },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {showPasswordRules && (
            <ul className="mt-2 text-sm list-disc pl-5">
              {passwordValidationRules.map((rule) => (
                <li
                  key={rule.label}
                  className={rule.isValid ? 'text-white' : 'text-red-500'}
                >
                  {rule.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <TextField
          label="Confirmar contraseña"
          placeholder="Repetir contraseña"
          variant="filled"
          type={showConfirmPassword ? 'text' : 'password'}
          fullWidth
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          onBlur={() => handleBlur('confirmPassword')}
          error={!isPasswordConfirmed && touchedFields.confirmPassword}
          helperText={!isPasswordConfirmed && touchedFields.confirmPassword ? "Las contraseñas no coinciden" : ""}
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowConfirmPassword}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <Button
        label="Continuar"
        onClick={handleContinueClick}
        fullWidth
        disabled={!isFormValid}
        className={!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}
      />
    </div>
  );
};

export default LoginForm;
