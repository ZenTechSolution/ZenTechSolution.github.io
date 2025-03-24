import React, { useState } from "react";
import { PrimaryBtn } from "../General/General";

const data = {
  miniHeading: "Pioneering Trust and Innovation",
  heading: "ZenTech Achievements",
  description:
    "We take pride in empowering businesses worldwide with innovative solutions. We bring an unwavering commitment to excellence, backed by a global presence. Our team of experts is dedicated to delivering cutting-edge solutions that drive growth and success for our clients. We are proud to have been recognized for our work and achievements in the industry.",
  achievements: [
    { id: 1, count: "20+", label: "Successful Projects" },
    { id: 2, count: "3+", label: "Countries Supported" },
    { id: 3, count: "10+", label: "Active Clients" },
    { id: 4, count: "5+", label: "Years of Enablement Experience" },
  ],
};

export const Achievements = () => {
  return (
    <div
      className="d-flex flex-wrap justify-content-between align-items-center my-5 col-12 m-auto"
      style={{
        minHeight: "70vh",
        minHeight: "70vh",
        backgroundImage: "url('/Images/General/blueBox.png')",
        backgroundPosition: "right",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="div d-flex flex-wrap justify-content-between align-items-center col-11 m-auto">
        {/* Left Section */}
        <div className="col-lg-6 col-12  ">
          <p className="text-primary fw-bold">{data.miniHeading}</p>
          <h2 className="serviceSectionHeading mb-3">{data.heading}</h2>
          <h4 className="mt-3 fs-5 fs-md-4 text-md-start mb-5">
            {data.description}
          </h4>
          <PrimaryBtn
            name={"Get in Touch"}
            onClick={() => {
              console.log("Hello");
            }}
          />
        </div>

        {/* Right Section */}
        <div className="col-lg-5 col-12 mt-4 mt-lg-0">
          <div className="row g-4">
            {data.achievements.map((item) => (
              <div key={item.id} className="col-6 text-left">
                <h2
                  className="serviceSectionHeading mb-3"
                  style={{ color: "#002448" }}
                >
                  {item.count}
                </h2>
                <h4 className="mt-3 fs-6 fs-md-4 fs-lg-3 text-start text-md-start">
                  {item.label}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
