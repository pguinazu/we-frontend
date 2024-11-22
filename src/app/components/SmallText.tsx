'use client'

import React from 'react';

interface SmallTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: React.ReactNode;
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
}

const SmallText: React.FC<SmallTextProps> = ({
  text,
  textAlign = 'left',
  className,
  ...props
}) => {
  return (
    <p
      className={`text-[14px] leading-[24px] truncate ${className}`}
      style={{
        color: 'var(--Schemes-Surface, #FEF7FF)',
        textAlign,
        fontWeight: '400', // Estilo más ligero que `Subtitle`
      }}
      {...props}
    >
      {text}
    </p>
  );
};

export default SmallText;
