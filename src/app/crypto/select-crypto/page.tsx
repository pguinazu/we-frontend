"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Subtitle from "@/app/components/Subtitle";
import CryptoCard from "@/app/components/CryptoCard";
import { useCryptoContext } from "../../contexts/CryptoContext";
import { blockchainService } from "../../services/blockchain/blockchainService";
import { Crypto } from "../../interfaces/cryptoData";

const SelectCrypto = () => {
  const { setSelectedCrypto } = useCryptoContext();
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const data = await blockchainService.getTokens();
        setCryptos(data);
      } catch {
        console.error("Error al cargar las criptomonedas");
      }
    };

    fetchCryptos();
  }, []);

  const handleCardClick = (crypto: Crypto) => {
    setSelectedCrypto({
      icon: "?", // Icono placeholder
      title: crypto.name,
      subtitle: crypto.symbol ?? crypto.name,
      id: crypto.id,
    });
    router.push("/crypto/select-crypto-red");
  };

  return (
    <div className="w-full h-full flex flex-col items-start p-5 relative">
      <button
        className="absolute top-5 left-5 flex items-center text-[#FEF7FF] cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowBackIcon className="mr-2" />
        <span>Volver</span>
      </button>

      <div className="w-full mt-12">
        <Subtitle text="Elegí la crypto que queres recibir" textAlign="left" />
      </div>

      <div className="w-full bg-[#202020] p-5 rounded-md shadow-md flex flex-col gap-4 mt-4">
        {cryptos.map((crypto) => (
          <button
            key={crypto.id}
            onClick={() => handleCardClick(crypto)}
            className="cursor-pointer"
          >
            <CryptoCard
              title={crypto.name}
              subtitle={crypto.symbol ?? "Sin símbolo"}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectCrypto;
