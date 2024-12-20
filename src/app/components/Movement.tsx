import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import { useRouter } from "next/navigation";
import { generatePdf } from "../../app/utils/downloadPdf";

interface Transaction {
  id: string;
  type: "wallet" | "card";
  entity?: string;
  amount_received?: string;
  date: string;
  amount?: string;
  wallet_address?: string;
  status?: string;
}

interface MovementProps {
  title: string;
  date: string;
  transaction: Transaction;
  onClick: () => void;
}

const Movement: React.FC<MovementProps> = ({ title, date, transaction, onClick }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const handleViewDetails = () => {
    if (transaction.type === "wallet") {
      router.push(
        `/movements/crypto-movements?id=${transaction.id}&amount=${transaction.amount_received}&date=${transaction.date}&wallet_address=${transaction.wallet_address ?? 'N/A'}`
      );
    } else if (transaction.type === "card") {
      router.push(
        `/movements/credit-movements?id=${transaction.id}&amount=${transaction.amount}&date=${transaction.date}&entity=${transaction.entity ?? 'N/A'}&status=${transaction.status ?? 'N/A'}`
      );
    }
    closeMenu();
  };

  const handleDownloadPdf = () => {
    generatePdf(transaction); // Llama a la función con los datos de la transacción
    closeMenu(); // Cierra el menú después de la descarga
  };

  return (
    <div
      className="relative flex items-center justify-between bg-[#FAFAFA] border-b border-[#EADDFF] rounded-lg px-4 py-2 w-full cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col">
        <span className="font-semibold text-sm text-[#202020]">{title}</span>
        <span className="text-xs text-[#202020]">{date}</span>
      </div>

      <div className="relative">
        <MoreHorizIcon
          className="text-[#202020] cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        />
        {menuVisible && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
              style={{ height: '100%', width: '100%', position: 'fixed' }}
            ></div>

            <div
              className="absolute top-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg w-[240px] z-50"
              style={{ transform: 'translate(15px, -15%)' }}
            >
              <div
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewDetails();
                }}
              >
                <ArrowForwardIcon className="text-[#202020] mr-3" />
                <span className="text-sm font-semibold text-[#202020] whitespace-nowrap">Ver detalle</span>
              </div>
              <div
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownloadPdf(); // Llama a la función de descarga aquí
                }}
              >
                <DownloadIcon className="text-[#202020] mr-3" />
                <span className="text-sm font-semibold text-[#202020] whitespace-nowrap">
                  Descargar comprobante
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Movement;
