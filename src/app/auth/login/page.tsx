'use client';

import React from 'react';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Button from '../../components/Button';
import Image from 'next/image';
import LoginForm from '../../components/LoginForm'; 
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
    <main className="flex flex-col items-center justify-start min-h-screen text-white mt-3">
      <div className="w-full max-w-xs mb-4">
        <div className="flex items-center gap-3 mb-2 px-3 pt-7">
          <Image src="/icons/WeIcon.png" alt="We Icon" width={32} height={32} layout="fixed" />
          <Title text="Bienvenido a WƐ" textAlign="left" />
        </div>
        <Subtitle text="Empecemos por ingresar un correo electrónico y una contraseña para crear tu cuenta" textAlign="left" />
      </div>

      <LoginForm />

      <div className="w-full max-w-xs my-6">
        <Subtitle text="o ingresá con redes sociales" className="text-center" />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Button
          label={
            <div className="flex items-center justify-center gap-3 h-full">
              <Image src="/icons/Google.png" alt="Google Icon" width={32} height={32} layout="fixed" />
              <span className="text-[16px] leading-none">Registrarse con Google</span>
            </div>
          }
          onClick={handleGoogleLogin}
          fullWidth
          className="flex items-center justify-center"
        />

        <Button
          label={
            <div className="flex items-center justify-center gap-3 h-full">
              <Image src="/icons/Facebook.png" alt="Facebook Icon" width={32} height={32} layout="fixed" />
              <span className="text-[16px] leading-none">Registrarse con Facebook</span>
            </div>
          }
          onClick={handleFacebookLogin}
          fullWidth
          className="flex items-center justify-center mb-5"
        />
      </div>
    </main>
  );
}
