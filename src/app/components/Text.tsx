import React from 'react';

interface TextProps {
  text: React.ReactNode;
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
  maxWidth?: string; // Parámetro para limitar el ancho
  color?: string; // Parámetro para especificar el color del texto
}

const Text: React.FC<TextProps> = ({
  text,
  textAlign = 'left',
  className = '',
  maxWidth = '100%',
  color = 'inherit', // Valor predeterminado para mantener el color actual
}) => {
  return (
    <p
      className={`mx-auto ${className}`}
      style={{
        textAlign,
        maxWidth,
        color, // Aplicar el color especificado
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      {text}
    </p>
  );
};

export default Text;
