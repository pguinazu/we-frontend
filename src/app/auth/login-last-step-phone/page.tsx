'use client';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import PopUp from '../../components/PopUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoginPersonalInfoPhone from '@/app/components/LoginPersonalInfoPhone';

const LoginScreenLastStepPhoneNumber = () => {
  // const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  // const handleTermsChange = () => {
  //   setTermsAccepted((prev) => !prev);
  // }; // lint fix

  // const handleOpenPopUp = () => {
  //   setShowPopUp(true);
  // }; // lint fix

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

      {/* <div className="flex flex-col gap-4 w-full max-w-xs">
        <Button
          label={
            <div className="flex items-center justify-center gap-3 h-full">
              <img
                src="/icons/Google.png"
                alt="Google Icon"
                className="w-8 h-8"
              />
              <span className="text-[16px] leading-none">
                Registrarse con Google
              </span>
            </div>
          }
          onClick={() => {}}
          fullWidth
          className="flex items-center justify-center "
        />

        <Button
          label={
            <div className="flex items-center justify-center gap-3 h-full">
              <img
                src="/icons/Facebook.png"
                alt="Facebook Icon"
                className="w-8 h-8"
              />
              <span className="text-[16px]  leading-none">
                Registrarse con Facebook
              </span>
            </div>
          }
          onClick={() => {}}
          fullWidth
          className="flex items-center justify-center"
        />
      </div> */}

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
