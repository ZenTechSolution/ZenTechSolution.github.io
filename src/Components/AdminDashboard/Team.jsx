import React, { useEffect, useState } from "react";
import { NavigationBar } from "./DashboardData";
import { TeamPopUp } from "./../TeamPopUp";
import { UserTeam } from "../UserDashboard/UserTeam";
import axios from "axios";

let data = [
  {
    id: 1,
    first_name: "First",
    last_name: "Last",
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
  const [show, setShow] = useState(false);
  const [team, setTeam] = useState(data);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [navTitle, setNavTitle] = useState("Team");
  const [openTeam, setOpenTeam] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/getTeams", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTeam(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.error("Error fetching teams:", err);
      });
  }, []);

  function Addbtn() {
    setShow(true);
  }

  function AddTeam(data) {
    setTeam([data, ...team]);
    console.log();
  }

  function handleTeamClick(selectedMember) {
    setSelectedTeam(selectedMember);
    setNavTitle(`${selectedMember.first_name} ${selectedMember.last_name}`);
    setOpenTeam(true); // Open the UserTeam section
  }

  function handleOutsideClick() {
    setSelectedTeam(null);
    setNavTitle("Team");
    setOpenTeam(false); // Close the UserTeam section
  }

  return (
    <>
      <NavigationBar heading={navTitle} Addbtn={Addbtn} />

      {/* Click outside UserTeam to show teamSectionBox again */}
      <div>
        {!openTeam && ( // Hide team list when UserTeam is open
          <div className="teamSectionBox mt-4">
            {team.map((member) => (
              <TeamBox
                key={member.id}
                team={member}
                onClick={() => handleTeamClick(member)}
              />
            ))}
          </div>
        )}

        {/* Show UserTeam when openTeam is true */}
        {openTeam && <UserTeam show={openTeam} data={selectedTeam} />}
      </div>

      {/* Pass selectedTeam to popup when UserTeam is open */}
      <TeamPopUp
        show={show}
        onCancel={() => setShow(false)}
        team={selectedTeam}
        update={AddTeam}
      />
    </>
  );
};

// ///////////////////////////////////////////////////////////////
function TeamBox({ team, onClick }) {
  function deleteTeam(e) {
    e.stopPropagation();
    console.log("Delete team:", team.id);
  }

  return (
    <>
      <div
        className="TeamCard d-flex"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <div className="teamLeftSection col-2">
          <div className="TeamImgBox">
            <img src={team.img_path} alt={team.name} />
          </div>
          <h3 className="teamName mt-1 m-auto">
            {team.first_name + " " + team.last_name}
          </h3>
          <p className="teamRole mt-1 m-auto">{team.role}</p>
        </div>
        <div className="teamCardText">
          <p className="teamDescription">{team.description}</p>
          <button
            className="btn btn-outline-danger my-2 w-100"
            onClick={deleteTeam}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
