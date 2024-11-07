import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  fullWidth?: boolean;
}

const BlackButton: React.FC<ButtonProps> = ({ label, onClick, fullWidth = false }) => {
  return (
    <button
      className={`${
        fullWidth ? 'w-full' : 'w-auto'
      } p-4 bg-black text-white font-bold rounded-md shadow-md hover:bg-gray-800`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default BlackButton;
