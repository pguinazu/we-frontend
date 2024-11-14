'use client'

import React from 'react';
import LoginForm from '../../components/LoginForm';
import AppTitle from '../../components/AppTitle';
import AppSubtitle from '../../components/AppSubtitle';
import Button from '../../components/Button';

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white p-4">
      {/* Encabezado */}
      <div className="w-full max-w-xs mb-6">
        <AppTitle text="Bienvenido a WƐ" />
        <AppSubtitle text="Empecemos por ingresar un correo electrónico y una contraseña para crear tu cuenta" />
      </div>

      {/* Formulario de inicio de sesión */}
      <LoginForm />

    {/* Texto para redes sociales */}
<div className="w-full max-w-xs my-6">
  <AppSubtitle text="o ingresá con redes sociales" className="text-center" />
</div>

      {/* Botones de redes sociales */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Button label="Registrarse con Google" onClick={() => {}} fullWidth className="bg-white text-[#202020] font-semibold" />
        <Button label="Registrarse con Facebook" onClick={() => {}} fullWidth className="bg-[#3B5998] text-white font-semibold" />
      </div>
    </main>
  );
}
