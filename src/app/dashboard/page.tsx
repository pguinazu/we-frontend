'use client';

import React from 'react';
import Link from 'next/link';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import BlackButton from '../components/BlackButton';
import OutboxIcon from '@mui/icons-material/Outbox';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from '../LoginContext';
import BackgroundCard from '../components/BackgroundCard';

export default function HomePage() {
  const { formData } = useForm();
  const router = useRouter();

  const handleReceiveClick = () => {
    router.push('/auth/select-crypto');
  };

  const handlePauseCardClick = () => {
    console.log('Pausar tarjeta');
  };

  return (
    <div>
      {/* Fondo detrás de todo con el nuevo color */}
      <BackgroundCard
        height="375px"
        backgroundColor="#181818" // Color de fondo actualizado
        shadowColor="rgba(0, 0, 0, 0.15)"
      />

      <main className="flex flex-col items-center min-h-screen text-white relative z-10 mt-2">
        <div className="flex items-center px-8 mt-4 w-full">
          <div className="bg-[#EADDFF] text-[#4F378A] flex items-center justify-center rounded-full w-8 h-8 ml-2">
            A
          </div>
          <span className="text-sm ml-2">Hola {formData.firstName}</span>
        </div>

        <div className="relative w-[296px] bg-gradient-to-r from-black to-[#434343] rounded-lg p-6 shadow-lg mt-6 z-10">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <Image src="/icons/VisaIcon.png" alt="Visa Icon" width={50} height={20} />
            </div>
            <Image src="/icons/WeIcon.png" alt="We Card" width={35} height={35} />
          </div>
          <div className="text-lg tracking-wider" style={{ color: '#EADDFF' }}>**** 4569</div>
          <div className="flex items-center justify-between mt-6">
            <div>
              <p className="text-xs font-normal" style={{ color: '#EADDFF' }}>Saldo disponible:</p>
              <div className="text-2xl text-left" style={{ color: '#EADDFF' }}>USD 0,00</div>
            </div>
            <div className="pt-6">
              <div className="flex items-center justify-center w-[44px] h-[24px] bg-[#FEF7FF] rounded-full p-[4px_4px]">
                <NavigateNextIcon className="text-gray-800" style={{ width: '24px', height: '24px' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-4 space-x-4 w-[296px] z-10">
          <BlackButton
            label={
              <>
                <FileDownloadIcon className="mr-2" />Recibir
              </>
            }
            fullWidth
            onClick={handleReceiveClick}
            className="text-sm bg-[#100F0F] text-[#FAFAFA] rounded-md h-[68px]"
          />
          <BlackButton
            label={
              <>
                <PauseCircleOutlineIcon className="mr-2" />Pausar tarjeta
              </>
            }
            fullWidth
            onClick={handlePauseCardClick}
            className="text-sm bg-[#202020] text-[#FAFAFA] rounded-md h-[68px]"
          />
        </div>
        <div className="flex flex-col items-center mt-10 0 z-10">
          <OutboxIcon className="text-white mb-4 !text-[50px]" />
          <Title text="Aún no hay movimientos" className="text-center text-xl pb-3" />
          <Subtitle
            text="Pronto podrás ver los últimos movimientos que realizaste en tu cuenta"
            className="text-center"
          />
        </div>

        <div className="flex flex-col items-start mt-10 px-8 w-full z-10">
          <Subtitle text="¿Dónde podes usar la tarjeta?" textAlign="left" />

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
              <Image src="/icons/PayPalIcon.png" alt="PayPal" width={70} height={24} />
            </div>
          </div>

          <Subtitle
            text={
              <>
                Vas a poder usar tu tarjeta en cualquier negocio físico o virtual que acepte VISA alrededor del mundo. Para más info,<span> </span>
                <Link href="/faq" className="underline">
                  ingresa acá
                </Link>
              </>
            }
            className="mt-4 text-left"
            textAlign="left"
          />
        </div>
      </main>
    </div>
  );
}
