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
          <p className="h5 mt-3 col-12 col-md-8 m-auto sectionDescription text-light">
            Lorem ipsums dolor sit amet, consectetur adipisicing elit. Sedsa quo
            illo eum repudiandae, culpa quas esse voluptatibus odit natus{" "}
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
            <h3 className="textHeading text-light">Heading</h3>
            <p className="textDescription text-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              laborum impedit sunt non, deleniti ex exercitationem illo saepe
              facere modi, distinctio harum cupiditate! Officia omnis
              dignissimos iure, asperiores sed facilis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
