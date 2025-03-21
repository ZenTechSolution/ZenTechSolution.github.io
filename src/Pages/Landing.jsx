import React from "react";
import { NavBar } from "./../Components/General/NavBar";
import { HeroSection } from "./../Components/Landing/HeroSection";
import { OurServicesSection } from "./../Components/Landing/OurServicesSection";
import { Industries } from "./../Components/Landing/Industries";
import { Achievements } from "./../Components/Landing/Achievements";
import { ProjectCarousel } from "../Components/General/ProjectCarousel";
import { TeamCarousel } from "../Components//Landing/TeamCarasoul";
import { CareerSection } from "../Components//Landing/CareerSection";
import { ProjectBlogs } from "../Components//Landing/ProjectBlogs";
import { Footer } from "./../Components/General/Footer";
import { TechStack } from "./../Components/General/TechStack";

export const Landing = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <OurServicesSection slidesNo={4} />
      <Industries />
      <ProjectCarousel />
      <TeamCarousel />
      <Achievements />
      <TechStack />
      <CareerSection />
      {/* <ProjectBlogs /> */}
      <Footer />
    </>
  );
};
