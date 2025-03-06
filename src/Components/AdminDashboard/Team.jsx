import React, { useEffect, useState } from "react";
import { NavigationBar } from "./DashboardData";
import { TeamPopUp } from "./../TeamPopUp";
import axios from "axios";

let data = [
  {
    id: 1,
    name: "name1",
    img_path: "/Images/Images/user-avatar.png",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    role: "user",
    skills: [{ name: "Skill 1" }, { name: "Skill 2" }, { name: "Skill 3" }],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis autem impedit voluptatum debitis doloribus libero. ",
  },
];

export const Team = () => {
  let [show, setShow] = useState(false);
  let [team, setTeam] = useState(data);

  useEffect(() => {
    // Retrieve token from localStorage (or any other secure storage)
    // const token = localStorage.getItem("token");

    axios
      .get("http://127.0.0.1:8000/api/getTeams", {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTeam(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        // setError("Failed to load projects");
      });
  }, []);

  function Addbtn() {
    setShow(true);
  }
  return (
    <>
      <NavigationBar heading={"Team"} Addbtn={Addbtn} />
      <div className="teamSectionBox mt-4">
        {team.map((member) => {
          return <TeamBox team={member} />;
        })}
      </div>
      <TeamPopUp show={show} onCancel={() => setShow(false)} />
    </>
  );
};

function TeamBox(props) {
  let [show, setShow] = useState(false);
  function deleteTeam(e) {
    e.stopPropagation();
  }
  return (
    <>
      <div className="div TeamCard d-flex" onClick={() => setShow(true)}>
        <div className="div teamLeftSection col-2">
          <div className="div TeamImgBox">
            <img src={props.team.img_path} alt="Project Name" />
          </div>
          <h3 className="teamName mt-1 m-auto">{props.team.name}</h3>
          <p className="teamName mt-1 m-auto">{props.team.role}</p>
        </div>
        <div className="div teamCardText ">
          <p className="teamDescription">{props.team.description}</p>
          <div className="Contributors d-flex justify-content-between">
            {/* {props.team.skills.map((team, i) => {
              if (i <= 2) {
                return (
                  <div className="div contributorName mb-2">{team.name}</div>
                );
              }
            })} */}
          </div>
          <button
            className="btn  btn-outline-danger my-2 align-self-end w-100"
            onClick={(e) => deleteTeam(e)}
          >
            Delete
          </button>
        </div>
      </div>
      <TeamPopUp
        show={show}
        onCancel={() => setShow(false)}
        team={props.team}
      />
    </>
  );
}
