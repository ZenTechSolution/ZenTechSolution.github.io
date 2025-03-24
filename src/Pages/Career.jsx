import React, { useEffect } from "react";
import { CareerHero } from "./../Components/Careers/CareerHero";
import { Overview } from "./../Components/Careers/Overview";
import { ContactSection } from "./../Components/Careers/ContactSection";
import { NavBar } from "./../Components/General/NavBar";
import { OurMission } from "./../Components/About/OurMission";
import { OurVision } from "./../Components/About/OurMission";
import { ProjectCarousel } from "./../Components/General/ProjectCarousel";
import { TeamCarousel } from "./../Components/Landing/TeamCarasoul";
import { ServedIndustries } from "./../Components/General/ServedIndustries";
import { BloomCircle } from "./../Components/General/BloomCircles";
import { Footer } from "../Components/General/Footer";

export const Career = () => {
  useEffect(() => {
    setTimeout(() => {
      document.title = "Careers | Zentech Solutions";
    }, 100);
  }, []);

  return (
    <div>
      <NavBar />
      <CareerHero />
      <Overview />
      <OurMission />
      <OurVision />
      <ProjectCarousel />
      <ContactSection />
      <TeamCarousel />
      <div className="div" style={{ position: "relative" }}>
        <ServedIndustries />
        <div
          className="div"
          style={{ position: "absolute", right: "50%", top: "60%" }}
        >
          <BloomCircle />
        </div>
      </div>
      <Footer />
    </div>
  );
};
