"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import BlackButton from '../components/BlackButton';
import OutboxIcon from '@mui/icons-material/Outbox';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from '../contexts/SignUpContext';
import BackgroundCard from '../components/BackgroundCard';
import { useCardState } from '../contexts/CardStateContext';
import { cardService } from '../services/card/cardService';
import { generatePdf } from "../../app/utils/downloadPdf";

type Transaction = {
  id: string;
  type: 'wallet' | 'card';
  entity?: string;
  amount_received?: string;
  date: string;
  amount?: string;
  wallet_address?: string;
  status?: string;
};

type MovementProps = {
  title: string;
  date: string;
  transaction: Transaction;
};

const Movement: React.FC<MovementProps> = ({ title, date, transaction }) => {
  const [menuDropdownVisible, setMenuDropdownVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleMenuDropdown = () => {
    setMenuDropdownVisible(!menuDropdownVisible);
  };

  const closeMenuDropdown = () => {
    setMenuDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenuDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleViewDetails = () => {
    if (transaction.type === "wallet") {
      router.push(
        `/movements/crypto-movements?id=${transaction.id}&amount=${transaction.amount_received}&date=${transaction.date}&wallet_address=${transaction.wallet_address ?? "N/A"}`
      );
    } else if (transaction.type === "card") {
      router.push(
        `/movements/credit-movements?id=${transaction.id}&amount=${transaction.amount ?? "N/A"}&date=${transaction.date}&entity=${transaction.entity ?? "N/A"}&status=${transaction.status ?? "N/A"}`
      );
    }
    closeMenuDropdown();
  };
  

  return (
    <div className="relative flex items-center justify-between bg-[#FAFAFA] border-b border-[#EADDFF] rounded-lg px-4 py-2 w-full">
      <div className="flex flex-col">
        <span className="font-semibold text-sm text-[#202020]">{title}</span>
        <span className="text-xs text-[#202020]">{date}</span>
      </div>
      <div className="relative">
        <MoreHorizIcon
          className="text-[#202020] cursor-pointer"
          onClick={toggleMenuDropdown}
        />
        {menuDropdownVisible && (
          <div
            ref={menuRef}
            className="absolute top-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg w-[240px] z-50"
            style={{ transform: 'translate(15px, -15%)' }}
          >
            <div
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={handleViewDetails}
            >
              <ArrowForwardIcon className="text-[#202020] mr-3" />
              <span className="text-sm font-semibold text-[#202020] whitespace-nowrap">
                Ver detalle
              </span>
            </div>
            <div
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                generatePdf(transaction);
                closeMenuDropdown();
              }}
            >
              <DownloadIcon className="text-[#202020] mr-3" />
              <span className="text-sm font-semibold text-[#202020] whitespace-nowrap">
                Descargar comprobante
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function HomePage() {
  const [movements, setMovements] = useState<Transaction[]>([]);
  const { formData } = useForm();
  const router = useRouter();
  const { isCardPaused, setIsCardPaused, cardId, setCardId } = useCardState();

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const data = await cardService.getCurrentCards();
        setCardId(data.idCard);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };
    fetchCardData();
  }, [setCardId]);

  useEffect(() => {
    if (cardId) {
      const fetchStatus = async () => {
        try {
          const statusData = await cardService.getStatus(cardId);
          setIsCardPaused(statusData.paused);
        } catch (error) {
          console.error('Error fetching card status:', error);
        }
      };
      fetchStatus();
    }
  }, [cardId, setIsCardPaused]);

  useEffect(() => {
    const fetchMovements = async () => {
      try {
        if (cardId) {
          const { transactions } = await cardService.getCardTransactions(cardId, 3, 0);
          setMovements(transactions);
        }
      } catch (error) {
        console.error('Error fetching movements:', error);
      }
    };
    fetchMovements();
  }, [cardId]);

  const handleReceiveClick = () => {
    router.push('/crypto/select-crypto');
  };

  const handlePauseCardClick = async () => {
    if (isCardPaused) {
      try {
        const response = await cardService.resumeCard(cardId);
        console.log('Tarjeta activada:', response);
        setIsCardPaused(false);
      } catch (error) {
        console.error('Error al activar la tarjeta:', error);
      }
    } else {
      try {
        router.push('/card/pause-card');
      } catch (error) {
        console.error('Error al pausar la tarjeta:', error);
      }
    }
  };

  return (
    <div>
      <BackgroundCard height="375px" backgroundColor="#111111" shadowColor="rgba(0, 0, 0, 0.15)" />
      <main className="flex flex-col items-center min-h-screen text-white relative z-10 mt-2">
        <div className="flex items-center px-8 mt-4 w-full">
          <div className="bg-[#EADDFF] text-[#4F378A] flex items-center justify-center rounded-full w-8 h-8 ml-2">A</div>
          <span className="text-sm ml-2">Hola {formData.firstName}</span>
        </div>
        <div className="relative w-[296px] bg-gradient-to-r from-black to-[#434343] rounded-lg p-6 shadow-lg mt-6 z-10" style={{ filter: isCardPaused ? 'grayscale(100%) brightness(50%) contrast(70%) saturate(20%)' : 'none' }}>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <Image src="/icons/VisaIcon.png" alt="Visa Icon" width={50} height={20} />
            </div>
            <Image src="/icons/WeIcon.png" alt="We Card" width={35} height={35} />
          </div>
          <div className="text-lg tracking-wider" style={{ color: '#EADDFF' }}>**** 4569</div>
          <div className="flex items-center justify-between mt-6">
            <div>
              <p className="text-xs font-normal" style={{ color: '#EADDFF' }}>Saldo disponible:</p>
              <div className="text-2xl text-left" style={{ color: '#EADDFF' }}>USD 0,00</div>
            </div>
            <div className="pt-6">
              <div className="flex items-center justify-center w-[44px] h-[24px] bg-[#FEF7FF] rounded-full p-[4px_4px]">
                <NavigateNextIcon className="text-gray-800" style={{ width: '24px', height: '24px' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 space-x-4 w-[296px] z-10">
          <BlackButton label={<><FileDownloadIcon className="mr-2" />Recibir</>} fullWidth onClick={handleReceiveClick} className="text-sm bg-[#100F0F] text-[#FAFAFA] rounded-md h-[68px]" style={{ filter: isCardPaused ? 'grayscale(100%) brightness(50%) contrast(70%) saturate(20%)' : 'none' }} disabled={isCardPaused} />
          <BlackButton label={isCardPaused ? <><PauseCircleOutlineIcon className="mr-2" />Activar tarjeta</> : <><PauseCircleOutlineIcon className="mr-2" />Pausar tarjeta</>} fullWidth onClick={handlePauseCardClick} className="text-sm bg-[#202020] text-[#FAFAFA] rounded-md h-[68px]" />
        </div>
        <div className="flex flex-col items-start mt-10 px-8 w-full z-10">
          {movements.length > 0 ? (
            <>
              <div className="flex justify-between items-center w-full mb-4">
                <span className="text-lg font-semibold text-[#FEF7FF]">Últimos movimientos</span>
                <Link href="/movements/all-movements" className="text-xs underline text-[#FEF7FF]">Ver todos</Link>
              </div>
              <div className="flex flex-col gap-2 w-full">
                {movements.slice(0, 3).map((movement, index) => (
                  <Movement key={index} title={movement.type === 'card' ? `Pagaste en ${movement.entity}` : `Recibiste ${movement.amount_received}`} date={movement.date} transaction={movement} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <OutboxIcon className="text-white mb-4 !text-[50px]" />
              <Title text="Aún no hay movimientos" className="text-center text-xl pb-3" />
              <Subtitle text="Pronto podrás ver los últimos movimientos que realizaste en tu cuenta" className="text-center" />
            </div>
          )}
        </div>
        <div className="flex flex-col items-start mt-10 px-8 w-full z-10 mb-4">
          <Subtitle text="¿Dónde podes usar la tarjeta?" textAlign="left" />
          <div className="flex justify-between mt-2 w-full">
            <div className="flex items-center justify-center w-[70px] h-[48px]">
              <Image src="/icons/ApplePayIcon.png" alt="Apple Pay" width={70} height={24} />
            </div>
            <div className="flex items-center justify-center w-[70px] h-[48px]">
              <Image src="/icons/AmazonPayIcon.png" alt="Amazon Pay" width={70} height={24} />
            </div>
            <div className="flex items-center justify-center w-[70px] h-[48px]">
              <Image src="/icons/PayPalIcon.png" alt="PayPal" width={70} height={24} />
            </div>
            <div className="flex items-center justify-center w-[70px] h-[48px]">
              <Image src="/icons/PayPalIcon.png" alt="PayPal" width={70} height={24} />
            </div>
          </div>
          <Subtitle text={<><span>Vas a poder usar tu tarjeta en cualquier negocio físico o virtual que acepte VISA alrededor del mundo. Para más info, </span><Link href="/faq" className="underline">ingresa acá</Link></>} className="mt-4 text-left" textAlign="left" />
        </div>
      </main>
    </div>
  );
}
