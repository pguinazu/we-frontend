import React from 'react';

interface ButtonProps {
  label: string | React.ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, fullWidth = false, className = '', disabled = false }) => {
  return (
    <button
      className={`${
        fullWidth ? 'w-full' : 'w-auto'
      } p-4 bg-gray-50 text-black font-bold rounded-md shadow-md hover:bg-gray-200 ${
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
