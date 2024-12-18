import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';

interface MovementProps {
  title: string;
  date: string;
}

const Movement: React.FC<MovementProps> = ({ title, date }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="relative flex items-center justify-between bg-[#FAFAFA] border-b border-[#EADDFF] rounded-lg px-4 py-2 w-full">
      {/* Contenido del movimiento */}
      <div className="flex flex-col">
        <span className="font-semibold text-sm text-[#202020]">{title}</span>
        <span className="text-xs text-[#202020]">{date}</span>
      </div>

      {/* Icono de menú */}
      <div className="relative">
        <MoreHorizIcon 
          className="text-[#202020] cursor-pointer"
          onClick={toggleMenu}
        />
        {menuVisible && (
          <>
            {/* Fondo Oscuro */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu} // Cierra el menú al hacer clic fuera
              style={{ height: '100%', width: '100%', position: 'fixed' }}
            ></div>

            {/* Menú Desplegable */}
            <div 
              className="absolute top-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg w-[240px] z-50"
              style={{ transform: 'translate(15px, -15%)' }}
            >
              {/* Opción: Ver detalle */}
              <div 
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => console.log('Ver detalle')}
              >
                <ArrowForwardIcon className="text-[#202020] mr-3" />
                <span className="text-sm font-semibold text-[#202020] whitespace-nowrap">Ver detalle</span>
              </div>
              {/* Opción: Descargar comprobante */}
              <div 
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => console.log('Descargar comprobante')}
              >
                <DownloadIcon className="text-[#202020] mr-3" />
                <span className="text-sm font-semibold text-[#202020] whitespace-nowrap">
                  Descargar comprobante
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Movement;
