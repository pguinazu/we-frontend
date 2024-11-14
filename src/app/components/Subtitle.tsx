import React from 'react';

interface SubtitleProps {
  text: React.ReactNode; // Cambiar a React.ReactNode para aceptar JSX
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text, textAlign = 'center', className }) => {
  return (
    <p
      className={`w-[296px] text-[14px] font-semibold leading-[24px] text-center mx-auto font-[var(--FontFamilyGeneral)] ${className}`}
      style={{
        color: 'var(--Schemes-Surface, #FEF7FF)',
        textAlign,
        fontWeight: '600',
      }}
    >
      {text}
    </p>
  );
};

export default Subtitle;
