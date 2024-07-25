"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";

export const TeckStackCarousel = () => {
  const t = useTranslations("about.techStack");

  const plugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnLastSnap: false,
      stopOnFocusIn: false,
    })
  );

  return (
    <div className="sm:container flex flex-col gap-6 sm:gap-8">
      <h1 className="max-sm:pl-6 font-bold text-lg lg:text-3xl sm:mx-auto">
        {t.rich("title", {
          color: (text) => <span className="text-purple">{text}</span>,
        })}
      </h1>

      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {t.raw("cards").map(({ title }: any, index: number) => (
            <CarouselItem
              key={index}
              className="basis-[45%] md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div className="flex justify-center py-3 sm:py-4 border rounded-3xl bg-[#10132E] border-white/[0.1]">
                <span className="text-lg sm:text-xl font-semibold text-purple select-none">
                  {title}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
