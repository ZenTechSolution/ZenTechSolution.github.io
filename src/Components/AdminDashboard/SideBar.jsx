import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../Css/sidebar.css";
import { RiTeamLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { RiCustomerServiceLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

export const SideBar = (props) => {
  function ChangeContent(page) {
    props.ChangePage(page);
  }
  return (
    <div className="sideBarBox">
      <div className="logoImage">Logo</div>
      <div className="sideBarContent">
        <div className="sideBarItem" onClick={() => ChangeContent("Projects")}>
          <FaCode /> Projects
        </div>
        <div className="sideBarItem" onClick={() => ChangeContent("Team")}>
          <RiTeamLine /> Team
        </div>
        <div className="sideBarItem" onClick={() => ChangeContent("Services")}>
          {" "}
          <VscTools /> Services
        </div>
        <div className="sideBarItem" onClick={() => ChangeContent("Support")}>
          <RiCustomerServiceLine /> Support
        </div>
        <div className="sideBarItem" onClick={() => ChangeContent("Profile")}>
          <FaRegUser /> Profile
        </div>
        <div className="sideBarItem logout">
          <IoMdLogOut /> Logout
        </div>
      </div>
    </div>
  );
};
