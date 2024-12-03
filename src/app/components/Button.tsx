import React from 'react';

interface ButtonProps {
  label: string | React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset"; // Agregar el tipo aquí
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  fullWidth = false, 
  className = '', 
  disabled = false,
  type = "button", // Valor predeterminado
}) => {
  return (
    <button
      type={type} // Asignar el tipo aquí
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
