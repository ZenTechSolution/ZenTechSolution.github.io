import React, { useEffect, useState } from "react";
import "./../../Css/Landing.css";
import "./../../Css/DarkMode.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

let footerData = {
  name: "Zentech Solution",
  img_path: "/Images/Icons/logo.png",
  description:
    "We take pride in empowering businesses worldwide with innovative solutions. We bring an unwavering commitment to excellence, backed by a global presence. Our team of experts is dedicated to delivering cutting-edge solutions that drive growth and success for our clients. ",
  address: " 61 Jade Block Street 2, Park View City, Lahore, 54000",
  mail: "zentechsol7@gmail.com",
  // linkedIn: "https://linkedIn.com",
  phone: "03066673331",
  // facebook: "https://facebook.com",
};

export const Footer = () => {
  let [data, setData] = useState({});

  useEffect(() => {
    setData(footerData);
  }, []);

  return (
    <footer
      className=" w-100 py-4 position-relative"
      style={{
        background:
          "url(/Images/General/blueBox-2.png) right center / contain no-repeat",
      }}
    >
      <div className="col-11 m-auto">
        <div className="row align-items-center justify-content-between">
          {/* Left Section */}
          <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
            {/* Logo */}
            <div className="imgBox mb-3">
              <img
                src={data.img_path}
                className="rounded-circle"
                style={{ width: "80px", height: "80px" }}
                alt="Logo"
              />
            </div>
            {/* Description */}
            <p className="fs-6 col-md-8">{data.description}</p>
          </div>

          {/* Right Section - Contact Info */}
          <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-md-end text-center text-md-end mt-3 mt-md-0">
            <p className="fw-bold fs-6">{data.address}</p>
            <p className="fw-bold fs-6">{data.mail}</p>
            <p className="fw-bold fs-6">{data.phone}</p>
          </div>
        </div>
      </div>
      <div
        className="position-absolute d-flex gap-3"
        style={{
          right: "20px",
          bottom: "20px",
        }}
      >
        {data.linkedIn && (
          <a
            href={data.linkedIn}
            className="fs-4 text-muted"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        )}
        {data.facebook && (
          <a
            href={data.facebook}
            className="fs-4 text-muted"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        )}
      </div>
    </footer>
  );
};
