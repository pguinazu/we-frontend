'use client';

import React from 'react';
import Button from '../../components/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SuccessAccountCreated = () => {
  return (
    <div className="relative w-[360px] h-[800px] bg-gradient-to-b from-black via-[#232323] to-[#434343] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="flex justify-center items-center">
          <CheckCircleIcon className="text-green-700  rounded-full p-2" style={{ fontSize: '150px' }} />
        </div>
        <h1 className="text-center text-white font-lato font-bold text-lg leading-7 px-2">
          ¡Felicitaciones, tu cuenta se ha creado con éxito!
        </h1>
      </div>
      <div className="flex flex-col items-center gap-5 mt-5">
        <Button
          label="Ingresar a mi cuenta"
          onClick={() => console.log('Ingresar a mi cuenta')}
          fullWidth={true}
        />
        <Button
          label="Ver preguntas frecuentes"
          onClick={() => console.log('Ver preguntas frecuentes')}
          fullWidth={true}
        />
      </div>
    </div>
  );
};

export default SuccessAccountCreated;