import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

let services = [
  {
    name: "Mobile App Development",
    description:
      "Every app we build is engineered to drive measurable business outcomes. With expertise spanning cutting-edge native development, cross-platform solutions, and enterprise-grade systems, our engineers transform bold ideas into dynamic mobile experiences",
    img_path: "./Images/Icons/mobile.png",
  },
  {
    name: "Web Development",
    description:
      "Our web development services provide enterprise-grade and customized web development services tailored to meet the evolving demands of modern businesses.Whether you need a simple landing page or a complex web application, we have the expertise to deliver results that exceed expectations.",
    img_path: "./Images/Icons/website.png",
  },
  {
    name: "Generative AI",
    description:
      "We delivers expert generative AI solutions designed to accelerate your digital transformation. Using advanced technologies like TensorFlow, PyTorch, and GPT architectures, we create tailored AI solutions that enable businesses to innovate with precision and creativity.",
    img_path: "./Images/Icons/ai.png",
  },
  {
    name: "Custom Software Development",
    description:
      "We specialize in building scalable and bespoke software tailored to address specific business challenges. Whether you're enhancing operational processes or revolutionizing customer experiences, our team leverages cutting-edge tools and technologies to turn your vision into reality.",
    img_path: "./Images/Icons/software.png",
  },
  {
    name: "Cloud Application",
    description:
      "Cloud applications are transforming businesses with unmatched scalability, flexibility, and efficiency. We craft tailored cloud solutions using leading platforms like AWS, Azure, and Google Cloud, combined with tools such as Kubernetes, Terraform, and Docker.",
    img_path: "./Images/Icons/cloud.png",
  },
];

export const OurServices = () => {
  const [showAll, setShowAll] = useState(false);
  let [data, setData] = useState(services);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/getServices", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       setData(response.data.data || []);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching teams:", err);
  //     });
  // }, []);

  return (
    <div className="ourServiceSection">
      <div className="div col-12 col-md-6 m-auto serviceDescription">
        <h3 className="sectionHeading">
          Our <span>Services</span>
        </h3>
        <p className="w-100 col-md-6 m-auto sectionDescription">
          We take pride in empowering businesses worldwide with innovative
          solutions. We bring an unwavering commitment to excellence.
        </p>
      </div>
      <ServiceDiv showAll={showAll} data={data} />
      <div className="button-container">
        <button
          className="view-all-btn btn btn-primary p-2 bordered col-12 col-sm-3 col-lg-2 mt-3"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Hide" : "View All"}
        </button>
      </div>
    </div>
  );
};
function ServiceDiv({ showAll, data }) {
  return (
    <div className="serviceBoxGrid">
      {data.slice(0, showAll ? services.length : 3).map((service) => (
        <ServiceBox key={service.id} service={service} />
      ))}
    </div>
  );
}
function ServiceBox({ service }) {
  const [showFull, setShowFull] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const lineHeight = parseFloat(
        getComputedStyle(descriptionRef.current).lineHeight
      );
      const maxHeight = lineHeight * 4; // Max height for 4 lines
      setIsOverflowing(descriptionRef.current.scrollHeight > maxHeight);
    }
  }, [service.description]);

  return (
    <div className={`serviceBox ${showFull ? "expanded" : ""}`}>
      <div className="service-image">
        <img src={service.img_path} alt="service logo" />
      </div>
      <div className="h4 text-dark text-center textHeading">{service.name}</div>
      <div
        ref={descriptionRef}
        className={`description text-dark textDescription ${
          showFull ? "expanded" : "collapsed"
        }`}
      >
        {service.description}
      </div>
      {isOverflowing && (
        <button
          className="show-more-btn text-center col-12"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
