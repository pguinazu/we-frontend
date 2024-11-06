import React from 'react';
import LoginScreenLastStep from './pages/login/LoginScreenLastStep';
import SuccessAccountCreated from './pages/account/SuccessAccountCreated';
import PrincipalFaqs from './pages/faq/PrincipalFaqs';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-black via-[#232323] to-[#434343] text-white">
      <LoginScreenLastStep/>
      {/* <SuccessAccountCreated/> */}
      {/* <PrincipalFaqs/> */}
    </main>
  );
}
