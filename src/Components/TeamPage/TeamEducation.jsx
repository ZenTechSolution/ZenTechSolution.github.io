import React, { useEffect, useState } from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import { LuGraduationCap } from "react-icons/lu";

export const TeamEducation = (props) => {
  let [data, setData] = useState([]);
  useEffect(() => {
    setData(props.education);
  }, []);
  return (
    <div className="col-11 m-auto">
      <div className="row ">
        <p className=" text-primary fw-bold">Experience</p>
        <h2 className="serviceSectionHeading mb-3">My Journey</h2>
        {data.map((industry, index) => (
          <IndustryBox key={index} industry={industry} />
        ))}
      </div>
    </div>
  );
};

function IndustryBox({ industry }) {
  return (
    <div className="col-md-4 d-flex p-0">
      <div
        className="p-3 border w-100 d-flex flex-column"
        style={{
          minHeight: "300px",
          alignItems: "flex-start", // Align items to top-left
          textAlign: "left",
        }}
      >
        <div className="div IndustriesImgIcon  p-3 rounded rounded-4 mb-3">
          {industry.type == "education" ? (
            <LuGraduationCap size={40} color={"#00a6ed"} />
          ) : (
            <HiOutlineBriefcase size={40} color={"#f3ca7c"} />
          )}
        </div>
        <div className="div d-flex gap-2">
          <h3 className="mb-2">{industry.name} </h3>
          <p className="align-self-end mb-2">
            from {industry.from} to {industry.to}{" "}
          </p>
        </div>
        <p
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 5, // Limit to 5 lines
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          ({industry.institute} )
        </p>
        <p
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 5, // Limit to 5 lines
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {industry.description}
        </p>
      </div>
    </div>
  );
}
