import React from 'react';
import Link from 'next/link';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import SplashScreen from './pages/SplashScreen';
import IntroScreen from './pages/IntroScreen';
import HomeScreen from './pages/HomeScreen';

export default function HomePage() {
  return (
    <main className="flex mt-3 flex-col items-center justify-center min-h-screen text-white">
      {/* <SplashScreen /> */}
      <IntroScreen />
      {/* <HomeScreen /> */}
    </main>
  );
}
