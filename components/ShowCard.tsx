import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { CirclePercent, Globe, HandCoinsIcon, Milestone } from "lucide-react";
import NumberTicker from "./magicui/number-ticker";

const ShowCard = () => {
  return (
    <MaxWidthWrapper className="w-full flex justify-center items-center">
      <div className="w-[90%] h-[150px] bg-green-900 rounded-2xl shadow-2xl text-green-900 flex items-center justify-center border border-green-900">
        <div className="w-full h-full dark:bg-black bg-transparent dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center rounded-2xl">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-green-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] rounded-2xl"></div>
          <div className="w-full absolute px-20 flex items-center justify-center gap-x-40 bg-transparent text-white">
            <div>
              <NumberTicker
                value={150}
                className="text-white text-5xl font-extralight"
              />{" "}
              <span className="text-3xl">+</span>
              <p>Projects Funded</p>
            </div>
            <div>
              <NumberTicker
                value={1000}
                className="text-white text-5xl font-extralight"
              />{" "}
              <span className="text-3xl">+</span>
              <p>Verified Milestones</p>
            </div>
            <div>
              <NumberTicker
                value={95}
                className="text-white text-5xl font-extralight"
              />{" "}
              <span className="text-3xl">%</span>
              <p>Fund Utilization</p>
            </div>
            <div>
              <NumberTicker
                value={120}
                className="text-white text-5xl font-extralight"
              />{" "}
              <span className="text-3xl">+</span>
              <p>Communities</p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ShowCard;
