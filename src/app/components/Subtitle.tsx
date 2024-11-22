import React from 'react';

interface SubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: React.ReactNode;
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text, textAlign = 'center', className, ...props }) => {
  return (
    <p
      className={`w-[296px] text-[14px] leading-[24px] text-center mx-auto ${className}`}
      style={{
        color: 'var(--Schemes-Surface, #FEF7FF)',
        textAlign,
        fontWeight: '600',
      }}
      {...props}
    >
      {text}
    </p>
  );
};

export default Subtitle;
