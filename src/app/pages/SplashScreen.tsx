'use client'

import React from 'react';
import Logo from '../components/Logo';

export default function SplashScreen() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-splash">
        <Logo />
      </div>
    </div>
  );
}
