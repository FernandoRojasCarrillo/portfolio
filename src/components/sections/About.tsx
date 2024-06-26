import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bentoGrid';
import { TeckStackCarousel } from '@/components/ui/teckStackCarousel';
import { useTranslations } from 'next-intl';


export const About = () => {
  const t = useTranslations("about");

  return (
    <section id="about" className="flex flex-col gap-10 sm:gap-16 md:pb-20 scroll-mt-20">
      <div className="container">
        <BentoGrid>
          {
            t.raw("cards").map((data: any, index: number) => (
              <BentoGridItem key={index} data={data} />
            ))
          }
        </BentoGrid>
      </div>

      <TeckStackCarousel />
    </section>
  )
}
