import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bentoGrid";
import { TeckStackCarousel } from "@/components/ui/teckStackCarousel";
import { useTranslations } from "next-intl";
import { AboutCardsProps } from "@/types/sections/about";

export const About = () => {
  const t = useTranslations("about");

  const result = Object.entries(t.raw("cards")).map(([key, value]) => ({
    key,
    value,
  }));

  return (
    <section
      id="about"
      className="flex flex-col gap-10 sm:gap-16 md:pb-20 scroll-mt-20"
    >
      <div className="container">
        <BentoGrid>
          {result.map(({ key, value }: any, index: number) => (
            <BentoGridItem
              key={index}
              title={t.rich(`cards.${key}.title`, {
                br: () => <br />,
              })}
              data={value}
            />
          ))}
        </BentoGrid>
      </div>

      <TeckStackCarousel />
    </section>
  );
};
