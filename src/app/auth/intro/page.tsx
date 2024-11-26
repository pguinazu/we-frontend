'use client';

import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Title from '../../components/Title';
import { useRouter } from 'next/navigation';

export default function IntroScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinueClick = () => {
    router.push('/auth/login');
  };

  const handleLoginClick = () => {
    router.push('/auth/login-manual');
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-white">
      {showSplash ? (
        <div className="flex items-center justify-center h-full">
          <div className="final-position-logo animate-grow">
            <Logo />
          </div>
        </div>
      ) : (
        <>
          <div className="final-position-logo">
            <Logo />
          </div>

          <div className="absolute left-1/2 top-[395px] transform -translate-x-1/2 fade-in">
            <Title text="WƐ are crypto" />
          </div>

          <div className="absolute left-1/2 bottom-[168px] transform -translate-x-1/2 w-[296px] fade-in">
            <Button label="Crear cuenta" onClick={handleContinueClick} fullWidth />
          </div>

          <div className="absolute left-1/2 bottom-[120px] transform -translate-x-1/2 text-center  text-sm fade-in">
            ¿Ya tienes cuenta?{' '}
            <span onClick={handleLoginClick} className="underline cursor-pointer">
              Ingresa
            </span>
          </div>
        </>
      )}
    </div>
  );
}
