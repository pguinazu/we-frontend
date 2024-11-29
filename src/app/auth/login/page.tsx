'use client'

import React from 'react';
import LoginForm from '../../components/LoginForm';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Button from '../../components/Button';

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen text-white p-4 mt-3">
      {/* Encabezado */}
      <div className="w-full max-w-xs mb-4">
        <div className="w-full mb-4">
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
        <Button label="Registrarse con Google" onClick={() => {}} fullWidth className="bg-white text-[#202020]" />
        <Button label="Registrarse con Facebook" onClick={() => {}} fullWidth className="bg-[#3B5998] text-white" />
      </div>
    </main>
  );
}
