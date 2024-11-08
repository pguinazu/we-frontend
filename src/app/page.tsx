import React from 'react';
import Link from 'next/link';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import SplashScreen from './pages/SplashScreen';
import IntroScreen from './pages/IntroScreen';
import HomeScreen from './pages/HomeScreen';
import PrincipalFaqs from './pages/faq/PrincipalFaqs';
import LoginScreenLastStep from './pages/login/LoginScreenLastStep';
import SuccessAccountCreated from './pages/account/SuccessAccountCreated';
import LoginScreenLastStepPhoneNumber from './pages/login/LoginScreenLastStepPhoneNumber';

export default function HomePage() {
  return (
    <main className="flex mt-3 flex-col items-center justify-center min-h-screen text-white bg-center bg-no-repeat bg-cover">
      {/* <SplashScreen /> */}
      {/* <IntroScreen /> */}
      <HomeScreen />

      {/* <LoginScreenLastStep/> */}
      {/* <LoginScreenLastStepPhoneNumber/> */}
      {/* <SuccessAccountCreated/> */}
      {/* <PrincipalFaqs/> */}
    </main>
  );
}
