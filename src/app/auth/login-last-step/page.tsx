'use client';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import PopUp from '../../components/PopUp';
import LoginPersonalInfoForm from '../../components/LoginPersonalInfoForm';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const LoginScreenLastStep = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const router = useRouter();

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center p-5 relative">
      {/* Cambiado de div a botón para mayor accesibilidad */}
      <button
        type="button"
        className="w-full flex items-center mb-4 text-[#FEF7FF] cursor-pointer bg-transparent border-none p-0"
        onClick={() => router.back()}
        aria-label="Volver"
      >
        <ArrowBackIcon className="mr-2" />
        <span>Volver</span>
      </button>
      <div className="w-full mb-4">
        <Title text="Último paso" textAlign="left" />
      </div>
      <div className="w-full">
        <Subtitle text="Te pedimos estos últimos datos para poder crearte la cuenta" textAlign="left" />
      </div>

      <LoginPersonalInfoForm />

      <div className="w-full text-center text-[#FEF7FF] text-[13px] my-6">
        o ingresá con redes sociales
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Button label="Registrarse con Google" onClick={() => {}} fullWidth />
        <Button label="Registrarse con Facebook" onClick={() => {}} fullWidth />
      </div>

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

export default LoginScreenLastStep;
