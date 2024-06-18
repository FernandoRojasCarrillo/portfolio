"use client";

import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbarMenu";
import { FloatingNav } from "@/components/ui/floatingNav";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { HeaderProps } from "@/types/layout/header";
import Image from "next/image";

export function Header({ data }: { data: HeaderProps }) {
  const [active, setActive] = useState<string | null>(null);

  const { links } = data;

  return (
    <div className="absolute top-0 w-full z-50 flex items-center justify-center">
      <FloatingNav className="px-4 md:px-16" >
        <Menu setActive={setActive}>
          {
            links.map(({ name, link, image, links }, index) => (
              <Link key={index} href={link}>
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item={name}
                  className="max-h-96"
                >
                  {index < 3 && (
                    <Image
                      src={image?.src!}
                      alt={image?.alt!}
                      height={144}
                      width={384}
                      className="h-full w-96 object-cover rounded-lg"
                    />
                  )}

                  {
                    links?.length && (
                      <div className="flex gap-3">
                        {links.map(({ button }, index) => (
                          <Link
                            key={index}
                            href={button.link}
                            target="blank"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <Image
                              src={button.src}
                              alt={button.alt}
                              width={20}
                              height={20}
                            />
                          </Link>
                        ))}
                      </div>
                    )}
                </MenuItem>
              </Link>
            ))
          }
        </Menu>

        <LanguageSelector />
      </FloatingNav>
    </div>
  );
}


