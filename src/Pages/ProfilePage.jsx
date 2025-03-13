import React, { useState, useEffect } from "react";
import { HeroSection } from "../Components/ProfilePage/HeroSection";
import { About } from "../Components/ProfilePage/About";
import { InfiniteScroll } from "../Components/ProfilePage/InfiniteScroll";
import { Service } from "../Components/ProfilePage/Service";
import { Footer } from "./../Components/LandingPage/Footer";
import "./../Css/profile.css";
import { Journey } from "../Components/ProfilePage/Journey";
import { MyProjects } from "../Components/ProfilePage/MyProjects";
import { useParams, useLocation } from "react-router-dom";

export const ProfilePage = () => {
  const { id } = useParams(); // Get team member ID from URL
  const location = useLocation();

  // If data is passed via navigation, use it; otherwise, fetch it from API
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      let localData = localStorage.getItem("users");
      let teamObj = JSON.parse(localData);

      teamObj.forEach((team) => {
        if (team.profile.id == id) {
          setData(team);

          // console.log("Team Member:", team);
        }
      });

      // console.log(teamMember);
      // Fetch data from API using the ID
      // fetch(`http://127.0.0.1:8000/api/getTeam/${id}`)
      //   .then((res) => res.json())
      //   .then((response) => {
      //     setData(response.data);
      //   })
      //   .catch((err) => console.error("Error fetching team member:", err));
    }
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <HeroSection data={data.profile} />
      <InfiniteScroll data={data.skills} />
      <Service data={data.skills} />
      {data.education && <Journey data={data.education} />}
      <About data={data.profile} />
      {data.projects && <MyProjects data={data.projects} />}

      <div className="div mt-5">
        <Footer />
      </div>
    </div>
  );
};
