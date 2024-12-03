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
import SmallText from "@/app/components/SmallText";
import { useCryptoContext } from "../../contexts/CryptoContext";

const CryptoFinalScreen = () => {
  const router = useRouter();
  const { selectedCrypto, selectedNetwork } = useCryptoContext();

  const handleCopyClick = () => {
    navigator.clipboard.writeText(selectedNetwork?.hash ?? "Hash no disponible");
    alert("Dirección copiada al portapapeles");
  };

  const handleShareClick = () => {
    console.log("Datos seleccionados:");
    console.log("Criptomoneda:", selectedCrypto);
    console.log("Red:", selectedNetwork);
  };

  const handleGoHomeClick = () => {
    router.push("/dashboard");
  };

  const handleModifyClick = () => {
    router.push("/auth/select-crypto");
  };

  return (
    <div className="w-full h-full flex flex-col items-start p-5">
      <button
        className="absolute top-5 left-5 flex items-center text-[#FEF7FF] cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowBackIcon className="mr-2" />
        <span>Volver</span>
      </button>

      <div className="w-full mt-16">
        <Title
          text={`Dirección de ${selectedCrypto?.title ?? "Criptomoneda"}`}
          textAlign="center"
        />
      </div>

      <div className="w-full bg-[#373535] p-5 rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center flex-wrap">
          <div className="max-w-[80%]">
            <Subtitle
              text={`Tu dirección de ${selectedNetwork?.title ?? "Red"}`}
              textAlign="left"
              className="text-[#FAFAFA]"
            />
            <p className="text-[#FEF7FF] text-sm mt-1 break-words">
              {selectedNetwork?.hash ?? "Hash no disponible"}
            </p>
          </div>
          <button
            onClick={handleCopyClick}
            className="w-10 h-10 bg-[#FAFAFA] rounded-full flex items-center justify-center cursor-pointer shrink-0"
          >
            <ContentCopyIcon className="text-[#202020]" />
          </button>
        </div>
      </div>

      {/* Encabezado de selección */}
      <div className="w-full flex justify-between items-center mt-6 px-5">
        <Subtitle text="Seleccionaste" textAlign="left" />
        <button onClick={handleModifyClick}>
          <Subtitle
            text="Modificar"
            textAlign="right"
            className="underline cursor-pointer"
          />
        </button>
      </div>

      <div className="w-full bg-[#202020] p-5 rounded-lg shadow-md mt-2">
        <div className="">
          {/* Moneda */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MonetizationOnOutlinedIcon className="text-[#FAFAFA] w-4 h-4 shrink-0 sm:w-5 sm:h-5" />
              <SmallText text="Moneda" className="text-[#FAFAFA]" />
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <SmallText
                text={selectedCrypto?.title ?? "Criptomoneda"}
                className="text-[#FAFAFA] max-w-[140px] overflow-hidden"
                title={selectedCrypto?.title ?? "Criptomoneda"}
              />
            </div>
          </div>

          {/* Línea divisora */}
          <div className="w-full h-[1px] bg-[#CAC4D0] my-4 opacity-50"></div>

          {/* Red */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UsbOutlinedIcon className="text-[#FAFAFA] w-4 h-4 shrink-0 sm:w-5 sm:h-5" />
              <SmallText text="Red" className="text-[#FAFAFA]" />
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <SmallText
                text={selectedNetwork?.title ?? "Red"}
                className="text-[#FAFAFA] max-w-[140px] overflow-hidden"
                title={selectedNetwork?.title ?? "Red"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#202020] p-5 rounded-lg shadow-md mt-6 flex items-center gap-4">
        <InfoOutlinedIcon className="text-[#FAFAFA] w-5 h-5 shrink-0" />
        <Subtitle
          text={`Asegúrate de depositar ${selectedCrypto?.title ?? "Criptomoneda"} desde la red elegida: ${selectedNetwork?.title ?? "Red"}. De lo contrario perderás tus fondos y no podrás recuperarlos.`}
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
