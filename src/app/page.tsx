import React from 'react';
import Link from 'next/link';
import Title from './components/Title';
import Subtitle from './components/Subtitle';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-black via-[#232323] to-[#434343] text-white">
      {/* Usamos los componentes reutilizables */}
      <Title text="Bienvenido a WE - Workshop Cryptowallet" />
      <Subtitle text="Empecemos por ingresar un correo electrónico y una contraseña para crear tu cuenta" />

      {/* Botón para navegar al login */}
      <Link href="/login" className="px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700 text-lg font-semibold transition-colors">
        Iniciar sesión
      </Link>
    </main>
  );
}
