import { ClassValue } from "clsx";
import { ReactNode } from "react";

export type AboutCardsProps = {
  id: number;
  title?: string | ReactNode;
  description?: string | ReactNode;
  imgClassName?: ClassValue;
  titleClassName?: ClassValue;
  img?: string;
  spareImg?: string;
  button: {
    textOne: string;
    textTwo: string;
    link: string;
  } | null;
};
