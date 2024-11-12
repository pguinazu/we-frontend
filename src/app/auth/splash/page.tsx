'use client';

import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo';
import IntroScreen from '../intro/page';

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Cambia el tiempo según la duración que desees para el splash

    return () => clearTimeout(timer); // Limpiar el temporizador
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-splash">
            <Logo />
          </div>
        </div>
      ) : (
        <IntroScreen />
      )}
    </>
  );
}
