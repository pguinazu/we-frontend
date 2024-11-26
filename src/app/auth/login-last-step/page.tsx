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
  // const [termsAccepted, setTermsAccepted] = useState(false); // lint fix
  const [showPopUp, setShowPopUp] = useState(false);

  const router = useRouter();

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
    <div className="w-full h-full flex flex-col items-center p-5 relative">
      <div className="w-full flex items-center mb-4 text-[#FEF7FF] cursor-pointer" onClick={() => router.back()}>
        <ArrowBackIcon className="mr-2" />
        <span>Volver</span>
      </div>
      <div className="w-full mb-2">
        <Title text="Último paso" textAlign='left' />
      </div>
      <div className="w-full">
        <Subtitle text="Te pedimos estos últimos datos para poder crearte la cuenta" textAlign='left' />
      </div>

      <LoginPersonalInfoForm/>

      {/* <div className=''> */}
      <Subtitle className='w-full text-center mt-8 mb-4' text="o ingresá con redes sociales"/>


      <div className="flex flex-col gap-4 w-full max-w-xs">
        {/* Botón Google */}
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
          className="flex items-center justify-center"
        />

        {/* Botón Facebook */}
        <Button
          label={
            <div className="flex items-center justify-center gap-3 h-full">
              <img
                src="/icons/Facebook.png"
                alt="Facebook Icon"
                className="w-8 h-8"
              />
              <span className="text-[16px] leading-none">
                Registrarse con Facebook
              </span>
            </div>
          }
          onClick={() => {}}
          fullWidth
          className="flex items-center justify-center"
        />
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
    // </div>
  );
};

export default LoginScreenLastStep;
