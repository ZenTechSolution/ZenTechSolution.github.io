import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./../../Css/General.css";

export const OurMission = () => {
  let [data, setData] = useState({
    name: "Mission",
    description:
      " To empower businesses with cutting-edge technology solutions, unlocking their growth potential by connecting them with passionateand  skilled engineers.",
  });
  return <GeneralSection data={data} />;
};

export const OurVision = () => {
  let [data, setData] = useState({
    name: "Vision",
    description:
      "At Zentech, we envision transforming IT systems into smart, agile, and AI-driven digital assets. With a decade of expertise, we empower global clients through innovative, adaptive solutions, shaping a future where technology meets the dynamic demands of a connected world.",
  });
  return <GeneralSection data={data} />;
};

export function GeneralSection({ data }) {
  return (
    <section className="our-mission py-5">
      <div className="col-11 m-auto">
        {/* Mission Heading */}
        <div className="text-center">
          <p className="text-primary fw-bold text-start">{data.name}</p>

          <h2 className="heading-style-h1 text-start fw-bold">
            Our {data.name}
          </h2>
        </div>

        {/* Mission Description with Fixed Quote Icon */}
        <div
          className="quote-border border rounded-4 mt-4 d-flex flex-column align-items-center justify-content-center position-relative"
          style={{ minHeight: "200px", padding: "2rem" }} // Ensures space for varying text length
        >
          <p className="text-size-medium text-center fs-5 m-auto my-3 py-0">
            {data.description}
          </p>
          {/* Fixed Quote Icon */}
          <div
            className="p-3 rounded-circle colonCircle position-absolute"
            style={{ top: "-40px", right: "20px" }} // Fixed position
          >
            <FaQuoteLeft size={35} color="#fff" />
          </div>
        </div>
      </div>
    </section>
  );
}
