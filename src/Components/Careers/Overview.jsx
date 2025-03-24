import React, { useEffect, useState } from "react";

let overviewData = {
  name: "overview",
  description: `At Zentech Solutions, we believe in fostering talent, innovation, and teamwork. Our dynamic work environment encourages creativity, collaboration, and professional growth. Whether you're an experienced professional or just starting your career,  we offer exciting opportunities to learn, lead, and make a real impact. Join us to work on cutting-edge projects, solve complex challenges, and contribute to a future driven by technology. Be a part of a team that values passion, dedication, and continuous learning.`,
  img_path: "/Images/General/careerOverview.png",
};

export const Overview = () => {
  const [profile, setProfile] = useState(overviewData);

  return (
    <>
      <div className="project-overview col-11 m-auto mt-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <p className=" text-primary fw-bold text-start">Overview</p>
            <p className="h5" style={{ lineHeight: "30px" }}>
              {profile.description}
            </p>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              className="img-fluid mb-5"
              style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
              src={profile.img_path}
              alt={profile.name}
            />
          </div>
        </div>
      </div>
    </>
  );
};
