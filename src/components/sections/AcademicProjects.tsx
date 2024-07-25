"use client";

import { useTranslations } from "next-intl";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

const AcademicProjects = () => {
  const t = useTranslations("academicProjects");

  return (
    <section className="py-14 md:py-20">
      <div className="container flex flex-col gap-8 md:gap-16 ">
        <div className="flex flex-col gap-6 max-w-3xl w-full mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold ">
            {t.rich("title", {
              br: () => <br />,
              color: (text) => <span className="text-purple">{text}</span>,
            })}
          </h2>
          <p className="text-base md:text-lg text-pretty">{t("description")}</p>
        </div>

        <div className="grid max-w-3xl w-full gap-4 md:gap-14 mx-auto ">
          {t.raw("cards").map((card: any, index: number) => (
            <AcademicProjectCard key={index} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicProjects;

const AcademicProjectCard = ({ data }: any) => {
  const { title, description, link, images } = data;

  return (
    <div className="flex flex-col gap-6 md:gap-8 bg-black-100 rounded-2xl pt-8 sm:pt-16 pb-6 sm:pb-8">
      <CardStack items={images.options} intervalDuration={images.interval} />

      <div className="flex flex-col gap-4 w-full">
        <h3 className="text-2xl text-purple font-semibold">{title}</h3>
        <p className="text-sm md:text-lg text-white text-pretty">{description}</p>
      </div>

      <Link
        href={link.href}
        target="blank"
        className="flex gap-2 lg:gap-3 md:items-center cursor-pointer"
      >
        <span className="text-purple text-lg max-md:text-sm">{link.text}</span>
        <FaLocationArrow color="#CBACF9" className="size-3" />
      </Link>
    </div>
  );
};
