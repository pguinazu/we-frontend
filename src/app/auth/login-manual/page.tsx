'use client';

import React, { useState } from 'react';
import { TextField, Checkbox, InputAdornment } from '@mui/material';
import Button from '@/app/components/Button';
import Title from '@/app/components/Title';
import Subtitle from '@/app/components/Subtitle';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useLogin } from '@/app/contexts/LogInContext';
import { authService } from '@/app/services/auth/authService';

const LoginPage = () => {
  const { loginData, setLoginData } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  const passwordValidationRules = [
    loginData.password.length >= 8 && loginData.password.length <= 16,
    /[A-Z]/.test(loginData.password),
    /\d/.test(loginData.password),
    /[!@#$%^&*(),.?":{}|<>]/.test(loginData.password),
  ];

  const isPasswordValid = passwordValidationRules.every((rule) => rule);

  const handleLogin = async () => {
    console.log("Form data:", loginData);
    try {
      const result = await authService.login(loginData);
      console.log('User Login:', result);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error Logging user:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const isFormValid = loginData.username !== '' && loginData.password !== '' && isPasswordValid;

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
        <div className="flex items-center gap-3 mb-2 px-2 pt-7">
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
      <div className="relative w-full max-w-xs p-5 bg-[#202020] shadow-md rounded-md flex flex-col gap-6">
        <TextField
          label="Correo electrónico"
          placeholder="juan@gmail.com"
          variant="filled"
          value={loginData.username}
          onChange={(e) =>
            setLoginData({ ...loginData, username: e.target.value })
          }
          fullWidth
          InputProps={{
            style: { backgroundColor: "#FAFAFA" }
          }}
        />

        <TextField
          label="Contraseña"
          placeholder="Contraseña"
          variant="filled"
          type={showPassword ? "text" : "password"}
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          fullWidth
          InputProps={{
            style: { backgroundColor: "#FAFAFA" },
            endAdornment:
              <InputAdornment
                position="end"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
          }}
        />

        {/* Sección de Recordarme y Olvidé mi contraseña */}
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
          onClick={handleLogin}
          fullWidth={true}
          className="bg-[#FAFAFA] text-[#202022]"
          disabled={!isFormValid}
        />
      </div>

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
          onClick={() => {}}
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
          onClick={() => {}}
          fullWidth
          className="flex items-center justify-center"
        />
      </div>

      {/* Registro */}
      <div className="text-center mt-6 text-[#FAFAFA] text-[14px]">
        ¿Aún no tenes cuenta?{" "}
        <a href="/auth/login" className="underline">
          Regístrate
        </a>
      </div>
    </div>
  );
};

export default LoginPage;