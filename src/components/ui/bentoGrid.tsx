"use client";

import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { GrDocumentPdf } from "react-icons/gr";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./gradientBg";
import { MagicButton } from "./magicButton";
import Image from "next/image";
import Link from "next/link";
import Lottie from "react-lottie";
import * as animationData from "@/data/confetti.json";
import { AboutCardsProps } from "@/types/sections/about";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ title, data }: any) => {
  const [copied, setCopied] = useState(false);

  const COPY_EMAIL_RESET_DELAY = 1500;

  const {
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
    button,
  } = data;

  useEffect(() => {
    const result = setTimeout(() => {
      setCopied(false);
    }, COPY_EMAIL_RESET_DELAY);

    return () => {
      clearTimeout(result);
    };
  }, [copied, setCopied]);

  const handleCopy = () => {
    navigator.clipboard.writeText("diego27fernando72@gmail.com");

    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between max-sm:min-h-48 flex flex-col space-y-4 border border-white/[0.1]",
        {
          "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[27rem]":
            id === 1,
          "lg:col-span-2 md:col-span-3 md:row-span-4": id === 2,
          "lg:col-span-2 md:col-span-3 md:row-span-1 md:text-center":
            id === 3 || id === 5,
          "md:col-span-3 md:row-span-2": id === 4,
        }
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 5 && "flex"} h-full`}>
        {img && (
          <div className="flex items-end w-full h-full absolute">
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          </div>
        )}

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={0}
              height={0}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 5 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transtision duration-200 relative md:h-full min-h-40 flex w-full flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-extralight text-[#C1C2D3] text-sm md:texy-xs lg:text-base w-full z-10 dark:text-neutral-300">
            {description}
          </div>

          <div
            className={cn(
              "font-bold text-lg lg:text-3xl max-w-md w-full z-10",
              {
                "max-w-72 w-full md:max-w-48 lg:max-w-72": id === 4,
              }
            )}
          >
            {title}
          </div>

          {id === 3 && (
            <div className="mt-5 relative">
              {button && (
                <Link href={button.link} target="blank">
                  <MagicButton
                    handleClick={handleCopy}
                    containerClassName="w-full p-0.5"
                    className="flex gap-3 items-center justify-center"
                  >
                    {copied ? button.textTwo : button.textOne}
                    <GrDocumentPdf />
                  </MagicButton>
                </Link>
              )}
            </div>
          )}

          {id === 5 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-10 right-0`}>
                {copied === true && (
                  <div className="translate-y-10">
                    <Lottie
                      options={{
                        loop: copied,
                        autoplay: copied,
                        animationData,
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice",
                        },
                      }}
                    />
                  </div>
                )}
              </div>

              {button && (
                <MagicButton
                  handleClick={handleCopy}
                  containerClassName="w-full p-0.5"
                  className="flex gap-3 items-center justify-center"
                >
                  {copied ? button.textTwo : button.textOne}
                  <IoCopyOutline />
                </MagicButton>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
