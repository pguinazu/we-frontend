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
        {/* Icono e Título */}
        <div className="flex items-center gap-3 mb-2 px-3 ">
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
    <Subtitle className='w-full text-center mt-8 mb-4' text="o ingresá con redes sociales"/>

      {/* Botones de redes sociales */}
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
    </main>
  );
}
