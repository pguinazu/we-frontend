'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CryptoCard from '@/app/components/CryptoCard';
import Subtitle from '@/app/components/Subtitle';

const SelectCryptoRed = () => {
  const networks = [
    {
      icon: '/icons/Tron.png',
      title: 'Tron (TRC 20)',
      subtitle: 'Red nativa para hacer transferencias de Tron',
      hash: 'a1b2c3d4e5f6g7h8i9j0',
    },
    {
      icon: '/icons/Polygon.png',
      title: 'Polygon',
      subtitle: 'Red nativa de MATIC',
      hash: 'z9y8x7w6v5u4t3s2r1q0',
    },
  ];

  const router = useRouter();

  const handleCardClick = () => {
    router.push('/auth/select-crypto-last-step');
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
        <Subtitle text="Elegí la red para recibir" textAlign="left" />
      </div>

      <div className="w-full bg-[#202020] p-5 rounded-md shadow-md flex flex-col gap-4 mt-4">
        {networks.map((network) => (
          <div key={network.hash} onClick={handleCardClick} className="cursor-pointer">
            <CryptoCard
              icon={network.icon}
              title={network.title}
              subtitle={network.subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCryptoRed;
