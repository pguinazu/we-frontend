// IntroScreen.tsx
'use client';

import React from 'react';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import { useRouter } from 'next/navigation';

export default function IntroScreen() {
  const router = useRouter();
  const handleContinueClick = () => {
    router.push('/auth/login');
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white fade-in">
      <div className="absolute left-1/2 top-[120px] transform -translate-x-1/2">
        <Logo />
      </div>

      <div className="absolute left-1/2 top-[395px] transform -translate-x-1/2">
        <Title text="W3 are crypto" />
      </div>

      <div className="absolute left-1/2 bottom-[168px] transform -translate-x-1/2 w-[296px]">
        <Button label="Crear cuenta" onClick={handleContinueClick} fullWidth />
      </div>

      <div className="absolute left-1/2 bottom-[120px] transform -translate-x-1/2 text-center font-lato font-semibold text-sm">
        ¿Ya tienes cuenta? Ingresa
      </div>
    </div>
  );
}
