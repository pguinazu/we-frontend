import React from 'react';

interface SubtitleProps {
  text: string;
  className?: string; // Agregar className como opcional
}

const Subtitle: React.FC<SubtitleProps> = ({ text, className }) => {
  return (
    <p
      className={`w-[296px] text-[14px] font-semibold leading-[24px] text-center mx-auto font-[var(--FontFamilyGeneral)] ${className}`}
      style={{
        color: 'var(--Schemes-Surface, #FEF7FF)',
      }}
    >
      {text}
    </p>
  );
};

export default Subtitle;
