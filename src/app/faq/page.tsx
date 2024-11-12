'use client';

import React, { useState } from 'react';
import BlackButton from '../components/BlackButton';
import Button from '../components/Button';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    <div className="relative w-full h-full flex flex-col items-center p-5">
      <div className="w-full flex items-center mb-4 text-[#FEF7FF]">
        <ArrowBackIcon className="mr-2" /> {/* Icono de flecha hacia la izquierda */}
        <span>Volver</span>
      </div>

      <div className="w-full flex flex-row items-center mb-5">
        <HelpOutlineIcon className="text-white" />
        <h2 className="text-white font-lato text-lg ml-2">Preguntas frecuentes</h2>
      </div>
      <h3 className="text-white text-sm mb-5">¿Tenés alguna pregunta?</h3>
      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#FAFAFA] p-4 rounded-md shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <span style={{ fontSize: '12px', fontWeight: '600', lineHeight: '24px' }} className="">{faq.question}</span>
              {activeIndex === index ? (
                <ArrowDropUpIcon className="text-black" />
              ) : (
                <ArrowDropDownIcon className="text-black" />
              )}
            </div>
            {activeIndex === index && (
              <p
                style={{ fontSize: '14px', fontWeight: '400', lineHeight: '24px' }} 
                className="mt-3">
                  {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center gap-4 mt-4">
        <div className='pb-10'>
        <BlackButton
          label="Busca más preguntas acá"
          onClick={() => console.log('Busca más preguntas acá')}
          className="w-[250px] h-[40px] bg-[#100F0F] rounded-md pb-10" // Ajustes para tamaño y posición
        />
        </div>
        <Button
          label="Volver al inicio"
          onClick={() => console.log('Volver al inicio')}
          fullWidth={true}
        />
      </div>
    </div>
  );
};

export default PrincipalFaqs;
