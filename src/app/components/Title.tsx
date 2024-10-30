import React from 'react';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1 className="w-[296px] text-[24px] font-bold leading-[32px] text-left font-[var(--FontFamilyGeneral)]">
      {text}
    </h1>
  );
};

export default Title;
