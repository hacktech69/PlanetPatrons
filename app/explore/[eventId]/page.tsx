"use client";

import { HeroTooltip } from "@/components/HeroTooltip";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import React, { FC } from "react";

interface PageProps {
  params: {
    eventId: string; // In most cases, Next.js dynamic routes provide strings
  };
}

const Page: FC<PageProps> = ({ params }) => {
  const eventId = Number(params.eventId); // Convert string to number for comparison

  return (
    <div>
      {data.map((event, index) => {
        if (event.id === eventId) {
          return (
            <div key={index} className="w-full h-full relative">
              <div className="max-h-[80vh] overflow-hidden">
                <img
                  src={event.src}
                  alt={event.title}
                  className="w-full object-cover"
                />
              </div>
              <div className="-translate-y-32 h-full py-10 bg-white rounded-t-3xl w-full text-black">
                <MaxWidthWrapper>
                  <div className="bg-yellow-500 rounded-full w-fit px-6 py-2 text-sm mb-3">
                    <p>{event.category}</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex gap-2 items-center">
                        <h3 className="text-4xl font-bold">{event.title}</h3>
                        <p className="border-2 border-gray-200 px-4 py-2 rounded-full text-black/50">
                          {event.daysLeft} days left
                        </p>
                      </div>
                      <p>
                        Organised by{" "}
                        <span className="text-green-900 font-semibold">
                          {event.organizedBy}
                        </span>
                      </p>
                      <div className="w-[55%]">
                        <Progress
                          value={event.progress}
                          className="w-full mt-5"
                        />
                        <div className="flex justify-between items-center w-full text-sm text-black/70 mt-3">
                          <div>
                            <p>Raised so far</p>
                            <p className="font-semibold">
                              {event.amountRaised} APT tokens
                            </p>
                          </div>
                          <div className="text-right">
                            <p>Target</p>
                            <p className="font-semibold">
                              {event.targetAmount} APT tokens
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between h-full gap-5 ">
                      <div>
                        <p>Recent Donors: </p>
                        <HeroTooltip />
                      </div>

                      <Button className="bg-yellow-500 rounded-full text-black font-bold border-2 border-black hover:bg-yellow-500/50">
                        Donate Now
                      </Button>
                    </div>
                  </div>
                </MaxWidthWrapper>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Page;

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
    organizedBy: "Green Earth Initiative",
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
    organizedBy: "Blue Oceans Foundation",
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
    organizedBy: "Solar Solutions Worldwide",
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
    organizedBy: "Zero Waste Movement",
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
    organizedBy: "Sustainable Living Hub",
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
    organizedBy: "Wildlife Warriors",
  },
];
