import React, { useState } from "react";
import {
  DiMysql,
  DiReact,
  DiLaravel,
  DiBootstrap,
  DiJava,
  DiPython,
  DiNodejs,
} from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { TbBrandKotlin, TbBrandAzure } from "react-icons/tb";
import {
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiFlask,
} from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";

const tech = [
  { id: 1, name: "AWS", Icon: FaAws, color: "#FF9900" },
  { id: 3, name: "Flutter", Icon: FaFlutter, color: "#02569B" },
  { id: 5, name: "Kotlin", Icon: TbBrandKotlin, color: "#A97BFF" },
  { id: 6, name: "Java", Icon: DiJava, color: "#007396" },
  { id: 9, name: "Azure", Icon: TbBrandAzure, color: "#0078D4" },
  { id: 8, name: "Python", Icon: DiPython, color: "#ffd242" },
  { id: 4, name: "Flask", Icon: SiFlask, color: "#FF2D20" },
  { id: 11, name: "Laravel", Icon: DiLaravel, color: "#FF2D20" },
  { id: 2, name: "MySQL", Icon: DiMysql, color: "#00758F" },
  { id: 7, name: "Firebase", Icon: SiFirebase, color: "#dd2c00" },
  { id: 10, name: "Node Js", Icon: DiNodejs, color: "#68A063" },
  { id: 12, name: "React", Icon: DiReact, color: "#61DBFB" },
  { id: 14, name: "TypeScript", Icon: SiTypescript, color: "#02569B" },
  { id: 13, name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { id: 16, name: "Bootstrap", Icon: DiBootstrap, color: "#563D7C" },
  { id: 17, name: "WordPress", Icon: FaWordpress, color: "#007298" },
  { id: 15, name: "Css", Icon: DiCss3, color: "#007298" },
];

export const TechStack = () => {
  return (
    <div
      className="col-12 mx-auto text-center my-5 pb-4"
      style={{
        background:
          "url(/Images/General/blueBox-2.png) right bottom / contain no-repeat ",
      }}
    >
      <p className=" text-primary fw-bold text-center">Technologies</p>

      <h2 className="serviceSectionHeading mb-5 text-center">Our Tech Stack</h2>
      <p className="mb-5">
        Equipped with the latest tools, our teams deliver impactful solutions
        designed to grow your business.
      </p>
      <TechFlexBox />
    </div>
  );
};

const TechFlexBox = () => {
  const [data] = useState(tech);

  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {data.map((tech) => (
        <TechBox key={tech.id} data={tech} />
      ))}
    </div>
  );
};

const TechBox = ({ data }) => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center bg-white rounded p-3 col-3 col-md-2"
      style={{ textAlign: "center" }}
    >
      {/* Render React Icons if available, otherwise use SVG */}
      {data.Icon ? (
        <data.Icon size={60} color={data.color} />
      ) : (
        <svg width="60" height="60" viewBox="0 0 24 24" fill={data.color}>
          <path d={data.svg} />
        </svg>
      )}
      <p className="mt-2 fw-bold" style={{ color: data.color }}>
        {data.name}
      </p>
    </div>
  );
};
