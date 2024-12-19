"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Title from '@/app/components/Title';
import SmallText from '@/app/components/SmallText';
import Button from '@/app/components/Button';
import BlackButton from '@/app/components/BlackButton';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccessTime from "@mui/icons-material/AccessTime";
import AccountBalanceWalletOutlined from "@mui/icons-material/AccountBalanceWalletOutlined";
import { ReceiptLong } from '@mui/icons-material';
import { Storefront } from '@mui/icons-material';
import { SystemUpdate } from '@mui/icons-material';
import { RequestPage } from '@mui/icons-material';
const AllMovements = () => {
  const router = useRouter();

  return (
    <div className="w-[360px] h-auto flex flex-col items-start px-6 py-4 relative">
      {/* Botón volver */}
      <button
        className="absolute top-4 left-6 flex items-center text-[#FEF7FF] cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowBackIcon className="mr-1" />
        <span className="text-sm font-medium">Volver</span>
      </button>

      {/* Título */}
      <div className="w-full mt-14 mb-4 pr-4">
        <Title text="Detalle del pago con tarjeta" textAlign="left" />
      </div>

      {/* Card de detalles */}
      <div className="w-full bg-[#202020] p-4 rounded-lg shadow-lg">
        {/* Monto recibido */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <ReceiptLong className="text-[#FAFAFA] w-5 h-5" />
            <SmallText text="Id transacción" className="text-[#FAFAFA]" />
          </div>
          <SmallText text="tid_jX570da5Hl" className="text-[#FAFAFA]" />
        </div>

        {/* Fecha y hora */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <AccessTime className="text-[#FAFAFA] w-5 h-5" />
            <SmallText text="Fecha y hora" className="text-[#FAFAFA]" />
          </div>
          <SmallText text="25/10/2024 - 10:00" className="text-[#FAFAFA]" />
        </div>

        {/* Entidad */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <Storefront className="text-[#FAFAFA] w-5 h-5" />
            <SmallText text="Entidad" className="text-[#FAFAFA]" />
          </div>
          <SmallText text="{Merchant: Data_Name}" className="text-[#FAFAFA]" />
        </div>

        {/* Estado */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <SystemUpdate className="text-[#FAFAFA] w-5 h-5" />
            <SmallText text="Estado" className="text-[#FAFAFA]" />
          </div>
          <SmallText text="Aprobada" className="text-[#FAFAFA]" />
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#CAC4D0] opacity-50 my-2"></div>

        {/* Dirección Wallet */}
        <div className="flex justify-between items-center mb-3 mt-8">
          <div className="flex items-center gap-2">
            <RequestPage className="text-[#FAFAFA] w-5 h-5" />
            <SmallText text="Monto" className="text-[#FAFAFA]" />
          </div>
          <SmallText text="100 USD" className="text-[#FAFAFA]" />
        </div>
      </div>

      {/* Botones */}
      <div className="mt-48 w-full flex flex-col gap-2">
        <Button 
          label="Volver al inicio" 
          className="w-full" 
          onClick={() => router.push("/dashboard")}
        />
        <BlackButton 
          label="Descargar comprobante" 
          className="w-full border border-white" 
        />
      </div>
    </div>
  );
};

export default AllMovements;
