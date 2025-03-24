import React, { useEffect, useState } from "react";
import { ProjectHeroPage } from "./../Components/Projects/ProjectHeroPage";
import { ProjectOverView } from "./../Components/Projects/ProjectOverView";
import { NavBar } from "../Components/General/NavBar";
import { ProjectTechStack } from "../Components/Projects/ProjectTechStack";
import { ServedIndustries } from "./../Components/General/ServedIndustries";
import { ProjectFeatures } from "./../Components/Projects/ProjectFeatures";
import { ReviewSection } from "./../Components/Projects/ProjectFeatures";
import { ImageGallery } from "./../Components/Projects/ProjectFeatures";
import { useParams } from "react-router-dom";
import { ServiceImage } from "../Components/Service/ServiceImage";
import { Footer } from "./../Components/General/Footer";

let projectData = {
  profile: {
    id: 1,
    name: "Schoollet",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat libero quidem eveniet ullam nobis praesentium expedita possimus recusandae ipsum eligendi! Velit blanditiis saepe minus qui fuga corporis id culpa similique!",
    img_path:
      "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/677b72ed7edda24e27141b5e_AWS-p-500.png",
    link: "https://facebook.com",
  },
  tags: [
    "flutter",
    "php",
    "css",
    "Laravel",
    "firebase",
    "sql",
    "react",
    "nodejs",
    "javascript",
    "html",
  ],
  Images: [
    {
      id: 1,
      img_path:
        "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
    },
    {
      id: 2,
      img_path:
        "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
    },
    {
      id: 3,
      img_path:
        "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
    },
    {
      id: 4,
      img_path:
        "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
    },
    {
      id: 5,
      img_path:
        "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
    },
    {
      id: 6,
      img_path:
        "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
    },
  ],
  features: [
    "Over 3200 SVG icons for popular brands. See them all on one page",
    "Over 3200 SVG icons for popular brands. See ",
    "Over 3200 SVG icons for popular brands. See them all on one page Over 3200 SVG icons for popular brands.",
    "Over 3200 SVG icons for popular brands. See them all on one page",
    "Over 3200 SVG icons for",
    "Over 3200 SVG icons for popOver 3200 SVG icons for popular brands. See them all on one page",
  ],
};

export const Projects = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const jsonData = localStorage.getItem("projects");
      if (jsonData) {
        const projectArr = JSON.parse(jsonData);
        const filteredProject = projectArr.find(
          (item) => item.profile.id == id
        );

        if (filteredProject) {
          setProject(filteredProject);
        }
      }
    }, 500);
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div>
      <NavBar />
      <div className="div">
        <ProjectHeroPage profile={project.profile} tags={project.tags} />
      </div>
      <ProjectOverView project={project} />
      <ProjectFeatures features={project.features} />
      <ImageGallery Images={project.Images} />
      <ReviewSection data={project.profile} />
      <ProjectTechStack tags={project.tags} />
      <ServiceImage />
      <ServedIndustries />
      <Footer />
    </div>
  );
};
