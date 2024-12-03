'use client';

import React from 'react';
import LoginForm from '../../components/LoginForm';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Button from '../../components/Button';
import { authService } from '../../services/auth/authService';

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    try {
      const googleLoginUrl = await authService.loginWithGoogle();
      window.location.href = googleLoginUrl; // Redirige a la URL de Google
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const facebookLoginUrl = await authService.loginWithFacebook();
      window.location.href = facebookLoginUrl; // Redirige a la URL de Facebook
    } catch (error) {
      console.error('Error al iniciar sesión con Facebook:', error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-white  mt-3">
      {/* Encabezado */}
      <div className="w-full max-w-xs mb-4">
        <div className="flex items-center gap-3 mb-2 px-3 pt-7">
          <img src="/icons/WeIcon.png" alt="We Icon" className="w-8 h-8" />
          <Title text="Bienvenido a WƐ" textAlign="left" />
        </div>
        <div className="w-full">
          <Subtitle
            text="Empecemos por ingresar un correo electrónico y una contraseña para crear tu cuenta"
            textAlign="left"
          />
        </div>
      </div>

      {/* Formulario de inicio de sesión */}
      <LoginForm />

      {/* Texto para redes sociales */}
      <div className="w-full max-w-xs my-6">
        <Subtitle text="o ingresá con redes sociales" className="text-center" />
      </div>

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
          onClick={handleGoogleLogin}
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
          onClick={handleFacebookLogin}
          fullWidth
          className="flex items-center justify-center"
        />
      </div>
    </main>
  );
}
