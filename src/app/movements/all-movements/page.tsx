"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Subtitle from "@/app/components/Subtitle";
import Movement from "@/app/components/Movement";
import { cardService } from '../../services/card/cardService';
import { useCardState } from '../../contexts/CardStateContext';

interface MovementData {
  title: string;
  date: string;
}

const AllMovements = () => {
    const [movements, setMovements] = useState<MovementData[]>([]); 
    const router = useRouter();
    const { cardId } = useCardState();

    useEffect(() => {
        const fetchMovements = async () => {
          try {
            if (cardId) {
              const { transactions } = await cardService.getCardTransactions(cardId, 10, 0);
              const formattedTransactions = transactions.map((transaction: { type: string; entity: string; amount_received: string; date: string; }) => ({
                title:
                  transaction.type === "card"
                    ? `Pagaste en ${transaction.entity}`
                    : `Recibiste ${transaction.amount_received}`,
                date: transaction.date,
              }));
              setMovements(formattedTransactions); 
            }
          } catch (error) {
            console.error("Error fetching movements:", error);
          }
        };
        fetchMovements();
    }, [cardId]);

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
            <Subtitle text="Últimos movimientos" textAlign="left" />
          </div>

          <div className="flex flex-col items-start mt-10 px-8 w-full z-10">
              <div className="flex flex-col gap-2 w-full">
                  {movements.map((movement, index) => (
                    <Movement
                      key={index}
                      title={movement.title}
                      date={movement.date}
                    />
                  ))}
              </div>
          </div>
        </div>
    );
};

export default AllMovements;
