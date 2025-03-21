import React, { useEffect, useState } from "react";
import "./../../Css/Landing.css";
import "./../../Css/DarkMode.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

let footerData = {
  name: "Zentech Solution",
  img_path: "/Images/Icons/logo.png",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius praesentium rem quaerat labore libero molestiae aliquid provident repudiandae suscipit placeat, deserunt debitis eveniet maiores iste? Doloribus in ea temporibus corrupti",
  address:
    "Plot B, 281 Ghazi Rd, Khuda Buksh Colony KB Society, Lahore, Punjab",
  mail: "mail@mail.com",
  linkedIn: "https://linkedIn.com",
  phone: "505551122",
  facebook: "https://facebook.com",
};

export const Footer = () => {
  let [data, setData] = useState({});

  useEffect(() => {
    setData(footerData);
  }, []);

  return (
    <div
      className="m-auto footer-section w-100 d-flex justify-content-center align-items-center py-4 row position-relative"
      style={{
        position: "relative",
        background:
          "url(/Images/General/blueBox-2.png) right center / contain no-repeat",
      }}
    >
      <div className="d-flex flex-wrap justify-content-between col-11 m-auto">
        {/* Left Section */}
        <div className="leftSection col-12 col-md-5 d-flex flex-column align-items-center text-md-start">
          <div
            className="imgBox mb-3"
            style={{ width: "100px", height: "100px", alignSelf: "baseline" }}
          >
            <img
              src={data.img_path}
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              alt="Logo"
            />
          </div>
          <p className="fs-6 col-md-8" style={{ alignSelf: "baseline" }}>
            {data.description}
          </p>
        </div>

        {/* Right Section */}
        <div className="rightSection col-12 col-md-5 d-flex flex-column align-items-center text-md-end">
          <p className="fw-bold fs-6 col-4 text-end">{data.address}</p>
          <p className="fw-bold fs-6 col-4 text-end">{data.mail}</p>
          <p className="fw-bold fs-6 col-4 text-end">{data.phone}</p>
        </div>
      </div>

      {/* Social Media Icons at Bottom Right */}
      <div
        className="social-icons d-flex gap-3"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          width: "100px",
        }}
      >
        {data.linkedIn && (
          <a
            href={data.linkedIn}
            className="fs-2 text-primary footerIcon text-muted"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
        )}
        {data.facebook && (
          <a
            href={data.facebook}
            className="fs-2 text-primary footerIcon text-muted"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={25} />
          </a>
        )}
      </div>
    </div>
  );
};
