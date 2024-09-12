import React from "react";
import { FlipWords } from "./ui/flip-words";
import { HeroTooltip } from "./HeroTooltip";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ShowCard from "./ShowCard";

const HeroSection = () => {
  const words = ["Transparent", "Secure", "Impactful"];

  return (
    <>
      <div className="relative">
        <div className="">
          <img src="/images/bg-image2.png" alt="" />
        </div>

        <MaxWidthWrapper>
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center px-4  flex-col">
            <div className="text-5xl mx-auto font-bold text-black dark:text-white text-center backdrop-blur-xl p-10 rounded-3xl border-4 border-white/50 ">
              Empowering Environmental Change <br /> with
              <FlipWords words={words} className="text-green-900" />
              Crowdfunding
            </div>

            <div className="py-10">
              <HeroTooltip />
              <p className="text-black w-fit text-xs text-center mt-2">
                &ldquo;Trusted by communities, organizations, and global
                contributors <br /> for transparent, impactful change.&rdquo;
              </p>
            </div>
            <div>
              <a href="/explore">
                <button
                  type="button"
                  className="bg-gradient-to-r from-amber-200 to-yellow-400 font-bold text-black shadow-2xl rounded-lg text-lg px-8 py-4 text-center me-2 mb-2"
                >
                  Explore
                </button>
              </a>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="absolute -bottom-28 w-full">
          <ShowCard />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
