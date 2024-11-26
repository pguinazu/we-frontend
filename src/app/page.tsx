import React from "react";
import IntroScreen from "./auth/intro/page";
import "./globals.css";

export default function HomePage() {
  return (
      <main className="flex mt-3 flex-col items-center justify-center min-h-screen text-white bg-center bg-no-repeat bg-cover">
        <IntroScreen />
      </main>
  );
}
