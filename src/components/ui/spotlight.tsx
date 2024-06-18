import { cn } from "@/lib/utils";
import React from "react";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const SpotlightEffect = () => {
  return (
    <div className="absolute w-screen top-0">
      <div className="">
        <div className="top-0 left-0 absolute rotate-[5deg] h-[50rem] w-[50rem] opacity-40">
          <Spotlight className="-top-24 left-32 h-[50rem] w-[50rem]" />
        </div>
        <div className="top-0 left-0 absolute rotate-[5deg] h-[50rem] w-[50rem] opacity-40">
          <Spotlight className="top-16 left-32 h-[50rem] w-[50rem]" />
        </div>
        <div className="top-0 left-0 absolute rotate-[5deg] h-[50rem] w-[50rem] opacity-40">
          <Spotlight className="top-32 -left-8 h-[50rem] w-[50rem]" />
        </div>
      </div>

      <div className="max-md:hidden">
        <div className="top-0 right-0 absolute rotate-[100deg] h-[50rem] w-[50rem] opacity-40">
          <Spotlight className="top-40 right-56 h-[50rem] w-[50rem]" />
        </div>
        <div className="top-0 right-0 absolute rotate-[100deg] h-[50rem] w-[50rem] opacity-40">
          <Spotlight className="top-20 right-20 h-[50rem] w-[50rem]" />
        </div>
        <div className="top-0 right-0 absolute rotate-[100deg] h-[50rem] w-[50rem] opacity-40">
          <Spotlight className="-top-20 right-20 h-[50rem] w-[50rem]" />
        </div>
      </div>
    </div>
  )
}

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "#CBACF9"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
