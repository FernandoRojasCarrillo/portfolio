"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type TypeLocale } from "../../../i18n-config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";

export default function LanguageSelector() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = pathName.split("/")[1] || "es";

  const currentFlag = {
    es: "/layout/header/spain-flag.svg",
    en: "/layout/header/england-flag.svg"
  }

  const redirectedPathName = (locale: TypeLocale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <PopoverTrigger className="flex gap-1 items-center">
        <span className="leading-none flex items-center max-sm:text-sm" >{currentLanguage}</span>
        <IoIosArrowDown id="arrow-up" className="size-3 translate-y-px transition-transform" />
      </PopoverTrigger>
      <PopoverContent className="absolute top-[calc(100%+2rem)] right-0">
        <div className="flex flex-col gap-2 px-4 w-full py-4 opacity-100 rounded-lg">
          {i18n.locales.map((locale, index) => (
            <Link
              key={index}
              href={redirectedPathName(locale)}
              className="flex gap-2 items-center justify-center flex-shrink-0 hover:opacity-50 transition-opacity"
            >
              <div>{locale}</div>

              <Image
                src={currentFlag[locale]}
                alt="flag icon"
                width={30}
                height={30}
              />
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>

  );
}