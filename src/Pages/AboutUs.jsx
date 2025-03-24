import React, { useEffect } from "react";
import { HeroPageAboutUs } from "./../Components/About/HeroPageAboutUs";
import { NavBar } from "./../Components/General/NavBar";
import { CodeConduct } from "./../Components/About/CodeConduct";
import { OurValues } from "./../Components/About/OurValues";
import { OurMission } from "./../Components/About/OurMission";
import { OurVision } from "./../Components/About/OurMission";
import { TeamCarousel } from "../Components/Landing/TeamCarasoul";
import { TechStack } from "../Components/General/TechStack";
import { ServedIndustries } from "../Components/General/ServedIndustries";
import { BloomCircle } from "./../Components/General/BloomCircles";

import { Footer } from "../Components/General/Footer";

export const AboutUs = () => {
  useEffect(() => {
    setTimeout(() => {
      document.title = "About Us | Zentech Solutions";
    }, 100);
  }, []);
  return (
    <div>
      <NavBar />
      <HeroPageAboutUs />
      <OurMission />
      <OurVision />
      <div className="div" style={{ position: "relative" }}>
        <OurValues />
        <div
          className="div"
          style={{ position: "absolute", scale: "2", zIndex: "-1" }}
        >
          <BloomCircle />
        </div>
      </div>
      <CodeConduct />
      <TechStack />
      <TeamCarousel />
      <ServedIndustries />
      <Footer />
    </div>
  );
};
