import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, fullWidth = false }) => {
  return (
    <button
      className={`${
        fullWidth ? 'w-full' : 'w-auto'
      } p-4 bg-gray-50 text-black font-bold rounded-md shadow-md hover:bg-gray-200`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
