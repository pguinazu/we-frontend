"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CryptoCard from "@/app/components/CryptoCard";
import Subtitle from "@/app/components/Subtitle";
import { useCryptoContext } from "../../contexts/CryptoContext";
import { blockchainService } from "../../services/blockchain/blockchainService";
import { Network } from "../../interfaces/cryptoData";

const SelectCryptoRed = () => {
  const { setSelectedNetwork } = useCryptoContext();
  const [networks, setNetworks] = useState<Network[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchNetworks = async () => {
      try {
        const data = await blockchainService.getBlockchains();
        setNetworks(data);
      } catch {
        console.error("Error al cargar las redes");
      }
    };

    fetchNetworks();
  }, []);

  const handleCardClick = (network: Network) => {
    setSelectedNetwork({
      icon: network.icon, // Esto será opcional
      title: network.name,
      subtitle: `Red ${network.name}`,
      id: network.id,
    });
    router.push("/auth/select-crypto-last-step");
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
        <Subtitle text="Elegí la red para recibir" textAlign="left" />
      </div>

      <div className="w-full bg-[#202020] p-5 rounded-md shadow-md flex flex-col gap-4 mt-4">
        {networks.map((network) => (
          <button
            key={network.id}
            onClick={() => handleCardClick(network)}
            className="cursor-pointer"
          >
            <CryptoCard
              icon={network.icon} // Esto será opcional
              title={network.name}
              subtitle={`Red ${network.name}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectCryptoRed;
