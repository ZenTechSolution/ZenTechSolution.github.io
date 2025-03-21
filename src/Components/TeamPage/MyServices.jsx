import React, { useEffect, useState } from "react";
import { IoLogoJavascript } from "react-icons/io5";

import {
  DiMysql,
  DiReact,
  DiLaravel,
  DiBootstrap,
  DiJava,
  DiPython,
  DiNodejs,
  DiCss3,
} from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { TbBrandKotlin, TbBrandAzure } from "react-icons/tb";
import {
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiFlask,
} from "react-icons/si";
import { FaWordpress, FaPhp, FaCode } from "react-icons/fa";
import { FaFlutter, FaHtml5 } from "react-icons/fa6";

export const MyServices = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.skills) {
      const formattedSkills = props.skills.map((skill) =>
        getTechData(skill.name.toLowerCase())
      );
      setData(formattedSkills);
    }
  }, [props.skills]);

  return (
    <div
      className="col-12 mx-auto text-center my-5 pb-4"
      style={{
        background:
          "url(/Images/General/blueBox-2.png) right bottom / contain no-repeat ",
      }}
    >
      <h2 className="serviceSectionHeading mb-5 text-center">
        Familiar Technologies
      </h2>
      <p className="mb-5">
        Equipped with the latest tools, we will deliver impactful solutions
        designed to grow your business.
      </p>
      <TechFlexBox skills={data} />
    </div>
  );
};

const TechFlexBox = ({ skills }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {skills.map((tech) => (
        <TechBox key={tech.id} data={tech} />
      ))}
    </div>
  );
};

export const getTechData = (tech) => {
  const techMap = {
    flutter: { name: "Flutter", icon: FaFlutter, color: "#02569B" },
    php: { name: "PHP", icon: FaPhp, color: "#777BB4" },
    laravel: { name: "Laravel", icon: DiLaravel, color: "#FF2D20" },
    firebase: { name: "Firebase", icon: SiFirebase, color: "#f78c00" },
    sql: { name: "MySQL", icon: DiMysql, color: "#00758F" },
    react: { name: "React", icon: DiReact, color: "#61DAFB" },
    javascript: { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    typescript: { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    nodejs: { name: "Node.js", icon: DiNodejs, color: "#339933" },
    python: { name: "Python", icon: DiPython, color: "#f7bb07" },
    flask: { name: "Flask", icon: SiFlask, color: "#e83a10" },
    aws: { name: "AWS", icon: FaAws, color: "#FF9900" },
    kotlin: { name: "Kotlin", icon: TbBrandKotlin, color: "#ae22e3" },
    azure: { name: "Azure", icon: TbBrandAzure, color: "#0078D4" },
    wordpress: { name: "WordPress", icon: FaWordpress, color: "#21759B" },
    bootstrap: { name: "Bootstrap", icon: DiBootstrap, color: "#7952B3" },
    css: { name: "CSS", icon: DiCss3, color: "#006bb7" },
    java: { name: "Java", icon: DiJava, color: "#007396" },
    html: { name: "Html", icon: FaHtml5, color: "#f76a00" },
  };

  return techMap[tech] || { name: tech, icon: FaCode, color: "#36454F" }; // Charcoal color for unknown tech
};

function TechBox({ data }) {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center bg-white rounded p-3 col-3 col-md-2"
      style={{ textAlign: "center" }}
    >
      {/* Render React Icons if available, otherwise use SVG */}
      {data.icon ? (
        <data.icon size={60} color={data.color} />
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
}
