import React from "react";

export const HeroSection = (props) => {
  // console.log(props.data);
  return (
    <div
      className="HeroSection position-relative bg-light d-flex align-items-center justify-content-center"
      style={{ minHeight: "90vh" }}
    >
      <div
        className="div bg-light m-3 miniLogoPages"
        style={{
          width: "110px",
          height: "110px",
          borderRadius: "50%",
          position: "absolute",
          top: "0%",
          left: "0%",
        }}
      >
        <img
          className="text-light"
          src="/Images/Icons/zentech.png"
          alt="ZentechLogo"
          style={{ width: "100%", height: "100%", scale: "70%" }}
        />
      </div>
      {/* Left Content */}
      <div className="container miniLogoPagesContainer">
        <div className="row align-items-end">
          {/* Left Section */}
          <div className="col-md-6 text-center text-md-start text-light align-self-center">
            <h3 className="fw-bold text-dark">
              I am{" "}
              <span className="text-light h1" style={{ fontWeight: "bold" }}>
                {props.data.first_name + " " + props.data.last_name}
              </span>
            </h3>
            <h3 className="text-dark">
              {" "}
              A <span className="text-light h2">
                {props.data.role}
              </span> and <br />
              Developer Enthusiast
            </h3>
            {/* <p className="text-muted">{props.data.description}</p> */}
          </div>

          {/* Right Section (Image Box) */}
          <div className="col-md-6 d-flex justify-content-center">
            <div
              className="border profileImageBox rounded-4  overflow-hidden"
              style={{ maxWidth: "500px" }}
            >
              <img src={props.data.img_path} alt="Hero" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom SVG Wave */}
      <div className="position-absolute bottom-0 start-0 w-100 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-100 h-auto fill-white"
        >
          <path
            d="M0,32L48,42.7C96,53,192,75,288,85.3C384,96,480,96,576,90.7C672,85,768,75,864,64C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </div>
  );
};
