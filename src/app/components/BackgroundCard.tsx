import React from "react";

interface BackgroundCardProps {
  backgroundColor?: string; // Color de fondo
  shadowColor?: string; // Color de la sombra
  width?: string; // Ancho del componente
  height?: string; // Altura del componente (opcional)
  borderRadius?: string; // Bordes redondeados hacia abajo
  padding?: string; // Padding interno
  gap?: string; // Espaciado interno
  position?: "absolute" | "relative" | "fixed" | "sticky" | "static"; // Tipos válidos para position
  top?: string | number; // Posición superior
  bottom?: string | number; // Posición inferior
  left?: string | number; // Posición izquierda
  right?: string | number; // Posición derecha
  transform?: string; // Transformaciones opcionales
  children?: React.ReactNode; // Contenido opcional dentro del componente
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({
  backgroundColor = "#151415",
  shadowColor = "rgba(0, 0, 0, 0.15)",
  width = "100%", // Ancho del componente
  height = "515px",
  borderRadius = "0px 0px 60px 60px", // Bordes hacia abajo
  padding = "0px",
  gap = "0px",
  position = "absolute",
  top = 0, // Por defecto en 0 para eliminar espacio superior
  bottom,
  left = 0, // Por defecto en 0 para alineación izquierda
  right,
  transform = "none",
  children,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding,
        gap,
        position,
        top,
        bottom,
        left,
        right,
        width, // Se asegura de usar el 100% por defecto
        height,
        background: backgroundColor,
        boxShadow: `0px 8px 12px 6px ${shadowColor}, 0px 4px 4px rgba(0, 0, 0, 0.3)`,
        borderRadius,
        transform,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundCard;
