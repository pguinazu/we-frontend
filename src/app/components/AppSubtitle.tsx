import React from 'react';

interface SubtitleProps {
  text: string;
  className?: string; // Clase opcional
}

const Subtitle: React.FC<SubtitleProps> = ({ text, className }) => {
  return (
    <p
      className={`w-[296px] text-[14px] font-semibold leading-[24px] mx-auto font-[var(--FontFamilyGeneral)] ${className || 'text-left'}`}
      style={{
        color: 'var(--Schemes-Surface, #FEF7FF)',
      }}
    >
      {text}
    </p>
  );
};

export default Subtitle;
