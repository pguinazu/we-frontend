"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Subtitle from "@/app/components/Subtitle";
import Movement from "@/app/components/Movement";
import { cardService } from '../../services/card/cardService';
import { useCardState } from '../../contexts/CardStateContext';

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

const AllMovements = () => {
    const [movements, setMovements] = useState<Transaction[]>([]); 
    const router = useRouter();
    const { cardId } = useCardState();

    useEffect(() => {
        const fetchMovements = async () => {
          try {
            if (cardId) {
              const { transactions } = await cardService.getCardTransactions(cardId, 10, 0);
              setMovements(transactions); // Guardamos las transacciones completas
            }
          } catch (error) {
            console.error("Error fetching movements:", error);
          }
        };
        fetchMovements();
    }, [cardId]);

    const handleViewDetails = (transaction: Transaction) => {
        if (transaction.type === 'wallet') {
            router.push(
              `/movements/crypto-movements?id=${transaction.id}&amount=${transaction.amount_received}&date=${transaction.date}&wallet_address=${transaction.wallet_address ?? 'N/A'}`
            );
        } else if (transaction.type === 'card') {
            router.push(
              `/movements/credit-movements?id=${transaction.id}&amount=${transaction.amount}&date=${transaction.date}&entity=${transaction.entity ?? 'N/A'}&status=${transaction.status ?? 'N/A'}`
            );
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-start relative">
          <button
            className="absolute top-5 left-5 flex items-center text-[#FEF7FF] cursor-pointer"
            onClick={() => router.back()}
          >
            <ArrowBackIcon className="mr-2" />
            <span>Volver</span>
          </button>

          <div className="w-full mt-12 pt-8">
            <Subtitle text="Últimos movimientos" textAlign="left"/>
          </div>

          <div className="flex flex-col items-start mt-2 px-8 w-full z-10 mb-10">
              <div className="flex flex-col gap-2 w-full">
                  {movements.map((movement, index) => (
                    <Movement
                      key={index}
                      title={
                        movement.type === 'card'
                          ? `Pagaste en ${movement.entity}`
                          : `Recibiste ${movement.amount_received}`
                      }
                      date={movement.date}
                      transaction={movement} // Pasamos la transacción completa
                      onClick={() => handleViewDetails(movement)} // Pasamos la función de clic
                    />
                  ))}
              </div>
          </div>
        </div>
    );
};

export default AllMovements;
