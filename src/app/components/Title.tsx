import React from 'react';

interface TitleProps {
  text: string;
  textAlign?: 'left' | 'center' | 'right'; // Propiedad opcional para la alineación
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, textAlign = 'center', className }) => {
  return (
    <h1
      className={`w-[296px] text-[24px] leading-[32px] mx-auto ${className || ''}`}
      style={{ 
        textAlign,
        color: 'var(--Schemes-Surface, #FEF7FF)',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '32px',
        fontFamily: 'Lato',
        fontStyle: 'normal',
      }} // Aplicamos `textAlign` aquí
    >
      {text}
    </h1>
  );
};

export default Title;
