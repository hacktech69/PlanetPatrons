import EventCard from "@/components/EventCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Input } from "@/components/ui/input";
import { a } from "framer-motion/client";
import { Search } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="h-[30vh] overflow-hidden relative">
        <img src="/images/bg.png" alt="" />

        <div className="absolute w-full bottom-5 flex justify-between items-center px-28">
          <h2 className="text-left text-5xl font-bold">EXPLORE EVENTS</h2>
          <div className="bg-white flex gap-2 justify-center items-center px-4 rounded-full text-black">
            <Search size={24} className="text-black" />
            <Input
              placeholder="Search for events"
              className="w-full border-none shadow-none active:ring-0 focus:ring-0 focus:border-none active:border-none focus-visible:ring-0"
            />
          </div>
        </div>
      </div>
      <MaxWidthWrapper className="my-5">
        <div className="flex gap-2">
          <div className="bg-yellow-500 rounded-full px-5 py-2 w-fit text-black text-sm font-semibold">
            <p>All</p>
          </div>
          <div className="bg-yellow-500/50 rounded-full px-5 py-2 w-fit text-black text-sm">
            <p>Tree Plantation</p>
          </div>
          <div className="bg-yellow-500/50 rounded-full px-5 py-2 w-fit text-black text-sm">
            <p>Ocean Conservation</p>
          </div>
          <div className="bg-yellow-500/50 rounded-full px-5 py-2 w-fit text-black text-sm">
            <p>Renewable Energy</p>
          </div>
          <div className="bg-yellow-500/50 rounded-full px-5 py-2 w-fit text-black text-sm">
            <p>Waste Management</p>
          </div>
          <div className="bg-yellow-500/50 rounded-full px-5 py-2 w-fit text-black text-sm">
            <p>Wildlife Preservation</p>
          </div>
          <div className="bg-yellow-500/50 rounded-full px-5 py-2 w-fit text-black text-sm">
            <p>Community Cleanups</p>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 py-10 gap-20">
          {data.map((event, index) => {
            return (
              <a href={`/explore/${event.id}`} key={index}>
                <EventCard
                key={index}
                src={event.src}
                title={event.title}
                category={event.category}
                daysLeft={event.daysLeft}
                progress={event.progress}
                organizedBy={event.organizedBy}
                targetAmount={event.targetAmount}
                amountRaised={event.amountRaised}
              />
              </a>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default page;

const data = [
  {
    id: 1,
    category: "Tree Planting",
    title: "Global Tree Planting Day",
    src: "/images/tree-plantation.jpg",
    daysLeft: 15,
    progress: 70,
    amountRaised: "70",
    targetAmount: "100",
    organizedBy: "Green Earth Initiative"
  },

  {
    id: 2,
    category: "Ocean Conservation",
    title: "World Ocean Cleanup Challenge",
    src: "/images/ocean-cleanup.jpg",
    daysLeft: 18,
    progress: 60,
    amountRaised: "600",
    targetAmount: "1000",
    organizedBy: "Blue Oceans Foundation"
  },

  {
    id: 3,
    category: "Renewable Energy",
    title: "Solar Power for All Campaign",
    src: "/images/solar-campaign.jpg",
    daysLeft: 20,
    progress: 45,
    amountRaised: "4500",
    targetAmount: "10000",
    organizedBy: "Solar Solutions Worldwide"
  },

  {
    id: 4,
    category: "Waste Management",
    title: "Plastic-Free July Initiative",
    src: "/images/plastic-campaign.jpg",
    daysLeft: 29,
    progress: 80,
    amountRaised: "800",
    targetAmount: "1000",
    organizedBy: "Zero Waste Movement"
  },

  {
    id: 5,
    category: "Sustainable Living",
    title: "Eco-Friendly Home Workshop",
    src: "/images/eco-workshop.jpg",
    daysLeft: 32,
    progress: 55,
    amountRaised: "550",
    targetAmount: "1000",
    organizedBy: "Sustainable Living Hub"
  },

  {
    id: 6,
    category: "Wildlife Preservation",
    title: "Save the Endangered Species Drive",
    src: "/images/endangered-drive.jpg",
    daysLeft: 60,
    progress: 35,
    amountRaised: "350",
    targetAmount: "1000",
    organizedBy: "Wildlife Warriors"
  },
];

