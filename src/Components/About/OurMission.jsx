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
      "At Devsinc, we envision transforming IT systems into smart, agile, and AI-driven digital assets. With a decade of expertise, we empower global clients through innovative, adaptive solutions, shaping a future where technology meets the dynamic demands of a connected world.",
  });
  return <GeneralSection data={data} />;
};

export function GeneralSection({ data }) {
  return (
    <section className="our-mission py-5">
      <div className="col-11 m-auto">
        {/* Mission Heading */}
        <div className="text-center">
          <p className=" text-primary fw-bold text-start">{data.name}</p>

          <h2 className="heading-style-h1 text-start fw-bold">
            Our {data.name}
          </h2>
        </div>

        {/* Mission Description with Quote */}
        <div
          className="quote-border  border  rounded-4 mt-4 d-flex flex-column justify-content-center"
          style={{ position: "relative", minHeight: "150px" }}
        >
          <p className="text-size-medium text-center fs-5  m-auto my-5 px-4">
            {data.description}
          </p>
          <div
            className="div  p-3 rounded-circle colonCircle"
            style={{ position: "absolute", top: "-20%", right: "1%" }}
          >
            <FaQuoteLeft size={35} color="#fff" />
          </div>
        </div>
      </div>
    </section>
  );
}
