import React, { useEffect, useState } from "react";
import "./../../Css/General.css";
import { BloomCircle } from "./../General/BloomCircles";

export const ProjectOverView = ({ project }) => {
  const [profile, setProfile] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (project) {
      setProfile(project.profile);
      setImages(project.Images);
    }
  }, [project]);

  return (
    <>
      <div className="project-overview col-11 m-auto mt-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <p className=" text-primary fw-bold text-start">Overview</p>
            <h2 className="h3 fw-bold">{profile.name}</h2>
            <p className="h5" style={{ lineHeight: "30px" }}>
              {profile.description}
            </p>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              className="img-fluid bg-light rounded-circle mb-5"
              style={{ maxWidth: "100%", height: "300px", objectFit: "cover" }}
              src={profile.img_path}
              alt={profile.name}
            />
          </div>
        </div>
      </div>
    </>
  );
};
