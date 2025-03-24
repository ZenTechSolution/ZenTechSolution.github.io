import React, { useEffect } from "react";
import { ContactHeroSection } from "./../Components/Contact/ContactHeroSection";
import { NavBar } from "../Components/General/NavBar";
import { ContactForm } from "./../Components/Contact/ContactForm";
import { ProjectCarousel } from "../Components/General/ProjectCarousel";
import { Footer } from "./../Components/General/Footer";
import { ContactSection } from "./../Components/Careers/ContactSection";

export const ContactPage = () => {
  useEffect(() => {
    setTimeout(() => {
      document.title = "Contact Us | Zentech Solutions";
    }, 100);
  }, []);
  return (
    <div>
      <NavBar />
      <ContactHeroSection />
      <ContactForm />
      <ProjectCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};
