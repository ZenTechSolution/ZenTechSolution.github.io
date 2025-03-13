import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { TeamSection } from "./../Components/ProjectPage/TeamSection";
import { HeroSection } from "./../Components/ProjectPage/HeroSection";
import { Footer } from "./../Components/LandingPage/Footer";

export const ProjectPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [data, setData] = useState(location.state?.project || null);

  useEffect(() => {
    if (!data) {
      const localData = localStorage.getItem("projectUser");

      if (localData) {
        const projects = JSON.parse(localData);

        console.log("Project ID from URL:", id);

        if (projects[id]) {
          setData(projects[id]);
          console.log("Project from project page:", projects[id]);
        } else {
          // Alternative approach if ID lookup fails
          const projectData = Object.values(projects);
          const foundProject = projectData.find(
            (project) => project.profile.id == id
          );

          if (foundProject) {
            setData(foundProject);
            console.log("Project from project page:", foundProject);
          }
        }
      }
    }
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <HeroSection data={data.profile} images={data.project_img} />
      <TeamSection team={data.team} />
      <div className="div mt-5">
        <Footer />
      </div>
    </div>
  );
};
