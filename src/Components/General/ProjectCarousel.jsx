import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import "./../../Css/Landing.css";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
////////////////////////////////////////////////////////////////
export const ProjectCarousel = () => {
  let [projects, setProjects] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      let projectJson = localStorage.getItem("projects");

      if (projectJson) {
        try {
          let projectObj = JSON.parse(projectJson);

          if (Array.isArray(projectObj)) {
            let projectArr = projectObj.map((item) => item.profile);

            setProjects(projectArr);
          } else {
            console.warn("Expected an array, but got:", projectObj);
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        console.warn("No projects found in localStorage.");
      }
    }, 1000);
  }, []);

  return (
    <div className="my-5 py-5">
      <p className="text-primary fw-bold col-11 mx-auto">Projects</p>
      <div className="div d-flex flex-column gap-4 MarqueeContainer py-4">
        <Marquee speed={200} gradient={false} gradientWidth={50} loop={0}>
          {[...projects, ...projects].map((project, index) => (
            <ProjectBox key={index} data={project} />
          ))}
        </Marquee>
        <Marquee
          speed={100}
          gradient={false}
          gradientWidth={50}
          loop={0}
          direction="right"
        >
          {[...projects, ...projects].map((project, index) => (
            <ProjectBox key={index} data={project} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const ProjectBox = ({ data }) => {
  const navigate = useNavigate();
  function boxClick() {
    navigate(`/project/${data.id}`);
  }
  return (
    <div
      className="projectBox text-center mx-3 d-flex gap-2 col-12"
      onClick={boxClick}
    >
      <LazyLoadImage
        src={data.img_path}
        alt={data.name}
        effect="blur"
        className="rounded-circle"
        style={{
          width: "80px",
          height: "80px",
          objectFit: "cover",
          backgroundColor: "#fff",
        }}
      />
      <h5 className="m-0 my-auto align-self-center">{data.name}</h5>
    </div>
  );
};
