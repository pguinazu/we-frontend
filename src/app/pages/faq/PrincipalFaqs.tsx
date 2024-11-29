'use client';

import React, { useState } from 'react';
import BlackButton from '../../components/BlackButton';
import Button from '../../components/Button';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const faqs = [
  { id: 1, question: '¿Qué es W3?', answer: 'W3 es una tarjeta prepaga.' },
  { id: 2, question: '¿Cómo cargo mi tarjeta VISA?', answer: 'Puedes cargarla en puntos autorizados.' },
  { id: 3, question: '¿Dónde la puedo usar?', answer: 'Puedes usarla en cualquier comercio que acepte VISA.' },
  { id: 4, question: '¿Cómo podés contactarte con nosotros?', answer: 'Puedes contactarte a través de nuestro sitio web.' },
  { id: 5, question: '¿Cuáles son los requisitos para tener una tarjeta VISA?', answer: 'Necesitas ser mayor de edad y tener un documento válido.' },
];

const PrincipalFaqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative w-[360px] h-[800px] flex flex-col items-center p-5">
      <button className="w-full flex items-center mb-4 text-[#FEF7FF]" tabIndex={0} onClick={() => console.log('Volver')} onKeyDown={(e) => e.key === 'Enter' && console.log('Volver')}>
        <ArrowBackIcon className="mr-2" />
        <span>Volver</span>
      </button>

      <div className="w-full flex flex-row items-center mb-5">
        <HelpOutlineIcon className="text-white" />
        <h2 className="text-white font-lato text-lg ml-2">Preguntas frecuentes</h2>
      </div>
      <h3 className="text-white text-xl font-bold mb-5">¿Tenés alguna pregunta?</h3>
      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-[#FAFAFA] p-4 rounded-md shadow-md">
            <button
              className="flex justify-between items-center cursor-pointer"
              tabIndex={0}
              onClick={() => toggleFaq(faq.id)}
              onKeyDown={(e) => e.key === 'Enter' && toggleFaq(faq.id)}
            >
              <span className="font-bold text-black">{faq.question}</span>
              <ArrowDropDownIcon className="text-black" />
            </button>
            {activeIndex === faq.id && <p className="mt-3 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center gap-4 mt-20">
        <BlackButton label="Busca más preguntas acá" onClick={() => console.log('Busca más preguntas acá')} fullWidth />
        <Button label="Volver al inicio" onClick={() => console.log('Volver al inicio')} fullWidth />
      </div>
    </div>
  );
};

export default PrincipalFaqs;
