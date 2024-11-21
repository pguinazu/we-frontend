import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface CryptoCardProps {
  icon: string; // Ruta de la imagen del icono
  title: string; // Título de la tarjeta
  subtitle: string; // Subtítulo de la tarjeta
}

const CryptoCard: React.FC<CryptoCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center justify-between bg-[#FEF7FF] rounded-md px-4 py-3 w-full h-auto shadow-md">
      {/* Icono principal */}
      <div className="flex items-start">
        <img src={icon} alt={title} className="w-8 h-8 object-contain" />

        {/* Título y subtítulo */}
        <div className="ml-4 flex flex-col">
          <div className="text-[#202020] text-[16px] leading-[24px] font-semibold">{title}</div>
          <div className="text-[#202020] text-[12px] leading-[18px] mt-1">{subtitle}</div>
        </div>
      </div>

      {/* Icono de redirección */}
      <ArrowForwardIosIcon style={{ color: '#202020', fontSize: '16px' }} />
    </div>
  );
};

export default CryptoCard;
