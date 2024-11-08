'use client';

import React from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import BlackButton from '../components/BlackButton';
import OutboxIcon from '@mui/icons-material/Outbox';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Image from 'next/image';

export default function  HomePage() {
  const handleReceiveClick = () => {
    console.log('Recibir fondos');
  };

  const handlePauseCardClick = () => {
    console.log('Pausar tarjeta');
  };

  return (
    <main className="flex flex-col items-center min-h-screen text-white relative">
      
      {/* Saludo personalizado para el usuario */}
      <div className="flex items-center px-8 mt-4 w-full">
        <div className="bg-[#EADDFF] text-[#4F378A] flex items-center justify-center rounded-full w-8 h-8">
          A
        </div>
        <span className="text-sm ml-2">Hola {`{UserName}`}</span>
      </div>

      {/* Sección de la tarjeta principal */}
      <div className="relative w-[296px] bg-gradient-to-r from-black to-[#434343] rounded-lg p-6 shadow-lg mt-6 z-10">
        <div className="flex justify-between items-center mb-2">
          {/* Iconos de la tarjeta */}
          <div className="flex items-center gap-2">
            <Image src="/icons/VisaIcon.png" alt="Visa Icon" width={50} height={20} />
          </div>
          <Image src="/icons/WeCard.png" alt="We Card" width={35} height={35} className="opacity-60" />
        </div>
        <div className="text-lg font-semibold tracking-wider">**** 4569</div>
        
        {/* Saldo disponible en la tarjeta */}
        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-xs font-normal">Saldo disponible:</p>
            <div className="text-2xl font-bold text-left">USD 0,00</div>
          </div>
          {/* Botón de navegación */}
          <div className='pt-6'>
          <div className="flex items-center justify-center w-[44px] h-[24px] bg-[#FEF7FF] rounded-full p-[4px_4px]">
          <NavigateNextIcon className="text-gray-800" style={{ width: '24px', height: '24px' }} />
          </div>
          </div>
        </div>
      </div>

      {/* Botones de acción para recibir fondos y pausar tarjeta */}
      <div className="flex mt-4 space-x-4 w-[296px] z-10">
      {/* Botón para recibir fondos con fondo negro */}
      <BlackButton
        label={<><FileDownloadIcon className="mr-2" />Recibir</>}
        fullWidth
        onClick={handleReceiveClick}
        className="text-sm bg-[#100F0F] text-[#FAFAFA] rounded-md h-[68px]" // Color de fondo negro y texto casi blanco
      />
      {/* Botón para pausar tarjeta con fondo gris oscuro */}
      {/* Falta arreglar que el Pausar tarjeta quede en la misma linea */}
      <BlackButton
        label={<><PauseCircleOutlineIcon className="mr-2" />Pausar tarjeta</>}
        fullWidth
        onClick={handlePauseCardClick}
        className="text-sm bg-[#202020] text-[#FAFAFA] rounded-md h-[68px]" // Fondo gris oscuro y texto casi blanco
      />
    </div>

      {/* Sección de movimientos vacía */}
      <div className="flex flex-col items-center mt-8 z-10">
        <OutboxIcon className="text-white mb-4 !text-[50px]" /> {/* Icono de caja vacía */}
        <Title text="Aún no hay movimientos" className="text-center text-xl pb-3" />
        <Subtitle text="Pronto podrás ver los últimos movimientos que realizaste en tu cuenta" className="text-center" />
      </div>

      {/* Sección de uso de la tarjeta en comercios */}
      <div className="flex flex-col items-start mt-8 px-8 w-full z-10">
        <Subtitle text="¿Dónde podes usar la tarjeta?" />

        {/* Fila de íconos de métodos de pago */}
        {/* Los iconos deberían de cambiarse ya que el background choca con el del icono */}
        <div className="flex justify-between mt-4 w-full">
          <div className="flex items-center justify-center w-[70px] h-[48px]">
            <Image src="/icons/ApplePayIcon.png" alt="Apple Pay" width={70} height={24} />
          </div>
          <div className="flex items-center justify-center w-[70px] h-[48px]">
            <Image src="/icons/AmazonPayIcon.png" alt="Amazon Pay" width={70} height={24} />
          </div>
          <div className="flex items-center justify-center w-[70px] h-[48px]">
            <Image src="/icons/PayPalIcon.png" alt="PayPal" width={70} height={24} />
          </div>
          <div className="flex items-center justify-center w-[70px] h-[48px]">
            {/* Icono de Google Wallet (comentado) */}
            <Image src="/icons/PayPalIcon.png" alt="PayPal" width={70} height={24} />
          </div>
        </div>

        {/* Descripción debajo de los íconos */}
        <Subtitle text="Vas a poder usar tu tarjeta en cualquier negocio físico o virtual que acepte VISA alrededor del mundo. Para más info, ingresa acá" className="mt-4" />
      </div>
    </main>
  );
}
