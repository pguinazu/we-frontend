import React from 'react';
import LoginForm from '../components/LoginForm';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-[#232323] to-[#434343] text-white">
      <div className='absolute top-6 left-6 '>
        <div className="mb-6">
          <Title text="Bienvenido a W3" />
        </div>
        <div className="mb-10">
          <Subtitle text="Empecemos por ingresar un correo electrónico y una contraseña para crear tu cuenta" />
        </div>
      </div>
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}
