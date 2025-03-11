import React, { useState } from "react";
import "./../../Css/ContentPage.css";
import { Projects } from "./Projects";
import { Team } from "./Team";
import { Support } from "./Support";
import { Profile } from "./../Profile";
import { ProjectPage } from "./../AdminDashboard/ProjectPage";
import { Services } from "./Services";
import { UserTeam } from "./../UserDashboard/UserTeam";

export const Content = (props) => {
  return (
    <div className="ContentDataSection">
      {/* {props.page === "Team" && <Team />} */}
      {props.page === "Team" && <Team />}
      {props.page === "Support" && <Support />}
      {props.page === "Profile" && <Profile />}
      {props.page === "Projects" && <Projects />}
      {props.page === "Services" && <Services />}
    </div>
  );
};

// export function NavBar(props) {
//   return (
//     <div className="div ContentNavBar d-flex justify-content-between">
//       <h2 className="navHeading align-self-center mx-2">{props.page}</h2>
//       <div className="imgBox align-self-center">
//         <img
//           className="profile-Img"
//           src="/Images/Images/user-avatar.png"
//           alt="profile Img"
//         />
//       </div>
//     </div>
//   );
// }
