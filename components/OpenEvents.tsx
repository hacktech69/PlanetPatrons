"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Ghost } from "lucide-react";
import { progress } from "framer-motion";

export function OpenEvents() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 mt-44">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center pl-10">
          <h2 className="max-w-7xl pl-4 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 ">
            RUNNING EVENTS
          </h2>
          <a href="/explore">
            <Button variant={"ghost"} className="text-black/70">
              {" "}
              SHOW MORE
            </Button>
          </a>
        </div>
      </MaxWidthWrapper>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Tree Planting",
    title: "Global Tree Planting Day",
    src: "/images/tree-plantation.jpg",
    content: <DummyContent />,
    daysLeft: 15,
    progress: 70,
    amountRaised: "70",
  },

  {
    category: "Ocean Conservation",
    title: "World Ocean Cleanup Challenge",
    src: "/images/ocean-cleanup.jpg",
    content: <DummyContent />,
    daysLeft: 18,
    progress: 60,
    amountRaised: "600",
  },

  {
    category: "Renewable Energy",
    title: "Solar Power for All Campaign",
    src: "/images/solar-campaign.jpg",
    content: <DummyContent />,
    daysLeft: 20,
    progress: 45,
    amountRaised: "4500",
  },

  {
    category: "Waste Management",
    title: "Plastic-Free July Initiative",
    src: "/images/plastic-campaign.jpg",
    content: <DummyContent />,
    daysLeft: 29,
    progress: 80,
    amountRaised: "800",
  },

  {
    category: "Sustainable Living",
    title: "Eco-Friendly Home Workshop",
    src: "/images/eco-workshop.jpg",
    content: <DummyContent />,
    daysLeft: 32,
    progress: 55,
    amountRaised: "550",
  },

  {
    category: "Wildlife Preservation",
    title: "Save the Endangered Species Drive",
    src: "/images/endangered-drive.jpg",
    content: <DummyContent />,
    daysLeft: 60,
    progress: 35,
    amountraised: "350",
  },
];
