import React from 'react';

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <p
      className="w-[296px] text-[14px] font-semibold leading-[24px] text-left font-[var(--FontFamilyGeneral)]"
      style={{
        color: 'var(--Schemes-Surface, #FEF7FF)',
      }}
    >
      {text}
    </p>
  );
};

export default Subtitle;
