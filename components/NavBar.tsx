"use client"

import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className={`z-50 h-[100px] w-full fixed top-0 left-0 ${
      isScrolled ? 'backdrop-filter backdrop-blur-lg bg-black/20' : 'bg-transparent'
    }`}>
      <MaxWidthWrapper className="flex w-full h-full justify-between items-center">
        <div>
          <a href="/" className="font-bold text-2xl">PlanetPatrons</a>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white">
                <Button variant="linkHover2">Home</Button>
              </a>
            </li>
            <li>
              <a href="/explore" className="text-white/70">
                <Button variant="linkHover2">Explore</Button>
              </a>
            </li>
            <li>
              <a href="#" className="text-white/70">
                <Button variant="linkHover2">How it works</Button>
              </a>
            </li>
            <li>
              <a href="#" className="text-white/70">
                <Button variant="linkHover2">Governance</Button>
              </a>
            </li>
          </ul>
        </div>

        <div>
          {/* <Button className="bg-gradient-to-r from-emerald-500 to-lime-600 px-5">
            Login
          </Button> */}
          <button
            type="button"
            className="bg-gradient-to-r from-amber-200 to-yellow-400 font-bold rounded-lg text-sm px-6 py-3 text-black text-center me-2 mb-2"
          >
            Login
          </button>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
