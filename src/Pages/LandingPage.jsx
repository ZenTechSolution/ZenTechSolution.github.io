import React, { useRef, useState } from "react";
import { HeroSection } from "../Components/LandingPage/HeroSection";
import { OurServices } from "../Components/LandingPage/OurServices";
import { AboutUs } from "../Components/LandingPage/AboutUs";
import { WhyUs } from "../Components/LandingPage/WhyUs";
import { OurTeam } from "../Components/LandingPage/OurTeam";
import { Testmonial } from "../Components/LandingPage/Testmonial";
import { Footer } from "../Components/LandingPage/Footer";
import "./../Css/scroll.css";

export const LandingPage = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const whyUsRef = useRef(null);
  const teamRef = useRef(null);
  const testimonialRef = useRef(null);
  // const footerRef = useRef(null);

  // Function to smoothly scroll to the section
  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Navigation
        onNavigate={scrollToSection}
        sections={{
          // Hero: heroRef,
          services: servicesRef,
          about: aboutRef,
          whyUs: whyUsRef,
          team: teamRef,
          testimonials: testimonialRef,
        }}
      />

      {/* Sections wrapped in divs with refs */}

      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={servicesRef}>
        <OurServices />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={whyUsRef}>
        <WhyUs />
      </div>
      <div ref={teamRef}>
        <OurTeam />
      </div>
      <div ref={testimonialRef}>
        <Testmonial />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

const Navigation = ({ onNavigate, sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-sm navigationBar Landing">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            className="text-light"
            src="/Images/Icons/zentech.png"
            alt="ZentechLogo"
            style={{ width: "100px", height: "100px", scale: "70%" }}
          />
        </a>

        {/* Burger Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-light"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(sections.services);
                  setIsOpen(false); // Close menu on click (for mobile)
                }}
              >
                Services
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-light"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(sections.about);
                  setIsOpen(false);
                }}
              >
                About Us
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-light"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(sections.whyUs);
                  setIsOpen(false);
                }}
              >
                Why Us
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-light"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(sections.team);
                  setIsOpen(false);
                }}
              >
                Team
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-light"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(sections.testimonials);
                  setIsOpen(false);
                }}
              >
                Projects
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
