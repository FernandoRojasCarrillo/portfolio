"use client";
import React from "react";
import { textFormat } from "@/lib/text";
import { Card } from "@/components/ui/movingBorders";
import Image from "next/image"
import { ExperienceProps } from "@/types/sections/experience";
import { TracingBeam } from "@/components/ui/tracingBeam";

export function Experience({ data }: {
  data: ExperienceProps
}) {
  const { title, cards } = data;

  return (
    <div id="experience" className="max-sm:mt-16" >
      <TracingBeam className="px-6 mt-10 mb-20 lg:my-20">
        <div className="flex flex-col gap-14 max-md:pl-6">
          <h1 className="font-semibold text-5xl">{textFormat(title)}</h1>

          <div className="flex flex-col gap-6">
            {cards.map(({ title, description, company, image }, index) => (
              <Card
                key={index}
                duration={Math.floor(Math.random() * 10000 + 10000)}
                borderRadius="1.75rem"
                className="flex-1 text-white border-neutral-200 dark:border-slate-800">
                <div className="flex lg:flex-row flex-col lg:items-center p-4 py-6 md:p-5 lg:p-10 gap-2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={0}
                    className="lg:w-32 md:w-20 w-16"
                  />

                  <div className="flex flex-col gap-3 lg:ms-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold">{textFormat(title)}</h1>
                    <p className="text-start text-white-100">{textFormat(description)}</p>
                    <p className="text-start text-white-100">{textFormat(company)}</p>
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

