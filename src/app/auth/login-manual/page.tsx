'use client';

import React, { useState } from 'react';
import { TextField, Checkbox, InputAdornment } from '@mui/material';
import Button from '@/app/components/Button';
import Title from '@/app/components/Title';
import Subtitle from '@/app/components/Subtitle';
import { Visibility, VisibilityOff, ErrorOutline } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  const router = useRouter();

  // Usuario de prueba
  const adminUser = { email: 'admin', password: 'Pepe1234.' };

  // Reglas de validación de la contraseña
  const passwordValidationRules = [
    password.length >= 8 && password.length <= 16,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[!@#$%^&*(),.?":{}|<>]/.test(password),
  ];

  // Validación completa de la contraseña
  const isPasswordValid = passwordValidationRules.every((rule) => rule);

  const handleLogin = () => {
    // Verifica si las credenciales coinciden con el usuario de prueba
    if (email === adminUser.email && password === adminUser.password) {
      console.log("Inicio de sesión exitoso");
      router.push('/dashboard');
    } else {
      setEmailError(email !== adminUser.email);
      setPasswordError(password !== adminUser.password);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Verifica si ambos campos están llenos y si la contraseña cumple con las reglas para habilitar el botón
  const isFormValid = email !== '' && password !== '' && isPasswordValid;

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen px-6"
      style={{
        background: 'linear-gradient(3.12deg, #000000 3.74%, #232323 79.77%, #434343 124.44%)',
      }}
    >
      {/* Encabezado */}
      <div className="w-full max-w-xs mb-4">
        <div className="flex items-center gap-3 mb-4 px-3 pt-7">
          <img src="/icons/WeIcon.png" alt="We Icon" className="w-8 h-8" />
          <Title text="Iniciar sesión" textAlign="left" />
        </div>
        <Subtitle 
          text="Ingresa tus datos para poder empezar a usar tu tarjeta crypto"
          textAlign="left" 
        />
      </div>

      {/* Formulario */}
      <div className="w-[296px] bg-[#202020] shadow-md rounded-md flex flex-col gap-6 p-6">
        <TextField
          label="Correo electrónico"
          placeholder="juan@gmail.com"
          variant="filled"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setTouched((prev) => ({ ...prev, email: true }));
          }}
          fullWidth
          error={emailError && touched.email}
          helperText={emailError && touched.email ? "Este correo no se encuentra registrado" : ""}
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: emailError && touched.email ? (
              <InputAdornment position="end">
                <ErrorOutline color="error" />
              </InputAdornment>
            ) : null,
          }}
        />

        <TextField
          label="Contraseña"
          placeholder="Contraseña"
          variant="filled"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setTouched((prev) => ({ ...prev, password: true }));
          }}
          fullWidth
          error={passwordError && touched.password}
          helperText={passwordError && touched.password ? "La contraseña ingresada no es correcta, volve a intentarlo" : ""}
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: passwordError && touched.password ? (
              <InputAdornment position="end">
                <ErrorOutline color="error" />
              </InputAdornment>
            ) : (
              <InputAdornment position="end" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
        />

        {/* Sección de Recordarme y Olvidé mi contraseña */}
        <div className="flex justify-between items-center w-full text-[#FAFAFA] text-[12px]">
          <div className="flex items-center space-x-1">
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={{ color: '#FAFAFA', padding: '0 4px 0 0' }}
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
      <Subtitle className='w-full text-center mt-8 mb-4' text="o ingresá con redes sociales"/>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        {/* Botón Google */}
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

        {/* Botón Facebook */}
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
  ¿Aún no tenes cuenta? <a href="/auth/login" className="underline">Regístrate</a>
</div>
    </div>
  );
};

export default LoginPage;
