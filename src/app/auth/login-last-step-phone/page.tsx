'use client';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import PopUp from '../../components/PopUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoginPersonalInfoPhone from '@/app/components/LoginPersonalInfoPhone';

const LoginScreenLastStepPhoneNumber = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center p-4 relative">
      <div className="w-full flex items-center mb-4 text-[#FEF7FF]">
        <ArrowBackIcon className="mr-2" /> {/* Icono de flecha hacia la izquierda */}
        <span>Volver</span>
      </div>
      <div className="w-full mb-4">
        <Title text="Último paso" />
      </div>
      <div className="w-full">
        <Subtitle text="Te pedimos estos últimos datos para poder crearte la cuenta" />
      </div>

      <LoginPersonalInfoPhone/>

      {showPopUp && (
        <PopUp onClose={handleClosePopUp}>
          <div className="w-[296px] h-[620px] bg-[rgba(217,217,217,0.5)] p-4">
            <h2 className="text-black text-[22px] mb-4">Términos y Condiciones</h2>
            <p className="text-black">Aquí van los términos y condiciones...</p>
            <Button label="Cerrar" onClick={handleClosePopUp} fullWidth />
          </div>
        </PopUp>
      )}
    </div>
  );
};

export default LoginScreenLastStepPhoneNumber;
