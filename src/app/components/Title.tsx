import React from 'react';

interface TitleProps {
  text: string;
  textAlign?: 'left' | 'center' | 'right'; // Propiedad opcional para la alineación
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, textAlign = 'center', className }) => {
  return (
    <h1
      className={`w-[296px] text-[24px] font-bold leading-[32px] mx-auto font-[var(--FontFamilyGeneral)] ${className || ''}`}
      style={{ textAlign }} // Aplicamos `textAlign` aquí
    >
      {text}
    </h1>
  );
};

export default Title;
