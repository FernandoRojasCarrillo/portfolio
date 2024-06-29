"use client";
import React from "react";
import { Card } from "@/components/ui/movingBorders";
import Image from "next/image"
import { TracingBeam } from "@/components/ui/tracingBeam";
import { useTranslations } from "next-intl";

export function Experience() {
  const t = useTranslations("experience");

  return (
    <div id="experience" className="max-sm:mt-16" >
      <TracingBeam className="px-6 mt-10 mb-20 lg:my-20">
        <div className="flex flex-col gap-14 max-md:pl-6">
          <h1 className="font-semibold text-5xl">
            {t.rich("title", {
              color: (text) => <span className="text-purple">{text}</span>
            })}
          </h1>

          <div className="flex flex-col gap-6">
            {t.raw("cards.options").map((option: string, index: number) => (
              <Card
                key={index}
                duration={Math.floor(Math.random() * 10000 + 10000)}
                borderRadius="1.75rem"
                className="flex-1 text-white border-neutral-200 dark:border-slate-800">
                <div className="flex lg:flex-row flex-col lg:items-center p-4 py-6 md:p-5 lg:p-10 gap-2">
                  <Image
                    src={t(`cards.${option}.image.src`)}
                    alt={t(`cards.${option}.image.src`)}
                    width={0}
                    height={0}
                    className="lg:w-32 md:w-20 w-16"
                  />

                  <div className="flex flex-col gap-3 lg:ms-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold">
                      {t(`cards.${option}.title`)}
                    </h1>

                    <p className="text-start text-white-100">
                      {t(`cards.${option}.description`)}
                    </p>

                    <p className="text-start text-white-100">
                      {t.rich(`cards.${option}.company`, {
                        color: (text) => <span className="text-purple">{text}</span>
                      })}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </TracingBeam>
    </div>
  );
}

