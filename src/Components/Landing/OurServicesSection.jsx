import React, { useEffect, useState } from "react";
import { PrimaryBtnOutline } from "./../General/General";
import "./../../Css/Classes.css";
import "./../../Css/Landing.css";
import { useNavigate } from "react-router-dom";

////////////////////////////////////////////////////////////////
const ServiceBox = ({ service }) => {
  const navigate = useNavigate();
  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    if (service?.img_path) {
      const img = new Image();
      img.src = service.img_path;
      img.onload = () => setBgImage(service.img_path);
    }
  }, [service?.img_path]);

  function NavigatePage() {
    navigate(`/services/${service.id}`);
  }

  return (
    <div
      onClick={NavigatePage}
      className="service-box text-white rounded position-relative"
      style={{
        width: "100%",
        height: "300px",
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
        textShadow: "1px 1px 5px rgba(0,0,0,0.8)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        filter: "grayscale(50%)",
        cursor: "pointer",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
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
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const jsonData = localStorage.getItem("nav-services");

      if (jsonData) {
        try {
          const jsonObj = JSON.parse(jsonData);
          if (Array.isArray(jsonObj)) {
            setServices(jsonObj);
          }
        } catch (error) {
          console.error("Error parsing nav-services:", error);
        }
      }
      setLoading(false);
    }, 1000); // 1-second delay

    return () => clearTimeout(timer); // Cleanup in case the component unmounts
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="col-11 m-auto mt-4 position-relative"
      style={{ overflow: "hidden" }}
    >
      <p className="text-primary fw-bold">Services</p>
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
        <PrimaryBtnOutline
          name={showAll ? "Hide" : "View All"}
          onClick={() => setShowAll(!showAll)}
        />
      </div>
    </div>
  );
};
