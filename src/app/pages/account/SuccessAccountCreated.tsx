'use client';

import React from 'react';
import Button from '../../components/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BlackButton from '@/app/components/BlackButton';

const SuccessAccountCreated = () => {
  return (
    <div className="relative w-[360px] h-[800px] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="flex justify-center items-center">
          <CheckCircleIcon
            className="text-green-700"
            style={{
              fontSize: '150px',
            }}
          />
        </div>
        <h1 className="text-center text-white font-lato font-bold text-[20px] leading-[28px] w-[241px]">
          ¡Felicitaciones, tu cuenta se ha creado con éxito!
        </h1>
      </div>
      <div className="flex flex-col items-center gap-5 mt-10 w-[296px]">
        <Button
          label="Ingresar a mi cuenta"
          onClick={() => console.log('Ingresar a mi cuenta')}
          fullWidth={true}
          className="text-black font-semibold shadow-md rounded-md"
        />
        <div className="w-full border border-white rounded-md">
          <BlackButton
            label="Ver preguntas frecuentes"
            onClick={() => console.log('Ver preguntas frecuentes')}
            fullWidth={true}
            className="text-white font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessAccountCreated;
