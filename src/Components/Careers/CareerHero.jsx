import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryBtn } from "./../General/General";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

let careerData = {
  miniHeading: "Careers",
  heading: "Join Our Team, Shape the Future",
  description:
    "Be part of a dynamic team driving innovation and excellence. We foster a culture of creativity, collaboration, and continuous growth.Explore exciting opportunities to develop your skills, work on impactful projects, and contribute to a thriving environment.",
  img_path: "/Images/General/careersPage.jpg",
};

export const CareerHero = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(careerData);
  }, [careerData]);

  return (
    <div
      className="d-flex align-items-end justify-content-center position-relative"
      style={{
        width: "100vw",
        height: "90vh",
        overflow: "hidden",
      }}
    >
      {/* Lazy Load Background Image - Positioned Absolutely */}
      <LazyLoadImage
        src={data?.img_path}
        effect="opacity" // Smooth fade-in effect
        alt="Project Background"
        className="project-hero-bg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0, // Background image stays behind the content
        }}
      />

      {/* Content - Above Background Image */}
      <div
        className="glass-box text-white p-4 rounded"
        style={{
          width: "90%",
          maxWidth: "90%",
          minWidth: "280px",
          backdropFilter: "blur(10px)",
          background: "rgba(0, 0, 0, 0.28)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "12px",
          textAlign: "center",
          padding: "20px",
          marginBottom: "5vh",
          zIndex: 1, // Ensures content is above the background image
          position: "absolute",
        }}
      >
        <div className="w-100">
          <h2 className="fw-bold fs-6 text-start">{data.miniHeading}</h2>
          <p
            className="mt-2 fs-2 fw-bold text-start"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.name}
          </p>
          <p
            className="mt-2 fs-2 fw-bold text-start"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.heading}
          </p>
          <p
            className="mt-0 fs-4 text-start"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};
