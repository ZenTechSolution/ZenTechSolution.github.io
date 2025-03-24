import React from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryBtn } from "./../General/General";

let data = {
  miniHeading: "Careers",
  heading: "Join Our Team, Shape the Future",
  description:
    "Be part of a dynamic team driving innovation and excellence. We foster a culture of creativity, collaboration, and continuous growth.Explore exciting opportunities to develop your skills, work on impactful projects, and contribute to a thriving environment.",
  img_path: "/Images/General/careersPage.jpg",
};

export const CareerHero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-end justify-content-center position-relative"
      style={{
        width: "100vw",
        height: "90vh",
        background: `url(${data.img_path}) center / cover no-repeat`,
      }}
    >
      <div
        className="glass-box text-white p-4 rounded"
        style={{
          width: "90%",
          minWidth: "280px",
          backdropFilter: "blur(15px)",
          background: "rgba(1, 1, 1, 0.28)",
          border: "1px solid rgba(159, 147, 147, 0.3)",
          borderRadius: "12px",
          textAlign: "center",
          padding: "20px",
          marginBottom: "5vh",
        }}
      >
        <div className="w-100 text-start">
          <p
            className="mt-2 fs-6"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontWeight: "bold",
            }}
          >
            {data.miniHeading}
          </p>
          <h2 className="fw-bold fs-1">{data.heading}</h2>
          <p className="fs-5">{data.description}</p>
        </div>
      </div>
    </div>
  );
};
