import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bentoGrid';
import { TeckStackCarousel } from '@/components/ui/teckStackCarousel';
import { AboutProps } from '@/types/sections/about';


export const About = ({ data }: AboutProps) => {

  const { techStack, cards } = data;

  return (
    <section id="about" className="flex flex-col gap-10 sm:gap-16 md:pb-20 scroll-mt-20">
      <div className="container">
        <BentoGrid>
          {
            cards.map((data, index) => (
              <BentoGridItem key={index} data={data} />
            ))
          }
        </BentoGrid>
      </div>

      <TeckStackCarousel data={techStack} />
    </section>
  )
}
