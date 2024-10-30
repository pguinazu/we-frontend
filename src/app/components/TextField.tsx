import React from 'react';

interface TextFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col w-[276px] h-[68px] p-[9px_12px_8px_12px] gap-3 opacity-0">
      <label className="text-xs font-normal text-gray-800">{label}</label>
      <input
        className="w-full h-[24px] text-sm font-normal bg-[#FAFAFA] text-gray-600 p-0"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
