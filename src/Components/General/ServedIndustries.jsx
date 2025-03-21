import { useState } from "react";
import { BsBank } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { MdEmojiTransportation } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrimaryBtn } from "./../General/General";
import "./../../Css/General.css";
import "./../../Css/DarkMode.css";
import { useNavigate } from "react-router-dom";

const dataIndustry = [
  {
    name: "Finance & Fintech",
    description:
      "In finance, precision and performance are paramount. We build secure web portals and mobile banking apps that allow seamless, 24/7 access to services. Our solutions integrate payment gateways, transaction tracking, and real-time notifications, ensuring your digital banking services are reliable, secure, and scalable.",
    icon: BsBank,
    color: "#03c4e8",
  },
  {
    name: "Healthcare",
    description:
      "We develop HIPAA-compliant healthcare applications, telemedicine platforms, and patient management systems that prioritize security and user experience.",
    icon: FaRegHospital,
    color: "#8fca4e",
  },
  {
    name: "E-Commerce",
    description:
      "Our e-commerce solutions include feature-rich online stores, secure payment integrations, and AI-driven recommendation engines.",
    icon: FiTruck,
    color: "#f48832",
  },
  {
    name: "Education",
    description:
      "We create interactive e-learning platforms, LMS systems, and mobile apps to enhance digital education experiences.",
    icon: IoSchoolOutline,
    color: "#008be8",
  },
  {
    name: "Real Estate",
    description:
      "Our real estate platforms provide seamless property listings, virtual tours, and AI-based property recommendations.",
    icon: MdOutlineRealEstateAgent,
    color: "#2c7655",
  },
];

export const ServedIndustries = () => {
  const navigate = useNavigate();

  return (
    <div className="col-11 m-auto">
      <div className="row ">
        <p className="text-primary fw-bold">Industries We Focus</p>
        <h2 className="serviceSectionHeading mb-3">
          Industries We Serve with Our Custom Services
        </h2>
        {dataIndustry.map((industry, index) => (
          <IndustryBox key={index} industry={industry} />
        ))}
      </div>
      <div className="div d-flex justify-content-center my-4">
        <PrimaryBtn
          name={"Transform Your Digital Presence"}
          onClick={() => {
            navigate("/contact");
          }}
        />
      </div>
    </div>
  );
};

function IndustryBox({ industry }) {
  return (
    <div className="col-md-4 d-flex p-0">
      <div
        className="p-3 border w-100 d-flex flex-column"
        style={{
          minHeight: "300px",
          alignItems: "flex-start", // Align items to top-left
          textAlign: "left",
        }}
      >
        <div className="div IndustriesImgIcon  p-3 rounded rounded-4 mb-3">
          <industry.icon size={40} className="mb-2" color={industry.color} />
        </div>

        {/* Text content below the icon */}
        <h3 className="mb-2">{industry.name}</h3>
        <p
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 5, // Limit to 5 lines
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {industry.description}
        </p>
      </div>
    </div>
  );
}
