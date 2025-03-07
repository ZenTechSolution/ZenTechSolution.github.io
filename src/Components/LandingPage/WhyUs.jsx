import React, { useState } from "react";

let whyUsData = [
  {
    name: "Innovative Solutions",
    description:
      "We create cutting-edge software solutions tailored to meet modern business needs, ensuring efficiency, scalability, and success.",
    image: "./Images/Icons/whyus2.png",
  },
  {
    name: "Experienced Team",
    description:
      "Our team of skilled developers and tech experts brings years of experience in crafting high-quality, robust, and reliable software applications.",
    image: "./Images/Icons/whyus3.png",
  },
  {
    name: "Customer-Centric Approach",
    description:
      "We prioritize understanding your business goals to deliver customized software that enhances productivity and drives growth.",
    image: "./Images/Icons/whyus4.png",
  },
  {
    name: "End-to-End Development",
    description:
      "From idea validation to deployment and support, we handle the entire software development lifecycle to ensure seamless execution.",
    image: "./Images/Icons/whyus1.png",
  },
  {
    name: "Scalable and Secure",
    description:
      "Our software solutions are designed for scalability and security, enabling businesses to grow without worrying about system limitations or threats.",
    image: "./Images/Icons/whyus6.png",
  },
  {
    name: "Continuous Support",
    description:
      "We provide ongoing maintenance and support to ensure your software remains updated, efficient, and aligned with your business goals.",
    image: "./Images/Icons/whyus5.png",
  },
];

export const WhyUs = () => {
  return (
    <div className="whyUsSection py-3 mt-3">
      <WhyUsDiv />
    </div>
  );
};

function WhyUsDiv() {
  const [showAll, setShowAll] = useState(false);

  const visibleBoxes = showAll ? whyUsData : whyUsData.slice(0, 3);

  return (
    <div className="whyUsSection text-center p-4 mt-4">
      <h2 className="sectionHeading">
        Why Choose <span>Us</span>
      </h2>
      <div className="whyUsBoxes d-flex flex-wrap justify-content-center gap-0 ">
        {visibleBoxes.map((box, index) => (
          <WhyUsBox key={index} box={box} />
        ))}
      </div>
      <button
        className="btn btn-primary mt-4 col-12 col-md-2 "
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Hide" : "View All"}
      </button>
    </div>
  );
}

function WhyUsBox({ box }) {
  return (
    <div className="aboutUs text-center p-3 col-12 p-0">
      <div className="aboutUsImgBox m-auto">
        <img className="sliderImg" src={box.image} alt={box.name} />
      </div>
      <div className="aboutUsImgBoxData ">
        <h4 className="mt-2 textHeading">{box.name}</h4>
        <p className="my-auto textDescription">{box.description}</p>
      </div>
    </div>
  );
}
