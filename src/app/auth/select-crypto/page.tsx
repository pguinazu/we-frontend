"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CryptoCard from "@/app/components/CryptoCard";
import Subtitle from "@/app/components/Subtitle";
import { useCryptoContext } from "../../contexts/CryptoContext";

const SelectCrypto = () => {
  const { setSelectedCrypto } = useCryptoContext();
  const cryptos = [
    {
      icon: "/icons/USDC.png",
      title: "USDC",
      subtitle: "USDC",
    },
    {
      icon: "/icons/Tether.png",
      title: "Tether",
      subtitle: "USDT",
    },
    {
      icon: "/icons/DAI.png",
      title: "DAI",
      subtitle: "DAI",
    },
  ];

  const router = useRouter();

  const handleCardClick = (crypto: typeof cryptos[0]) => {
    setSelectedCrypto(crypto);
    router.push("/auth/select-crypto-red");
  };

  return (
    <div className="w-full h-full flex flex-col items-start p-5 relative">
      <div
        className="absolute top-5 left-5 flex items-center text-[#FEF7FF] cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowBackIcon className="mr-2" />
        <span>Volver</span>
      </div>

      <div className="w-full mt-12">
        <Subtitle text="Elegí la crypto que queres recibir" textAlign="left" />
      </div>

      <div className="w-full bg-[#202020] p-5 rounded-md shadow-md flex flex-col gap-4 mt-4">
        {cryptos.map((crypto, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(crypto)}
            className="cursor-pointer"
          >
            <CryptoCard
              icon={crypto.icon}
              title={crypto.title}
              subtitle={crypto.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCrypto;
