import React from "react";
import { SliderImg } from "./HeroSection";
import "./../../Css/LandingPage.css";

export const AboutUs = () => {
  return (
    <div className="AboutUsSecction m-0">
      <div className="div aboutUsSectionBox py-4">
        <div className="div about-heading text-light mx-4">
          <h3 className="sectionHeading text-light">
            About <span>Us</span>
          </h3>
          <p className="h5 mt-3 col-12 col-md-10 m-auto sectionDescription text-light">
            Zentech Solutions is a company committed to delivering innovative
            and efficient digital solutions. We specialize in building
            high-quality software tailored to business needs, ensuring seamless
            functionality..
          </p>
        </div>
        <div className="div aboutUsSection d-flex">
          <div className="div leftSection mx-4 mt-4">
            <img
              className="sliderImg"
              src="./Images/Images/aboutUs.png"
              alt=""
            />
          </div>
          <div className="div rightSection text-left my-0 align-self-center gap-2 mx-4">
            <h3 className="textHeading text-light">Empowering Businesses</h3>
            <p className="textDescription text-light">
              At Zentech Sol, we craft powerful and scalable software solutions
              designed to meet modern business challenges. With a focus on
              innovation, efficiency, and seamless integration, we help
              businesses streamline operations, enhance productivity, and
              achieve long-term success through technology-driven solutions."
              Let me know if you need any refinements!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
