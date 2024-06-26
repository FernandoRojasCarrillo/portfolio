"use client";

import { SpotlightEffect } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/textGenerateEffect";
import { MagicButton } from "@/components/ui/magicButton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export const Hero = async ({ language }: { language: string }) => {
  const t = useTranslations("hero");

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
              {t("label")}
            </h2>

            <TextGenerateEffect
              className={cn("text-center text-4xl md:text-5xl lg:text-6xl max-w-4xl", {
                "max-w-3xl": language === "en"
              })}
            >
              {t("title")}
            </TextGenerateEffect>

            <div className={cn("flex gap-6 items-center max-w-[35rem] p-4 rounded-xl border-2 border-[#6971A229]", {
              "max-w-[31rem]": language === "en"
            })}>
              <Image
                src={t("image.src")}
                alt={t("image.alt")}
                width={100}
                height={100}
                className="size-16 rounded-full object-cover"
              />

              <p className="md:tracking-wider text-white text-sm md:text-base lg:text-base">
                {t.rich("subtitle", {
                  color: (text) => <span className="text-purple" >{text}</span>
                })}
              </p>
            </div>
          </div>

          <Link href={t("button.link")} className="max-sm:w-full">
            <MagicButton
              as="button"
              containerClassName="max-sm:w-full"
              className="px-20"
            >
              <span>{t("button.text")}</span>
            </MagicButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

