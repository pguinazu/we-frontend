'use client';

import React, { useState } from 'react';
import BlackButton from '../components/BlackButton';
import Button from '../components/Button';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

const faqs = [
  { id: 1, question: '¿Qué es WƐ?', answer: 'WƐ es una tarjeta prepaga.' },
  { id: 2, question: '¿Cómo cargo mi tarjeta VISA?', answer: 'Puedes cargarla en puntos autorizados.' },
  { id: 3, question: '¿Dónde la puedo usar?', answer: 'Puedes usarla en cualquier comercio que acepte VISA.' },
  { id: 4, question: '¿Cómo podés contactarte con nosotros?', answer: 'Puedes contactarte a través de nuestro sitio web.' },
  { id: 5, question: '¿Cuáles son los requisitos para tener una tarjeta VISA?', answer: 'Necesitas ser mayor de edad y tener un documento válido.' },
];

const PrincipalFaqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const router = useRouter();

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center p-5">
      {/* Botón para volver */}
      <button
        className="w-full flex items-center mb-4 text-[#FEF7FF] cursor-pointer"
        onClick={() => router.back()}
        aria-label="Volver"
      >
        <ArrowBackIcon className="mr-2" />
        <span>Volver</span>
      </button>

      {/* Preguntas frecuentes */}
      <div className="w-full flex flex-row items-center mb-5">
        <HelpOutlineIcon className="text-white" />
        <h2 className="text-white text-lg ml-2">Preguntas frecuentes</h2>
      </div>
      <h3 className="text-white text-sm mb-5">¿Tenés alguna pregunta?</h3>
      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-[#FAFAFA] p-4 rounded-md shadow-md">
            <button
              className="flex justify-between items-center w-full text-left cursor-pointer"
              onClick={() => toggleFaq(faq.id)}
              aria-expanded={activeIndex === faq.id}
              aria-controls={`faq-content-${faq.id}`}
            >
              <span style={{ fontSize: '12px', fontWeight: '600', lineHeight: '24px' }}>{faq.question}</span>
              {activeIndex === faq.id ? (
                <ArrowDropUpIcon className="text-black" />
              ) : (
                <ArrowDropDownIcon className="text-black" />
              )}
            </button>
            {activeIndex === faq.id && (
              <p
                id={`faq-content-${faq.id}`}
                style={{ fontSize: '14px', fontWeight: '400', lineHeight: '24px' }}
                className="mt-3"
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Botones de acción */}
      <div className="w-full flex flex-col items-center gap-4 mt-4">
        <div className="pb-10">
          <BlackButton
            label="Busca más preguntas acá"
            onClick={() => console.log('Busca más preguntas acá')}
            className="w-[250px] h-[40px] bg-[#100F0F] rounded-md pb-10"
          />
        </div>
        <Button
          label="Volver al inicio"
          onClick={() => router.push('/dashboard')}
          fullWidth={true}
        />
      </div>
    </div>
  );
};

export default PrincipalFaqs;
