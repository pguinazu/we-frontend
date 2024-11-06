'use client';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import PopUp from '../../components/PopUp';
import LoginPersonalInfoForm from '../../components/LoginPersonalInfoForm';
// import { FiArrowLeft } from 'react-icons/fi';

const LoginScreenLastStep = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const handleInputChange = (setter: { (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (value: React.SetStateAction<string>): void; (arg0: any): void; }) => (e: { target: { value: any; }; }) => {
    setter(e.target.value);
  };

  const handleTermsChange = () => {
    setTermsAccepted((prev) => !prev);
  };

  const handleOpenPopUp = () => {
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className="w-[360px] h-[830px]  flex flex-col items-center p-4 relative">
      <div className="w-full flex items-center mb-4 text-[#FEF7FF]">
        {/* <FiArrowLeft className="mr-2" /> Falta icono */}
        <span>Volver</span>
      </div>
      <div className="w-full mb-4">
        <Title text="Último paso" />
      </div>
      <div className="w-full mb-6">
        <Subtitle text="Te pedimos estos últimos datos para poder crearte la cuenta" />
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
