import React from 'react';

interface ButtonProps {
  label: string | React.ReactNode;
  onClick?: () => void; // Cambiar a opcional
  type?: 'button' | 'submit' | 'reset'; // Soporte para atributo `type`
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button', // Valor predeterminado para `type`
  fullWidth = false,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      type={type} // Usar el atributo `type`
      style={{
        textAlign: 'center',
        color: '#000000',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        fontFamily: 'Lato',
        fontStyle: 'normal',
      }}
      className={`${
        fullWidth ? 'w-full' : 'w-auto'
      } p-4 bg-gray-50 text-black rounded-md shadow-md hover:bg-gray-200 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
