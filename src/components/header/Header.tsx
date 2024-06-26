import React, { useState } from "react";
import { FloatingNav } from "@/components/ui/floatingNav";
import LanguageSelector from "./LanguageSelector";
import { getTranslations } from "next-intl/server";
import HeaderMenu from "./HeaderMenu";

export async function Header() {
  const t = await getTranslations("header");

  return (
    <div className="absolute top-0 w-full z-50 flex items-center justify-center">
      <FloatingNav className="px-4 md:px-16" >
        <HeaderMenu links={t.raw("links")} />
        <LanguageSelector />
      </FloatingNav>
    </div>
  );
}


