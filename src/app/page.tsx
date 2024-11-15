import React from "react";
import Link from "next/link";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import IntroScreen from "./auth/intro/page";
import HomeScreen from "./dashboard/page";
import PrincipalFaqs from "./faq/page";
import LoginScreenLastStep from "./auth/login-last-step/page";
import SuccessAccountCreated from "./auth/success-account/page";
import LoginScreenLastStepPhoneNumber from "./auth/login-last-step-phone/page";
import localFont from "next/font/local";
import "./globals.css";

export default function HomePage() {
  return (
      <main className="flex mt-3 flex-col items-center justify-center min-h-screen text-white bg-center bg-no-repeat bg-cover">
        <IntroScreen />
        {/* <HomeScreen /> */}

        {/* <LoginScreenLastStep/> */}
        {/* <LoginScreenLastStepPhoneNumber/> */}
        {/* <SuccessAccountCreated/> */}
        {/* <PrincipalFaqs/> */}
      </main>
  );
}
