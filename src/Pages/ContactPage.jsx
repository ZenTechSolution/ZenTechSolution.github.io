import React from "react";
import { ContactHeroSection } from "./../Components/Contact/ContactHeroSection";
import { NavBar } from "../Components/General/NavBar";
import { ContactForm } from "./../Components/Contact/ContactForm";
import { ProjectCarousel } from "../Components/General/ProjectCarousel";
import { Footer } from "./../Components/General/Footer";

export const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <ContactHeroSection />
      <ContactForm />
      <ProjectCarousel />
      <Footer />
    </div>
  );
};
