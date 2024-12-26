import { jsPDF } from "jspdf";

export const generatePdf = (transaction: {
  id?: string; // Ahora es opcional para mayor flexibilidad
  type: "wallet" | "card";
  amount?: string;
  amount_received?: string;
  date: string;
  entity?: string;
  wallet_address?: string;
  status?: string;
}) => {
  const doc = new jsPDF();

  // Personalización del PDF
  doc.setFontSize(16);
  doc.text("Detalle del Comprobante", 10, 10);

  // Validar y asignar valores por defecto
  const transactionId = transaction.id ?? "Sin ID";
  const date = transaction.date || "Fecha no disponible";

  // Datos dinámicos según el tipo de transacción
  const rows =
    transaction.type === "wallet"
      ? [
          ["Tipo", "Wallet"],
          ["ID", transactionId],
          ["Monto Recibido", transaction.amount_received || "N/A"],
          ["Fecha", date],
          ["Dirección Wallet", transaction.wallet_address || "N/A"],
        ]
      : [
          ["Tipo", "Tarjeta"],
          ["ID", transactionId],
          ["Monto", transaction.amount || "N/A"],
          ["Fecha", date],
          ["Entidad", transaction.entity || "N/A"],
          ["Estado", transaction.status || "N/A"],
        ];

  // Agregar filas al PDF
  rows.forEach((row, index) => {
    doc.text(`${row[0]}: ${row[1]}`, 10, 20 + index * 10);
  });

  // Descargar PDF
  doc.save(`Comprobante ${transactionId}.pdf`);
};
