"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import Subtitle from "@/app/components/Subtitle";
import Button from "@/app/components/Button";
import BlackButton from "@/app/components/BlackButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Image from "next/image";
import BackgroundCard from "@/app/components/BackgroundCard";
import Title from "@/app/components/Title";
import { cardService } from "../../services/card/cardService";

const CryptoFinalScreen = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handlePauseCard = async () => {
    try {
      const cardId = "4569"; // Asegúrate de obtener este ID correctamente desde algún estado o props
      const response = await cardService.pauseCard(cardId);
      console.log("Pause response:", response);
      setShowModal(true);
    } catch (err) {
      console.error("Error pausing card:", err);
    }
  };

  const handleCloseModal = () => {
    router.push("/dashboard");
    setShowModal(false);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <BackgroundCard
        height="28%"
        backgroundColor="#262429"
        shadowColor="rgba(0, 0, 0, 0.15)"
      />
      <div
        className="w-full h-full flex flex-col items-center p-5"
        style={{ position: "relative", zIndex: 1 }}
      >
        <button
          className="absolute top-7 left-7 flex items-center text-[#FEF7FF] cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowBackIcon className="mr-2" />
          <span>Volver</span>
        </button>

        <div className="w-full mt-16">
          <Subtitle
            text="Estás por pausar tu tarjeta"
            textAlign="left"
            className="text-lg"
          />
        </div>

        <div className="bg-gradient-to-r from-black to-[#434343] rounded-lg p-4 w-[296px] mt-6 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <Image
              src="/icons/VisaIcon.png"
              alt="Visa Icon"
              width={45}
              height={15.32}
            />
            <p className="text-xs font-medium text-white mt-1">Prepaga</p>
          </div>
          <div className="text-lg font-medium" style={{ color: "#EADDFF" }}>
            4569
          </div>
        </div>

        <div className="w-full bg-[#202020] p-5 rounded-lg shadow-md mt-20 flex flex-col">
          <div className="mb-4">
            <p className="text-base font-bold text-[#FAFAFA]">
              Tene en cuenta que al pausar tu tarjeta
            </p>
            <hr className="border-[rgba(202,196,208,0.5)] my-2" />
          </div>
          <div className="flex items-center gap-4">
            <InfoOutlinedIcon className="text-[#FAFAFA] w-5 h-5 shrink-0" />
            <Subtitle
              text="Tu saldo remanente no se pierde"
              textAlign="left"
              className="text-[#FAFAFA]"
            />
          </div>
          <div className="flex items-center gap-4 mt-4">
            <InfoOutlinedIcon className="text-[#FAFAFA] w-5 h-5 shrink-0" />
            <Subtitle
              text="Cualquier servicio adherido a tu tarjeta dejará de abonarse automáticamente"
              textAlign="left"
              className="text-[#FAFAFA]"
            />
          </div>
          <div className="flex items-center gap-4 mt-4">
            <InfoOutlinedIcon className="text-[#FAFAFA] w-5 h-5 shrink-0" />
            <Subtitle
              text="Podés reactivar tu tarjeta nuevamente en cualquier momento"
              textAlign="left"
              className="text-[#FAFAFA]"
            />
          </div>
        </div>

        <div className="fixed bottom-16 w-full px-5">
          <Button
            label="Pausar tarjeta"
            className="w-full"
            onClick={() => setShowModal(true)}
          />
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end">
            <div
              className="flex flex-col items-center rounded-t-3xl p-8 gap-4 w-full max-w-lg animate-slideup"
              style={{
                background:
                  "linear-gradient(to bottom, #000000 0%, #0d0d0d 100%)",
                borderRadius: "30px 30px 0 0",
              }}
            >
              <button onClick={handleCloseModal} className="self-end">
                <CloseIcon style={{ color: "#FAFAFA" }} />
              </button>
              <Title text="Estás por pausar tu tarjeta" textAlign="left" />
              <Subtitle text="¿Estás seguro de hacerlo?" textAlign="left" />
              <div className="flex flex-col gap-4 w-full">
                <Button
                  label="No, no la pauso"
                  onClick={handleCloseModal}
                  className="w-full"
                />
                <BlackButton
                  label="Sí, estoy seguro"
                  onClick={() => {
                    handlePauseCard();
                    setShowModal(false);
                  }}
                  className="w-full border border-white"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoFinalScreen;
