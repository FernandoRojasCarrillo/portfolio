import React from "react";

export const textFormat = (text: string) => {
  // Utilizar una expresión regular para buscar texto entre asteriscos
  const pattern = /\*\*(.*?)\*\*|\*(.*?)\*|\/(.*?)\//;

  // Función para reemplazar coincidencias con el span
  const formattedText = text.split(pattern).map((chunk, index) => {

    if (index % 4 === 2)
      return <span key={index} className="text-purple" >{chunk}</span>

    return chunk;
  });

  return formattedText;
};
