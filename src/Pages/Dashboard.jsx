import React, { useState } from "react";
import { SideBar } from "../Components/AdminDashboard/SideBar";
import { Content } from "../Components/AdminDashboard/Content";
import { useGlobalContext } from "./../App";

export const Dashboard = () => {
  let [page, setPage] = useState("Projects");

  const { url, token } = useGlobalContext();

  function ChangePage(data) {
    setPage(data);
  }

  return (
    <div className="d-flex mainPageDashboard">
      <div className="div  col-2 h-100 sidebarSection ">
        <SideBar ChangePage={ChangePage} />
      </div>
      <div className="div  col-12 col-md-10 contentBoxSection ">
        <Content page={page} />
      </div>
    </div>
  );
};
