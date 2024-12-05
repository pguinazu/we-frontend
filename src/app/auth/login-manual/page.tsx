'use client';

import React, { useState } from 'react';
import { TextField, Checkbox, InputAdornment } from '@mui/material';
import Button from '@/app/components/Button';
import Title from '@/app/components/Title';
import Subtitle from '@/app/components/Subtitle';
import { Visibility, VisibilityOff, ErrorOutline } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authService } from '@/app/services/auth/authService';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const validationSchema = Yup.object({
    username: Yup.string()
      .email('Este correo no se encuentra registrado')
      .required('El correo electrónico es obligatorio'),
    password: Yup.string()
      .matches(/[A-Z]/, 'Debe contener al menos una mayúscula')
      .matches(/\d/, 'Debe contener al menos un número')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un carácter especial')
      .min(8, 'Debe tener entre 8 y 16 caracteres')
      .max(16, 'Debe tener entre 8 y 16 caracteres')
      .required('La contraseña es obligatoria'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { setErrors }) => {
      try {
        const result = await authService.login({
          username: values.username,
          password: values.password,
          rememberMe,
        });
        localStorage.setItem('user', JSON.stringify(result));
        router.push('/dashboard');
      } catch (error) {
        if (
          error &&
          typeof error === 'object' &&
          'response' in error &&
          (error as any).response.status === 401
        ) {
          setErrors({
            username: 'Este correo no se encuentra registrado',
            password: 'La contraseña ingresada no es correcta, volvé a intentarlo',
          });
        } else {
          console.error('Error al iniciar sesión:', error);
        }
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const isFormValid =
    formik.values.username &&
    formik.values.password &&
    !formik.errors.username &&
    !formik.errors.password;

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen px-6"
      style={{
        background:
          "linear-gradient(3.12deg, #000000 3.74%, #232323 79.77%, #434343 124.44%)",
      }}
    >
      {/* Encabezado */}
      <div className="w-full max-w-xs mb-4">
        <div className="flex items-center gap-3 mb-2 px-2 pt-9">
          <img src="/icons/WeIcon.png" alt="We Icon" className="w-8 h-8" />
          <Title text="Iniciar sesión" textAlign="left" />
        </div>
        <div className="w-full">
          <Subtitle
            text="Ingresa tus datos para poder empezar a usar tu tarjeta crypto"
            textAlign="left"
          />
        </div>
      </div>

      {/* Formulario */}
      <form
        onSubmit={formik.handleSubmit}
        className="relative w-full max-w-xs p-3 bg-[#202020] shadow-md rounded-md flex flex-col gap-6"
      >
        <TextField
  label="Correo electrónico"
  placeholder="juan@gmail.com"
  variant="filled"
  name="username"
  value={formik.values.username}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  error={Boolean(formik.errors.username && formik.touched.username)}
  helperText={formik.touched.username && formik.errors.username}
  fullWidth
  InputProps={{
    style: { backgroundColor: "#FAFAFA" },
    endAdornment: (
      <InputAdornment position="end">
        {formik.errors.username && formik.touched.username && (
          <ErrorOutline color="error" />
        )}
      </InputAdornment>
    ),
  }}
/>


<TextField
  label="Contraseña"
  placeholder="Contraseña"
  variant="filled"
  type={
    formik.errors.password && formik.touched.password
      ? 'text' // Muestra la contraseña si hay un error
      : showPassword
      ? 'text'
      : 'password'
  }
  name="password"
  value={formik.values.password}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  error={Boolean(formik.errors.password && formik.touched.password)}
  helperText={formik.touched.password && formik.errors.password}
  fullWidth
  InputProps={{
    style: { backgroundColor: '#FAFAFA' },
    endAdornment: (
      <InputAdornment position="end">
        {formik.errors.password && formik.touched.password ? (
          <ErrorOutline color="error" /> // Muestra el ícono de error
        ) : (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label={
              showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'
            }
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </button>
        )}
      </InputAdornment>
    ),
  }}
/>


        {/* Recordarme y Olvidé mi contraseña */}
        <div className="flex justify-between items-center w-full text-[#FAFAFA] text-[12px]">
          <div className="flex items-center space-x-1">
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={{ color: "#FAFAFA", padding: "0 4px 0 0" }}
              size="small"
            />
            <span>Recordarme</span>
          </div>
          <span className="cursor-pointer underline text-[11px] font-medium whitespace-nowrap">
            ¿Te olvidaste la contraseña?
          </span>
        </div>

        <Button
          label="Ingresar"
          type="submit"
          fullWidth={true}
          className="bg-[#FAFAFA] text-[#202022]"
          disabled={!isFormValid}
        />
      </form>

      {/* Separador de redes sociales */}
      <Subtitle
        className="w-full text-center mt-8 mb-4"
        text="o ingresá con redes sociales"
      />

      {/* Botones de redes sociales */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Button
          label={
            <div className="flex items-center justify-center gap-3 h-full">
              <img
                src="/icons/Google.png"
                alt="Google Icon"
                className="w-8 h-8"
              />
              <span className="text-[16px] leading-none">
                Registrarse con Google
              </span>
            </div>
          }
          onClick={async () => {
            try {
              const googleLoginUrl = await authService.loginWithGoogle();
              window.location.href = googleLoginUrl;
            } catch (error) {
              console.error("Error al iniciar sesión con Google:", error);
            }
          }}
          fullWidth
          className="flex items-center justify-center"
        />

        <Button
          label={
            <div className="flex items-center justify-center gap-3 h-full">
              <img
                src="/icons/Facebook.png"
                alt="Facebook Icon"
                className="w-8 h-8"
              />
              <span className="text-[16px] leading-none">
                Registrarse con Facebook
              </span>
            </div>
          }
          onClick={async () => {
            try {
              const facebookLoginUrl = await authService.loginWithFacebook();
              window.location.href = facebookLoginUrl;
            } catch (error) {
              console.error("Error al iniciar sesión con Facebook:", error);
            }
          }}
          fullWidth
          className="flex items-center justify-center"
        />
      </div>

      {/* Registro */}
      <div className="text-center mt-6 text-[#FAFAFA] text-[14px]">
        ¿Aún no tienes cuenta?{" "}
        <a href="/auth/register" className="underline">
          Regístrate
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
