import React from 'react';
import LoginForm from '../components/LoginForm';
import AppTitle from '../components/AppTitle';
import AppSubtitle from '../components/AppSubtitle';

export default function LoginPage() {
  return (
    <main className="flex mt-3 flex-col items-center justify-center min-h-screen text-white">
      <div className='absolute top-6 left-6 '>
        <div className="mb-6">
          <AppTitle text="Bienvenido a W3" />
        </div>
        <div className="mb-10">
          <AppSubtitle text="Empecemos por ingresar un correo electrónico y una contraseña para crear tu cuenta" />
        </div>
      </div>
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}
