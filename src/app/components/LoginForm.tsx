'use client';

import React from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff, ErrorOutline } from '@mui/icons-material';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';
import { useForm } from '../contexts/SignUpContext';
import { useFormik } from 'formik';
import * as yup from 'yup';

const LoginForm: React.FC = () => {
  const { formData, setFormData } = useForm();
  const router = useRouter();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // Yup schema for password
  const passwordSchema = yup
    .string()
    .min(8, 'La contraseña debe tener mínimo 8 caracteres y máximo 16 caracteres')
    .max(16, 'La contraseña debe tener mínimo 8 caracteres y máximo 16 caracteres')
    .matches(/[A-Z]/, 'La contraseña debe contener al menos una Mayúscula')
    .matches(/\d/, 'La contraseña debe contener al menos un número')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'La contraseña debe contener al menos un carácter especial');

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Correo electrónico no válido')
      .required('El correo es obligatorio'),
    password: passwordSchema.required('La contraseña es obligatoria'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
      .required('La confirmación de contraseña es obligatoria'),
  });

  const formik = useFormik({
    initialValues: {
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      firstName: formData.firstName || '',
      lastName: formData.lastName || '',
      termsAccepted: formData.termsAccepted || false,
      phoneNumber: formData.phoneNumber || '',
      phoneCountryCode: formData.phoneCountryCode || '',
    },
    validationSchema,
    onSubmit: (values) => {
      setFormData(values);
      router.push('/auth/login-last-step');
    },
  });

  const passwordValidationRules = [
    {
      label: 'La contraseña debe tener mínimo 8 caracteres y máximo 16 caracteres',
      isValid: formik.values.password.length >= 8 && formik.values.password.length <= 16,
    },
    {
      label: 'La contraseña debe contener al menos una Mayúscula',
      isValid: /[A-Z]/.test(formik.values.password || ''),
    },
    {
      label: 'La contraseña debe contener al menos un número',
      isValid: /\d/.test(formik.values.password || ''),
    },
    {
      label: 'La contraseña debe contener al menos un carácter especial',
      isValid: /[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password || ''),
    },
  ];

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative w-full max-w-xs p-3 bg-[#202020] shadow-md rounded-md flex flex-col gap-6"
    >
      <div className="flex flex-col gap-4">
        {/* Email Field */}
        <TextField
          label="Correo electrónico"
          placeholder="juan@gmail.com"
          variant="filled"
          fullWidth
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: (
              formik.touched.email &&
              formik.errors.email && (
                <InputAdornment position="end">
                  <ErrorOutline color="error" />
                </InputAdornment>
              )
            ),
          }}
        />

        {/* Password Field */}
        <div className="relative">
          <TextField
            label="Contraseña"
            placeholder="Contraseña"
            variant="filled"
            type={
              formik.errors.password && formik.touched.password
                ? 'text'
                : showPassword
                ? 'text'
                : 'password'
            }
            fullWidth
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              style: { backgroundColor: '#FAFAFA' },
              endAdornment: (
                <InputAdornment position="end">
                  {formik.errors.password && formik.touched.password ? (
                    <ErrorOutline color="error" />
                  ) : (
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />

          {/* Password Validation Rules */}
          {(formik.touched.password || formik.values.password) && (
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

        {/* Confirm Password Field */}
        <TextField
          label="Confirmar contraseña"
          placeholder="Repetir contraseña"
          variant="filled"
          type={
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? 'text'
              : showConfirmPassword
              ? 'text'
              : 'password'
          }
          fullWidth
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: (
              <InputAdornment position="end">
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                  <ErrorOutline color="error" />
                ) : (
                  <IconButton onClick={handleClickShowConfirmPassword}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      </div>

      {/* Submit Button */}
      <Button
        label="Continuar"
        type="submit"
        fullWidth
        disabled={!formik.isValid || !formik.dirty}
        className={!formik.isValid ? 'opacity-50 cursor-not-allowed' : ''}
      />
    </form>
  );
};

export default LoginForm;
