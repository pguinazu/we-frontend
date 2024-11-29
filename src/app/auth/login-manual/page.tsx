'use client';

import React, { useState } from 'react';
import { TextField, Checkbox, InputAdornment } from '@mui/material';
import Button from '@/app/components/Button';
import { Visibility, VisibilityOff, ErrorOutline } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  const router = useRouter();

  // Reglas de validación de la contraseña
  const passwordValidationRules = [
    password.length >= 8 && password.length <= 16,
    /[A-Z]/.test(password),
    /\d/.test(password),
    /[!@#$%^&*(),.?":{}|<>]/.test(password),
  ];

  // Validación completa de la contraseña
  const isPasswordValid = passwordValidationRules.every((rule) => rule);

  const handleLogin = () => {
    // Verifica si las credenciales coinciden con el usuario de prueba
      console.log("Inicio de sesión exitoso");
      router.push('/dashboard');
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Verifica si ambos campos están llenos y si la contraseña cumple con las reglas para habilitar el botón
  const isFormValid = email !== '' && password !== '' && isPasswordValid;

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6"
      style={{
        background: 'linear-gradient(3.12deg, #000000 3.74%, #232323 79.77%, #434343 124.44%)',
      }}
    >
      {/* Encabezado */}
      <div className="text-center text-white mb-8">
        <h1 className="text-[20px]">Iniciar sesión en W3</h1>
        <p className="text-[16px] mt-2">Ingresa tus datos para poder empezar a usar tu tarjeta cripto</p>
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
          error={touched.email}
          helperText={touched.email ? "Este correo no se encuentra registrado" : ""}
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: touched.email ? (
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
          error={touched.password}
          helperText={touched.password ? "La contraseña ingresada no es correcta, volve a intentarlo" : ""}
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: touched.password ? (
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
      <div className="w-full text-center text-[#FEF7FF] text-[14px] my-6">
        o ingresá con redes sociales
      </div>

      {/* Botones de redes sociales */}
      <div className="flex flex-col gap-4 w-[296px]">
        <Button
          label="Registrarse con Google"
          onClick={() => console.log("Google login")}
          fullWidth={true}
          className="bg-white text-[#202020]"
        />
        <Button
          label="Registrarse con Facebook"
          onClick={() => console.log("Facebook login")}
          fullWidth={true}
          className="bg-[#3B5998] text-white"
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
