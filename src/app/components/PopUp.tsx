'use client';

import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

interface PopUpProps {
  children: ReactNode; // Cualquier contenido válido en React
  onClose: () => void; // Función sin parámetros
}

const PopUp: React.FC<PopUpProps> = ({ children, onClose }) => {
  return (
    <dialog
      className="fixed inset-0 flex items-center justify-center z-50 px-4"
      aria-modal="true"
    >
      {/* Div de fondo actualizado con rol y soporte de teclado */}
      <button
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClose();
          }
        }}
        aria-label="Cerrar"
      ></button>
      <div className="relative bg-white p-6 rounded-md shadow-lg z-10">
        {/* Botón para cerrar */}
        <button
          className="absolute top-2 right-2 text-xl"
          onClick={onClose}
          aria-label="Cerrar"
        >
          &times;
        </button>
        {children}
        {/* Botón adicional */}
        <button
          className="bg-white text-black w-full py-3 rounded-md mt-4 text-center shadow-md"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </dialog>
  );
};

PopUp.propTypes = {
  children: (props, propName, componentName, location, propFullName) => {
    const value = props[propName];
    if (typeof value === 'bigint') {
      return new Error(
        `${propFullName || propName} en el componente ${componentName} no puede ser de tipo bigint.`
      );
    }
    return PropTypes.node(props, propName, componentName, location, propFullName);
  },
  onClose: PropTypes.func.isRequired,
};

export default PopUp;
