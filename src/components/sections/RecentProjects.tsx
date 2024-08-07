"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaLocationArrow } from "react-icons/fa";
import { useIsDesktop } from "@/hooks/useResponsive";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { ProductCardProps } from "@/types/sections/recentProjects";


export const RecentProjects = () => {
  const isDesktop = useIsDesktop();
  const t = useTranslations("recentProjects");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 0 };

  const cardsTranslateY = [
    useSpring(useTransform(scrollYProgress, [0, 0.2], [0, 0]), springConfig),
    useSpring(useTransform(scrollYProgress, [0, 0.2], [50, 0]), springConfig),
    useSpring(useTransform(scrollYProgress, [0, 0.2], [-70, 0]), springConfig),
    useSpring(useTransform(scrollYProgress, [0, 0.2], [0, 0]), springConfig),
  ]
  const cardsTranslateX = [
    useSpring(useTransform(scrollYProgress, [0, 0.2], [0, 0]), springConfig),
    useSpring(useTransform(scrollYProgress, [0, 0.2], [-70, 0]), springConfig),
    useSpring(useTransform(scrollYProgress, [0, 0.2], [50, 0]), springConfig),
    useSpring(useTransform(scrollYProgress, [0, 0.2], [0, 0]), springConfig),
  ]

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-750, 0]),
    springConfig
  );

  return (
    <div
      ref={ref}
      id="projects"
      className="relative max-sm:scroll-mt-32 container lg:py-40 overflow-hidden antialiased flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >

      <div className="max-lg:hidden absolute top-0 left-0 right-0 h-[45rem] z-50 w-full"></div>

      <div className="max-w-7xl relative mx-auto pt-0 pb-8 lg:pt-40 md:pb-28 md:px-4 w-full left-0 top-0">
        <h1 className="text-4xl md:text-7xl max-w-3xl font-bold dark:text-white">
          {t.rich("title", {
            color: (text) => <span className="text-purple">{text}</span>
          })}
        </h1>
        <p className="max-w-3xl text-base md:text-xl mt-8 dark:text-neutral-200">
          {t("description")}
        </p>
      </div>

      <motion.div
        style={{
          rotateX: isDesktop ? rotateX : 0,
          rotateZ: isDesktop ? rotateZ : 0,
          translateY: isDesktop ? translateY : 0,
          opacity: isDesktop ? opacity : 100,
        }}
      >
        <motion.div className="grid isolate md:grid-cols-2 xl:grid-cols-[repeat(20,minmax(0,1fr))] gap-4 max-lg:gap-6 md:px-4 md:auto-rows-[25rem_20rem_25rem] xl:grid-rows-[repeat(6,minmax(0,6.5rem))] max-md:max-w-2xl">
          {t.raw("cards.options").map((option: string, index: number) => (
            <ProductCard
              key={index}
              title={t.rich(`cards.${option}.title`, {
                color: (text) => <span className="text-purple" >{text}</span>
              })}
              description={t(`cards.${option}.description`)}
              link={t.raw(`cards.${option}.link`)}
              image={t.raw(`cards.${option}.image`)}
              translateY={cardsTranslateY[index || 0]}
              translateX={cardsTranslateX[index || 0]}
              className={cn("", {
                "md:col-span-2 xl:col-span-12 xl:row-span-3": index === 0,
                "xl:col-span-8 xl:row-span-3": index === 1,
                "xl:col-span-9 xl:row-span-3": index === 2,
                "md:col-span-2 xl:col-span-11 xl:row-span-3 xl:-z-10": index === 3,
              })}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  title,
  description,
  link,
  image,
  className,
  translateY,
  translateX,
}: ProductCardProps) => {

  console.log("image ", image)

  const isDesktop = useIsDesktop();

  return (
    <motion.div
      style={{
        y: isDesktop ? translateY : 0,
        x: isDesktop ? translateX : 0,
      }}
      className={cn("group/product card h-56 rounded-lg overflow-hidden sm:h-full w-full relative flex-shrink-0 hover:z-50 shadow-lg", className)}
    >
      <Image
        src={image.desktop}
        height="600"
        width="600"
        className="max-sm:hidden object-cover object-top md:absolute h-full w-full max-sm:rounded-xl inset-0"
        alt={image.alt}
      />
      <Image
        src={image.mobile}
        height="600"
        width="600"
        className="sm:hidden object-cover object-top md:absolute h-full w-full max-sm:rounded-xl inset-0"
        alt={image.alt}
      />

      <div className="flex flex-col gap-4 md:gap-6 justify-end p-4 md:p-8 absolute inset-0 h-full w-full md:opacity-0 transition-opacity duration-300 rounded-[inherit] overflow-clip group-hover/product:opacity-100 group-hover/product:duration-0 md:bg-[linear-gradient(45deg,rgba(0,3,25,0.9),80%,rgba(0,3,25,0.4))] bg-[linear-gradient(15deg,rgba(0,3,25,0.99),transparent_80%)] text-white max-sm:rounded-xl">

        <h2 className="text-base md:text-2xl max-w-48 md:max-w-72 max-md:[&_span]:text-white font-medium md:opacity-0 md:translate-x-8 transition-all duration-300 group-hover/product:translate-x-0 group-hover/product:opacity-100">
          {title}
        </h2>

        <p className="max-md:hidden text-xs xl:text-base max-xl:max-w-md font-light opacity-0 translate-x-20 transition-all duration-300 group-hover/product:translate-x-0 group-hover/product:opacity-100">{description}</p>

        <div className="flex gap-4 justify-between md:opacity-0 md:translate-x-32 transition-all duration-300 group-hover/product:translate-x-0 group-hover/product:opacity-100">
          <Link href={link.href} target="blank" className="flex gap-2 lg:gap-3 md:items-center cursor-pointer" >
            <span className="text-purple max-xl:text-xs">{link.text}</span>
            <FaLocationArrow color="#CBACF9" className="size-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
