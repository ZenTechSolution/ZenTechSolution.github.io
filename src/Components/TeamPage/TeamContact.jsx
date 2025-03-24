import React, { useEffect, useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";

export const TeamContact = (props) => {
  let [data, setData] = useState({});

  useEffect(() => {
    setData(props.profile);
  }, [props]);

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-5 text-center">
          <img
            src={data.img_path}
            alt={data.name}
            className="img-fluid rounded"
            style={{ maxWidth: "300px", width: "100%" }}
          />
        </div>
        <div className="col-12 col-md-7">
          <p className=" text-primary fw-bold">About</p>
          <h2 className="fw-bold">{data.name}</h2>
          <h5 className="fs-5">{data.description}</h5>

          {data.mail && (
            <h3 className="text-dark mt-3">
              <a
                href={`mailto:${data.mail}`}
                className="text-decoration-none text-primary"
              >
                {data.mail}
              </a>
            </h3>
          )}

          <SkillBox profile={data} />
        </div>
      </div>
    </div>
  );
};

function SkillBox({ profile }) {
  return (
    <div className="d-flex gap-3 mt-4">
      {profile.linkedin && (
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <CiLinkedin size={40} color="rgb(0, 119, 181)" />
        </a>
      )}
      {profile.Github && (
        <a href={profile.Github} target="_blank" rel="noopener noreferrer">
          <LuGithub size={40} color="rgb(255, 255, 0)" />
        </a>
      )}
    </div>
  );
}
