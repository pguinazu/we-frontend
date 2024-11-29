import React from 'react';

interface AppTitleProps {
  text: string;
  textAlign?: 'left' | 'center' | 'right'; // Propiedad opcional para la alineación
}

const AppTitle: React.FC<AppTitleProps> = ({ text, textAlign = 'left' }) => {
  return (
    <h1 className="w-[296px] text-[24px]  leading-[32px] text-left mx-auto font-[var(--FontFamilyGeneral)]"
      style={{ textAlign }}>
      {text}
    </h1>
  );
};

export default AppTitle;
