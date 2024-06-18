"use client"

import { useState, useEffect } from "react";

export const useIsDesktop = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth >= 1024);
    };

    // Inicialización
    updateIsMobile();

    // Agregar evento de escucha
    window.addEventListener("resize", updateIsMobile);

    // Limpiar evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []); // El efecto solo se ejecuta una vez al montar el componente

  return isMobile;
};
