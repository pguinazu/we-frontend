'use client';

import React, { useState } from 'react';
import Button from '../components/Button';
import PopUp from './PopUp';
import PhoneInput from './PhoneInput1';

const LoginPersonalInfoPhone: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  // const [phoneTouched, setPhoneTouched] = useState(false); // Estado para seguimiento de interacción // lint fix

  const handleCreateAccount = () => {
    // Lógica para crear cuenta aquí
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

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPhone(e.target.value);
  //   if (!phoneTouched) setPhoneTouched(true); // Marca como tocado solo la primera vez
  // };

  // Validar que el número de teléfono solo contenga dígitos y guiones
  const isPhoneValid = /^\d+(-\d+)*$/.test(phone); // Acepta solo dígitos y guiones

  return (
    <div className="relative mt-10 w-full h-auto bg-[#202020] shadow-md rounded-md flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <PhoneInput />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={handleTermsChange}
          className="w-4 h-4 bg-[#65558F]"
        />
        <label className="text-[#FEF7FF] text-sm">
          Aceptar <a href="#" className="underline" onClick={handleOpenPopUp}>términos y condiciones</a>
        </label>
      </div>

      <Button
        label="Crear cuenta"
        onClick={handleCreateAccount}
        fullWidth
        className={!isPhoneValid || !termsAccepted ? 'opacity-50 cursor-not-allowed' : ''}
        disabled={!isPhoneValid || !termsAccepted} // Deshabilita el botón si el número o los términos no son válidos
      />

      {showPopUp && (
        <PopUp onClose={handleClosePopUp}>
          <div className="text-black">
            <h2 className="text-lg  mb-4">Términos y Condiciones</h2>
            <p>Aquí van los términos y condiciones del servicio...</p>
          </div>
        </PopUp>
      )}
    </div>
  );
};

export default LoginPersonalInfoPhone;
