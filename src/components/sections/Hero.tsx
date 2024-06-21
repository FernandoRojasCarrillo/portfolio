"use client";

import { SpotlightEffect } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/textGenerateEffect";
import { MagicButton } from "@/components/ui/magicButton";
import { textFormat } from "@/lib/text";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { HeroProps } from "@/types/sections/hero";

export const Hero = ({ data, language }: HeroProps) => {
  const { label, title, subtitle, button, image } = data;

  return (
    <div className="py-28">
      <div className="h-screen -z-50 w-full bg-transparent bg-grid-white/[0.03] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,#000319)]"></div>
      </div>

      <SpotlightEffect />

      <div className="flex justify-center relative my-20 mt-20 z-20">
        <div className="flex flex-col items-center gap-14 max-w-[89vw] md:max-w-2xl lg:max-w-5xl">
          <div className="flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-[80vw]" >
              {textFormat(label)}
            </h2>

            <TextGenerateEffect
              className={cn("text-center text-4xl md:text-5xl lg:text-6xl max-w-4xl", {
                "max-w-3xl": language === "en"
              })}
            >
              {title}
            </TextGenerateEffect>

            <div className={cn("flex gap-6 items-center max-w-[35rem] p-4 rounded-xl border-2 border-[#6971A229]", {
              "max-w-[31rem]": language === "en"
            })}>
              <Image
                src={image.src}
                alt={image.alt}
                width={100}
                height={100}
                className="size-16 rounded-full object-cover"
              />

              <p className="md:tracking-wider text-white text-sm md:text-base lg:text-base">
                {textFormat(subtitle)}
              </p>
            </div>
          </div>

          <Link href={button.link} className="max-sm:w-full">
            <MagicButton
              as="button"
              containerClassName="max-sm:w-full"
              className="px-20"
            >
              <span>{button.text}</span>
            </MagicButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

