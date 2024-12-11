import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from 'next/image';

interface CryptoCardProps {
  icon?: string; // Ruta de la imagen del icono (opcional)
  title: string; // Título de la tarjeta
  subtitle: string; // Subtítulo de la tarjeta
}

const CryptoCard: React.FC<CryptoCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center justify-between bg-[#FEF7FF] rounded-md px-4 py-3 w-full h-auto shadow-md">
      <div className="flex items-start">
        {icon && (
          <Image 
            src={icon} 
            alt={title} 
            width={32} 
            height={32} 
            className="object-contain" 
            layout="fixed"
          />
        )}
        <div className={`flex flex-col ${icon ? "ml-4" : ""}`}>
          <div className="text-[#202020] text-[16px] leading-[24px] font-semibold">
            {title}
          </div>
          <div className="text-[#202020] text-[12px] leading-[18px] mt-1">
            {subtitle}
          </div>
        </div>
      </div>
      <ArrowForwardIosIcon style={{ color: "#202020", fontSize: "16px" }} />
    </div>
  );
};

export default CryptoCard;
