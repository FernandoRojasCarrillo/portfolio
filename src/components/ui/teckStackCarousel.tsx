"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { textFormat } from '@/lib/text';
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay"
import { TechStackProps } from "@/types/sections/about";


export const TeckStackCarousel = ({ data }: {
  data: TechStackProps
}) => {
  const { title, cards } = data;

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="sm:container flex flex-col gap-6 sm:gap-8">
      <h1 className="max-sm:pl-6 font-bold text-lg lg:text-3xl sm:mx-auto">{textFormat(title)}</h1>

      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="" >
          {cards.map(({ title }, index) => (
            <CarouselItem key={index} className="basis-[45%] md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className="flex justify-center py-3 sm:py-4 border rounded-3xl bg-[#10132E] border-white/[0.1]">
                <span className="text-lg sm:text-xl font-semibold text-purple select-none">{title}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
