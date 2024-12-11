'use client';

import React from 'react';
import Button from '../../components/Button';
import BlackButton from '@/app/components/BlackButton';
import Title from '@/app/components/Title';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
      <div className="flex flex-col items-center gap-5 mt-40">
        <div className="flex justify-center items-center">
          <Image
            src="/icons/Success.png"
            alt="Success Icon"
            className="icon-class"
            height={125}
            width={125}
            layout="fixed" // Especifica el tipo de diseño para mantener las dimensiones definidas sin distorsión
          />
        </div>
        <Title
          className="text-center text-white"
          textAlign="center"
          text="¡Felicitaciones, tu cuenta se ha creado con éxito!"
        />
      </div>
      <div className="flex flex-col items-center gap-5 mt-56 w-[296px]">
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
