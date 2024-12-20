"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Title from "@/app/components/Title";
import SmallText from "@/app/components/SmallText";
import Button from "@/app/components/Button";
import BlackButton from "@/app/components/BlackButton";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccessTime from "@mui/icons-material/AccessTime";
import AccountBalanceWalletOutlined from "@mui/icons-material/AccountBalanceWalletOutlined";
import { generatePdf } from "../../utils/downloadPdf"; // Importar la función para generar el PDF

const CryptoMovements = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Recuperar parámetros de la URL
  const amount = searchParams.get("amount");
  const date = searchParams.get("date");
  const walletAddress = searchParams.get("wallet_address");

  // Lógica para descargar el comprobante
  const handleDownload = () => {
    // Crear el objeto de transacción con los datos disponibles
    const transaction: {
      id: string;
      type: "wallet";
      amount_received: string;
      date: string;
      wallet_address: string;
    } = {
      id: "wallet_transaction", // Un identificador genérico, ya que no hay un ID en este caso
      type: "wallet", // Tipo explícito como "wallet"
      amount_received: amount || "N/A",
      date: date || "N/A",
      wallet_address: walletAddress || "N/A",
    };
  
    // Generar el PDF
    generatePdf(transaction);
  };
  
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
        <Title text="Detalle del recibo" textAlign="left" />
      </div>

      {/* Card de detalles */}
      <div className="w-full bg-[#202020] p-4 rounded-lg shadow-lg">
        {/* Monto recibido */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <MonetizationOnOutlinedIcon className="text-[#FAFAFA] w-5 h-5" />
            <SmallText text="Monto recibido" className="text-[#FAFAFA]" />
          </div>
          <SmallText text={amount || "N/A"} className="text-[#FAFAFA]" />
        </div>

        {/* Fecha y hora */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <AccessTime className="text-[#FAFAFA] w-5 h-5" />
            <SmallText text="Fecha y hora" className="text-[#FAFAFA]" />
          </div>
          <SmallText text={date || "N/A"} className="text-[#FAFAFA]" />
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#CAC4D0] opacity-50 my-2"></div>

        {/* Dirección Wallet */}
        <div className="flex items-start gap-2">
          <AccountBalanceWalletOutlined className="text-[#FAFAFA] w-5 h-5 mt-[2px]" />
          <div className="flex flex-col">
            <SmallText text="Dirección wallet" className="text-[#FAFAFA] mb-1" />
            <SmallText text={walletAddress || "N/A"} className="text-[#FAFAFA]" />
          </div>
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
          onClick={handleDownload}
        />
      </div>
    </div>
  );
};

export default CryptoMovements;
