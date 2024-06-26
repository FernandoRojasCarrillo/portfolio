"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbarMenu";


const HeaderMenu = ({ links }: any) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Menu setActive={setActive}>
      {
        links.map(({ name, link, image, links }: any, index: number) => (
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
                    {links.map(({ button }: any, index: number) => (
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
  )
}

export default HeaderMenu