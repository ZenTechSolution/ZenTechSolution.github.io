import React, { useEffect } from "react";
import { ProjectHero } from "./../Components/Projects/ProjectHero";
import { AllProjects } from "./../Components/Projects/ProjectHero";
import { ServiceImage } from "./../Components/Service/ServiceImage";
import { TechStack } from "./../Components/General/TechStack";
import { ServedIndustries } from "./../Components/General/ServedIndustries";
import { CodeConduct } from "./../Components/About/CodeConduct";
import { Footer } from "../Components/General/Footer";
import { NavBar } from "../Components/General/NavBar";

export const ProjectPPage = () => {
  useEffect(() => {
    setTimeout(() => {
      document.title = "Projects | Zentech Solutions";
    }, 100);
  }, []);
  return (
    <div>
      <NavBar />
      <ProjectHero />
      <AllProjects />
      <ServiceImage />
      <TechStack />
      <CodeConduct />
      <ServedIndustries />
      <Footer />
    </div>
  );
};
