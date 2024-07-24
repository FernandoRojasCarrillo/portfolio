"use client";

import { useTranslations } from "next-intl";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";


const AcademicProjects = () => {
  const t = useTranslations("academicProjects");

  return (
    <section className="py-16">
      <div className="container flex flex-col gap-16">
        <div className="flex flex-col gap-6 max-w-3xl">
          <h2 className="text-7xl font-bold">
            {t.rich("title", {
              br: () => <br />,
              color: (text) => <span className="text-purple">{text}</span>,
            })}
          </h2>
          <p className="text-lg">{t("description")}</p>
        </div>

      <CardStack items={CARDS} />
      </div>
    </section>
  );
};

export default AcademicProjects;

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
// const CARDS = [
//   {
//     src: "/sections/recentProjects/arabe.webp",
//     alt: ""
//   },
//   {
//     src: "/sections/recentProjects/madrid.webp",
//     alt: ""
//   },
//   {
//     src: "/sections/recentProjects/decesos.webp",
//     alt: ""
//   },
  
// ];

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    src: "/sections/recentProjects/arabe.webp",
    alt: "",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    src: "/sections/recentProjects/madrid.webp",
    alt: "",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    src: "/sections/recentProjects/decesos.webp",
    alt: "",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
