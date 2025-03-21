import React from "react";
import { HeroPageAboutUs } from "./../Components/About/HeroPageAboutUs";
import { NavBar } from "./../Components/General/NavBar";
import { CodeConduct } from "./../Components/About/CodeConduct";
import { OurValues } from "./../Components/About/OurValues";
import { OurMission } from "./../Components/About/OurMission";
import { OurVision } from "./../Components/About/OurMission";
import { TeamCarousel } from "../Components/Landing/TeamCarasoul";
import { TechStack } from "../Components/General/TechStack";
import { ServedIndustries } from "../Components/General/ServedIndustries";
import { Footer } from "../Components/General/Footer";

export const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <HeroPageAboutUs />
      <OurMission />
      <OurVision />
      <OurValues />
      <CodeConduct />
      <TechStack />
      <TeamCarousel />
      <ServedIndustries />
      <Footer />
    </div>
  );
};
