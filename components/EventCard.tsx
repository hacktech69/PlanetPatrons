"use client"

import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";
import { Bookmark } from "lucide-react";
import React from "react";
import { BlurImage } from "./ui/apple-cards-carousel";
import { Progress } from "./ui/progress";

type EventCardProps = {
  src: string;
  title: string;
  category: string;
  daysLeft: number;
  progress: number;
  amountRaised: string;
  organizedBy: string;
  targetAmount: string;
};

const EventCard = ({
  src,
  title,
  category,
  daysLeft,
  progress,
  amountRaised,
  organizedBy,
  targetAmount,
}: EventCardProps) => {
  return (
    <div className="w-fit">
      <motion.button className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[30rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10">
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8 h-full flex justify-between flex-col">
          <div>
            <motion.p className="text-white text-sm md:text-base font-medium  text-left">
              {category}
            </motion.p>
            <motion.p className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance]  mt-2">
              {title}
            </motion.p>
          </div>
          <div className="flex items-center justify-between">
            <motion.p className="text-base font-semibold text-left [text-wrap:balance] w-fit mt-2 bg-white/90 text-black/70 px-5 rounded-full py-2">
              <span className="font-bold text-black/80">{daysLeft}</span> days
              left
            </motion.p>
            <motion.div className="bg-white/90 text-black/70 rounded-full p-2 mt-2">
              <Bookmark />
            </motion.div>
          </div>
        </div>
        <BlurImage
          src={src}
          alt={title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
      <motion.div className="mt-5">
        <Progress value={progress} className="w-full" />
      </motion.div>
      <motion.div className="flex justify-between items-center">
        <motion.p className="text-sm font-semibold text-left [text-wrap:balance] w-fit mt-2 text-black/50 rounded-full py-2">
          Total raised:
        </motion.p>
        <motion.p className="text-sm font-semibold text-right [text-wrap:balance] w-fit mt-2 text-black/70 py-2">
          <span className="font-bold text-black/80">
            {parseFloat(amountRaised).toFixed(1)} APT tokens{" "}
          </span>{" "}
          ({progress}%)
        </motion.p>
      </motion.div>
    </div>
  );
};

export default EventCard;
