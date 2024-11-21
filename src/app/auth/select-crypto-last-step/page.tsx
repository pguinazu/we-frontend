"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Title from "@/app/components/Title";
import Subtitle from "@/app/components/Subtitle";
import Button from "@/app/components/Button";
import BlackButton from "@/app/components/BlackButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import UsbOutlinedIcon from "@mui/icons-material/UsbOutlined";

const CryptoFinalScreen = () => {
  const router = useRouter();

  const handleCopyClick = () => {
    navigator.clipboard.writeText("jzj3ty7pssp1v8qw3to8y4tg0349595");
    alert("Dirección copiada al portapapeles");
  };

  const handleShareClick = () => {
    console.log("Compartir dirección");
  };

  const handleGoHomeClick = () => {
    router.push("/dashboard");
  };

  const handleModifyClick = () => {
    router.push("/auth/select-crypto");
  };

  return (
    <div className="w-full h-full flex flex-col items-start p-5">
      <div
        className="absolute top-5 left-5 flex items-center text-[#FEF7FF] cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowBackIcon className="mr-2" />
        <span>Volver</span>
      </div>

      <div className="w-full mt-16">
        <Title text="Dirección de DAI" textAlign="center" />
      </div>

      <div className="w-full bg-[#373535] p-5 rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center flex-wrap">
          <div className="max-w-[80%]">
            <Subtitle
              text="Tu dirección de Tron (TRC 20)"
              textAlign="left"
              className="text-[#FAFAFA]"
            />
            <p className="text-[#FEF7FF] text-sm mt-1 break-words">
              jzj3ty7pssp1v8qw3to8y4tg0349595
            </p>
          </div>
          <div
            onClick={handleCopyClick}
            className="w-10 h-10 bg-[#FAFAFA] rounded-full flex items-center justify-center cursor-pointer shrink-0"
          >
            <ContentCopyIcon className="text-[#202020]" />
          </div>
        </div>
      </div>

      {/* Encabezado de selección */}
      <div className="w-full flex justify-between items-center mt-6 px-5">
        <Subtitle
          text="Seleccionaste"
          textAlign="left"
          className="text-[#FAFAFA]"
        />
        <Subtitle
          text="Modificar"
          textAlign="right"
          className="text-[#AFAFAF] underline cursor-pointer"
          onClick={handleModifyClick}
        />
      </div>

      <div className="w-full bg-[#202020] p-5 rounded-lg shadow-md mt-2">
        <div className="mt-4">
          {/* Moneda */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MonetizationOnOutlinedIcon className="text-[#FAFAFA] w-4 h-4 shrink-0 sm:w-5 sm:h-5" />
              <Subtitle text="Moneda" textAlign="left" className="text-[#FAFAFA]" />
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {/* <img
                src="/icons/DAI.png"
                alt="DAI"
                className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
              /> */}
              <Subtitle
                text="DAI"
                textAlign="right"
                className="text-[#FAFAFA] max-w-[120px] sm:max-w-[140px] overflow-hidden text-ellipsis"
                title="DAI"
              />
            </div>
          </div>

          {/* Línea divisora */}
          <div className="w-full h-[1px] bg-[#CAC4D0] my-4 opacity-50"></div>

          {/* Red */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UsbOutlinedIcon className="text-[#FAFAFA] w-4 h-4 shrink-0 sm:w-5 sm:h-5" />
              <Subtitle text="Red" textAlign="left" className="text-[#FAFAFA]" />
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {/* <img
                src="/icons/Tron.png"
                alt="Tron"
                className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
              /> */}
              <Subtitle
                text="Tron (TRC 20)"
                textAlign="right"
                className="text-[#FAFAFA] sm:max-w-[140px] overflow-hidden text-ellipsis"
                title="Tron (TRC 20)"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#202020] p-5 rounded-lg shadow-md mt-6 flex items-center gap-4">
        <InfoOutlinedIcon className="text-[#FAFAFA] w-5 h-5 shrink-0" />
        <Subtitle
          text="Asegúrate de depositar DAI desde la red elegida: Tron (TRC 20). De lo contrario perderás tus fondos y no podrás recuperarlos."
          textAlign="left"
          className="text-[#FAFAFA]"
        />
      </div>

      <div className="w-full flex flex-col items-center gap-4 mt-6">
        <Button
          label="Compartir dirección"
          onClick={handleShareClick}
          className="w-full"
        />
        <BlackButton
          label="Volver al inicio"
          onClick={handleGoHomeClick}
          fullWidth
          className="border border-white"
        />
      </div>
    </div>
  );
};

export default CryptoFinalScreen;
