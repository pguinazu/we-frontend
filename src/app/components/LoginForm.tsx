'use client';

import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff, ErrorOutline } from '@mui/icons-material';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordRules, setShowPasswordRules] = useState(false);

  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Correo electrónico no válido')
      .matches(
        /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com)$/,
        'El correo debe ser válido y terminar con gmail.com, outlook.com o yahoo.com'
      )
      .required('El correo electrónico es obligatorio'),
    password: Yup.string()
      .min(8, 'La contraseña debe tener mínimo 8 caracteres')
      .max(16, 'La contraseña debe tener máximo 16 caracteres')
      .matches(/[A-Z]/, 'La contraseña debe contener al menos una mayúscula')
      .matches(/\d/, 'La contraseña debe contener al menos un número')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'La contraseña debe contener al menos un carácter especial')
      .required('La contraseña es obligatoria'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
      .required('Confirma tu contraseña'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form values:', values);
      router.push('/auth/login-last-step');
    },
  });

  // Validaciones en tiempo real para la contraseña
  const passwordValidationRules = [
    {
      label: 'La contraseña debe tener mínimo 8 caracteres y máximo 16 caracteres',
      isValid: formik.values.password.length >= 8 && formik.values.password.length <= 16,
    },
    {
      label: 'La contraseña debe contener al menos una mayúscula',
      isValid: /[A-Z]/.test(formik.values.password),
    },
    {
      label: 'La contraseña debe contener al menos un número',
      isValid: /\d/.test(formik.values.password),
    },
    {
      label: 'La contraseña debe contener al menos un carácter especial',
      isValid: /[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password),
    },
  ];

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative w-full max-w-xs p-5 bg-[#202020] shadow-md rounded-md flex flex-col gap-6"
    >
      <div className="flex flex-col gap-4">
        <TextField
          label="Correo electrónico"
          placeholder="juan@gmail.com"
          variant="filled"
          fullWidth
          {...formik.getFieldProps('email')}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          slotProps={{
            input: {
              style: { backgroundColor: '#FAFAFA' },
              endAdornment: formik.touched.email && formik.errors.email ? (
                <InputAdornment position="end">
                  <ErrorOutline color="error" />
                </InputAdornment>
              ) : null,
            },
          }}
        />

        <div className="relative">
          <TextField
            label="Contraseña"
            placeholder="Contraseña"
            variant="filled"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            {...formik.getFieldProps('password')}
            onFocus={() => setShowPasswordRules(true)}
            onBlur={() => setShowPasswordRules(false)}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            slotProps={{
              input: {
                style: { backgroundColor: '#FAFAFA' },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
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
          {...formik.getFieldProps('confirmPassword')}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          slotProps={{
            input: {
              style: { backgroundColor: '#FAFAFA' },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </div>

      <Button
        label="Continuar"
        type="submit"
        fullWidth
        disabled={!formik.isValid || formik.isSubmitting}
        className={!formik.isValid ? 'opacity-50 cursor-not-allowed' : ''}
      />
    </form>
  );
};

export default LoginForm;
