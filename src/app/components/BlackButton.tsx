import React from 'react';

interface ButtonProps {
  label: string | React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;  
  disabled?: boolean;          
}

const BlackButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  fullWidth = false,
  className,
  style,
  disabled     
}) => {
  return (
    <button
      className={`${fullWidth ? 'w-full' : 'w-auto'} p-4 text-white rounded-lg shadow-md hover:bg-gray-800 ${className || ''}`}
      onClick={onClick}
      style={style}         
      disabled={disabled}  
    >
      {label}
    </button>
  );
};

export default BlackButton;
