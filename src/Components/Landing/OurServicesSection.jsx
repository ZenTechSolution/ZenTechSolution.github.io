import React, { useEffect, useState } from "react";
import { PrimaryBtnOutline } from "./../General/General";
import "./../../Css/Classes.css";
import "./../../Css/Landing.css";
import { useNavigate } from "react-router-dom";

////////////////////////////////////////////////////////////////
const ServiceBox = ({ service }) => {
  const navigate = useNavigate();

  function NavigatePage() {
    navigate(`/services/${service.id}`);
    window.location.reload();
  }

  return (
    <div
      onClick={() => NavigatePage()}
      className="service-box text-white rounded position-relative"
      style={{
        width: "100%",
        height: "300px",
        backgroundImage: `url(${service.img_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
        color: "white",
        textShadow: "1px 1px 5px rgba(0,0,0,0.8)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        filter: "grayscale(50%)",
        position: "relative",
      }}
    >
      {/* Name Positioned at Top Left */}
      <h2
        className="position-absolute"
        style={{
          top: "10px",
          left: "15px",
          fontSize: "24px",
          fontWeight: "bold",
          padding: "5px 10px",
          borderRadius: "5px",
        }}
      >
        {service.name}
      </h2>
    </div>
  );
};
////////////////////////////////////////////////////////////////
export const OurServicesSection = ({ slidesNo = 4 }) => {
  const [showAll, setShowAll] = useState(false);
  let [services, setServices] = useState([]);

  useEffect(() => {
    let jsonData = localStorage.getItem("nav-services");
    let jsonObj = JSON.parse(jsonData);
    setServices(jsonObj);
  }, []);

  return (
    <div
      className="col-11 m-auto mt-4 position-relative"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div className="position-absolute"></div>
      <p className=" text-primary fw-bold">Services</p>
      <h2 className="serviceSectionHeading mb-3">Transform Your Business</h2>
      <div className="row g-4">
        {services
          .slice(0, showAll ? services.length : slidesNo)
          .map((service) => (
            <div key={service.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ServiceBox service={service} />
            </div>
          ))}
      </div>
      <div className="text-center mt-4">
        {/* <button
          className="btn btn-primary"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Hide" : "View All"}
        </button> */}
        <PrimaryBtnOutline
          name={showAll ? "Hide" : "View All"}
          onClick={() => setShowAll(!showAll)}
        />
      </div>
    </div>
  );
};
