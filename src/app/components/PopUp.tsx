'use client'

import React from 'react';
import PropTypes from 'prop-types';

const PopUp = ({ children, onClose } : any ) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white p-6 rounded-md shadow-lg z-10">
        <button className="absolute top-2 right-2 text-xl font-bold" onClick={onClose}>
          &times;
        </button>
        {children}
        <button className="bg-white text-black w-full py-3 rounded-md mt-4 text-center shadow-md" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

PopUp.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopUp;
