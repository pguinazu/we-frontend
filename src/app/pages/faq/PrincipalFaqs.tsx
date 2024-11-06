'use client';

import React, { useState } from 'react';
import CustomButton from '../../components/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface ButtonProps {
  label: string;
  onClick: () => void;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, fullWidth = false, className = '' }) => {
  return (
    <button
      className={`${fullWidth ? 'w-full' : 'w-auto'} p-4 font-bold rounded-md shadow-md hover:bg-gray-200 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const faqs = [
  { question: '¿Qué es W3?', answer: 'W3 es una tarjeta prepaga.' },
  { question: '¿Cómo cargo mi tarjeta VISA?', answer: 'Puedes cargarla en puntos autorizados.' },
  { question: '¿Dónde la puedo usar?', answer: 'Puedes usarla en cualquier comercio que acepte VISA.' },
  { question: '¿Cómo podés contactarte con nosotros?', answer: 'Puedes contactarte a través de nuestro sitio web.' },
  { question: '¿Cuáles son los requisitos para tener una tarjeta VISA?', answer: 'Necesitas ser mayor de edad y tener un documento válido.' },
];

const PrincipalFaqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative w-[360px] h-[800px]  flex flex-col items-center p-5">
      <div className="w-full flex flex-row items-center mb-5">
        <ArrowDropDownIcon className="text-white" />
        <h2 className="text-white font-lato text-lg ml-2">Preguntas frecuentes</h2>
      </div>
      <h3 className="text-white text-xl font-bold mb-5">¿Tenés alguna pregunta?</h3>
      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#FAFAFA] p-4 rounded-md shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-bold text-black">{faq.question}</span>
              <ArrowDropDownIcon
                className={`transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
              />
            </div>
            {activeIndex === index && (
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center gap-4 mt-20">
        <CustomButton
          label="Busca más preguntas acá"
          onClick={() => console.log('Busca más preguntas acá')}
          fullWidth={true}
        />
        <CustomButton
          label="Volver al inicio"
          onClick={() => console.log('Volver al inicio')}
          fullWidth={true}
        />
      </div>
    </div>
  );
};

export default PrincipalFaqs;
