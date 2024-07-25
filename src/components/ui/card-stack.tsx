"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

let interval: any;

type Card = {
  id: number;
  src: string;
  alt: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  intervalDuration = 5000,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  intervalDuration?: number;
}) => {
  const CARD_OFFSET = offset || 25;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const OPACITY = 0.4;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, intervalDuration);
  };

  return (
    <div className="relative h-[12rem] sm:h-[26rem] w-full">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black shadow-sm bg-white overflow-hidden rounded-xl flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
              opacity: 1 - index * OPACITY
            }}
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={0}
              height={0}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
};
