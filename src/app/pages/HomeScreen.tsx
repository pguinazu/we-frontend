'use client';

import React from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import Image from 'next/image';

export default function HomePage() {
  const handleReceiveClick = () => {
    // Lógica para recibir fondos
    console.log('Recibir fondos');
  };

  const handlePauseCardClick = () => {
    // Lógica para pausar tarjeta
    console.log('Pausar tarjeta');
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-t from-[#434343] via-[#232323] to-black text-white">
      
      {/* Status bar */}
      <div className="flex justify-between items-center px-8 py-3 w-full">
        <span className="text-sm font-roboto">9:30</span>
        <div className="flex space-x-1">
          {/* Icon placeholders for signal, wifi, and battery */}
          <span className="w-4 h-4 bg-white opacity-40 rounded-full"></span>
          <span className="w-4 h-4 bg-white opacity-40 rounded-full"></span>
          <span className="w-4 h-4 bg-white opacity-40 rounded-full"></span>
        </div>
      </div>

      {/* User Greeting */}
      <div className="flex items-center px-8 mt-2 w-full">
        <div className="bg-[#EADDFF] text-[#4F378A] flex items-center justify-center rounded-full w-8 h-8">
          A
        </div>
        <span className="text-sm font-roboto ml-2">Hola {`{UserName}`}</span>
      </div>

      {/* Card Section */}
      <div className="relative w-[296px] bg-gradient-to-r from-black to-[#434343] rounded-lg p-4 shadow-lg mt-4">
        <div className="flex justify-between items-center mb-4">
          <Title text="VISA" />
          {/* <Image src="/we-icon.png" alt="WE Logo" width={20} height={20} /> */}
        </div>
        <div className="text-lg font-semibold">**** 4569</div>
        <Subtitle text="Saldo disponible:" />
        <div className="text-2xl font-bold">USD 0,00</div>
        <div className="flex mt-4 space-x-4">
          <Button label="Recibir" fullWidth onClick={handleReceiveClick} />
          <Button label="Pausar tarjeta" fullWidth onClick={handlePauseCardClick} />
        </div>
      </div>

      {/* Empty Transactions Section */}
      <div className="flex flex-col items-center mt-8">
        <div className="bg-white p-4 rounded-full mb-4">
          {/* <Image src="/outbox-icon.png" alt="Outbox Icon" width={32} height={32} /> */}
        </div>
        <Title text="Aún no hay movimientos" />
        <Subtitle text="Pronto podrás ver los últimos movimientos que realizaste en tu cuenta" />
      </div>

      {/* Where to Use Section */}
      <div className="flex flex-col items-center mt-8 px-8 w-full">
        <Subtitle text="¿Dónde podes usar la tarjeta?" />
        <div className="flex justify-between mt-4 w-full">
          {/* <Image src="/applepay-icon.png" alt="Apple Pay" width={70} height={48} /> */}
          {/* <Image src="/amazonpay-icon.png" alt="Amazon Pay" width={70} height={48} /> */}
          {/* <Image src="/paypal-icon.png" alt="PayPal" width={70} height={48} /> */}
          {/* <Image src="/googlepay-icon.png" alt="Google Pay" width={70} height={48} /> */}
        </div>
        <Subtitle text="Vas a poder usar tu tarjeta en cualquier negocio físico o virtual que acepte VISA alrededor del mundo. Para más info, ingresa acá" />
      </div>
    </main>
  );
}
