'use client';

import React from 'react';
import Button from '../../components/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BlackButton from '@/app/components/BlackButton';
import Title from '@/app/components/Title';
import { useRouter } from 'next/navigation';

const SuccessAccountCreated = () => {
  const router = useRouter();
  const handleGoToAccount = () => {
    router.push('/dashboard');
  };
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="flex justify-center items-center">
          <CheckCircleIcon className="text-green-700 rounded-full p-2" style={{ fontSize: '150px' }} />
        </div>
        <Title className="text-center text-white text-[20px] leading-[28px] w-[241px]" textAlign="center" text="¡Felicitaciones, tu cuenta se ha creado con éxito!" />
      </div>
      <div className="flex flex-col items-center gap-5 mt-5">
        <Button
          label="Ingresar a mi cuenta"
          onClick={handleGoToAccount}
          fullWidth={true}
        />
        <div className="w-full border border-white rounded-md">
          <BlackButton
            label="Ver preguntas frecuentes"
            onClick={() => console.log('Ver preguntas frecuentes')}
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessAccountCreated;
