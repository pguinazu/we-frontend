'use client';

import React from 'react';
import Button from '../../components/Button';
import BlackButton from '@/app/components/BlackButton';
import Title from '@/app/components/Title';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import BackgroundCard from '@/app/components/BackgroundCard';

const SuccessAccountCreated = () => {
  const router = useRouter();

  const handleGoToAccount = () => {
    router.push('/dashboard');
  };

  const handleGoToFaqs = () => {
    router.push('/faq');
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Fondo detrás de todo */}
      <BackgroundCard />

      {/* Contenido principal */}
      <div className="flex flex-col items-center gap-5 z-10">
        <div className="flex justify-center items-center">
          <Image className='pt-1' alt="Success Icon" width={201} height={201} src={'/icons/Success.png'} />
        </div>
        <Title
          className="text-center text-white text-[20px] leading-[28px] w-[241px]"
          textAlign="center"
          text="¡Felicitaciones, tu cuenta se ha creado con éxito!"
        />
      </div>
      <div
        className="flex flex-col items-center gap-5 mt-10 w-[296px] z-10 "
        style={{ paddingTop: '100px' }} // Ajuste adicional de padding-top
      >
        <Button
          label="Ingresar a mi cuenta"
          onClick={handleGoToAccount}
          fullWidth={true}
          className="text-black shadow-md rounded-md"
        />
        <div className="w-full border border-white rounded-md">
          <BlackButton
            label="Ver preguntas frecuentes"
            onClick={handleGoToFaqs}
            fullWidth={true}
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessAccountCreated;
