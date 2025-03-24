import React, { useEffect, useState } from "react";
import { PrimaryBtn } from "./../General/General";
import { MyProjects } from "./../TeamPage/MyProjects";
import { useNavigate } from "react-router-dom";

let ProjectPage = {
  miniHeading: "Projects",
  name: "Projects",
  description:
    "Explore Zentech's' innovative projects, where technology meets excellence. Discover our cutting-edge solutions transforming businesses worldwide.",
  img_path: "/Images/General/ProjectImage.jpg",
};

export const ProjectHero = () => {
  const [data, setData] = useState(ProjectPage);
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-end justify-content-center position-relative"
      style={{
        width: "100vw",
        height: "90vh",
        background: `url(${data.img_path}) center / cover no-repeat`,
      }}
    >
      <div
        className="glass-box text-white p-4 rounded"
        style={{
          width: "90%",
          maxWidth: "90%",
          minWidth: "280px",
          backdropFilter: "blur(10px)",
          background: "rgba(0, 0, 0, 0.28)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "12px",
          textAlign: "center",
          padding: "20px",
          marginBottom: "5vh",
        }}
      >
        <div className="w-100">
          <h2 className="fw-bold fs-6 text-start">Project</h2>
          <p
            className="mt-2 fs-2 fw-bold text-start"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.description}
          </p>
          <div
            className="d-flex justify-content-start mt-3"
            style={{ width: "fit-content" }}
          >
            <PrimaryBtn
              name={"Lets Discuss Your Project"}
              onClick={() => {
                navigate("/contact");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const AllProjects = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setTimeout(() => {
      const jsonData = localStorage.getItem("projects");
      const jsonObj = jsonData ? JSON.parse(jsonData) : [];
      setData(jsonObj);
      console.log(jsonObj);
    }, 1000); // 1-second delay
  }, []);

  return <>{data ? <MyProjects project={data} /> : <p>Loading ...</p>};</>;
};
