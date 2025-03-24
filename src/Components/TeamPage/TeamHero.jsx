import React, { useEffect, useState } from "react";
import { BloomCircle } from "./../General/BloomCircles";
import "./../../Css/Responsive.css";

export const TeamHero = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (props.profile) {
      setData(props.profile);
    }
  }, [props.profile]);

  return (
    <>
      <div
        className=" d-flex align-items-center w-100 mb-5"
        style={{ minHeight: "70vh" }}
      >
        <div className="col-11 m-auto">
          <div className="row align-items-center justify-content-center">
            {/* Left Section */}
            <div className="col-12 col-md-6 text-center text-md-start">
              <p className=" text-primary fw-bold">Introduction</p>
              <h2>
                I am{" "}
                <span className="text-primary fw-bold">
                  {data.first_name} {data.last_name}
                </span>
              </h2>
              <h3>
                A <span className="fw-bold">{data.role}</span>
              </h3>
              <p className="fs-5">{data.description}</p>
            </div>

            {/* Right Section (Image) */}
            <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
              <div className="imgBox">
                <img
                  style={{ maxHeight: "450px" }}
                  src={data.img_path}
                  alt={data.name}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div BloomCircleTeam">
        <BloomCircle />
      </div>
    </>
  );
};
