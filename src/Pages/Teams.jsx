import React, { useEffect, useState } from "react";
import { TeamHero } from "./../Components/TeamPage/TeamHero";
import { NavBar } from "../Components/General/NavBar";
import { MyServices } from "../Components/TeamPage/MyServices";
import { MyProjects } from "../Components/TeamPage/MyProjects";
import { TeamEducation } from "./../Components/TeamPage/TeamEducation";
import { TeamContact } from "./../Components/TeamPage/TeamContact";
import { ServiceImage } from "./../Components/Service/ServiceImage";
import { Footer } from "./../Components/General/Footer";
import { useParams } from "react-router-dom";

export const Teams = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const teamJson = localStorage.getItem("users");
    if (teamJson) {
      const teamArr = JSON.parse(teamJson);
      const foundedTeam = teamArr.find((item) => item.profile.id == id);
      if (foundedTeam) {
        setData(foundedTeam);
        console.log("Founded Team Member:", foundedTeam);
      }
    }
  }, [id]);

  return (
    <div>
      <NavBar />
      {data ? (
        <>
          <TeamHero profile={data.profile} />
          <TeamEducation education={data.education} />
          <MyServices skills={data.skills || []} />
          <TeamContact profile={data.profile} />
          <ServiceImage />
          <MyProjects project={data.projects} />
          <Footer />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
