import React from "react";
import { PrimaryBtn } from "./../General/General";
import { useNavigate } from "react-router-dom";

let data = {
  miniHeading: "About Us",
  heading: "Empowering Businesses, Inspiring Innovation",
  description:
    "we specialize in transforming businesses with enterprise-grade software solutions tailored to their needs. With a legacy of technical excellence, a global team of over 2,000 experts, and a passion for innovation, we help organizations thrive in an ever-evolving digital landscape.",
  img_path: "/Images/Services/AboutUsimg.jpg",
};

export const HeroPageAboutUs = () => {
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
          <div
            className="d-flex justify-content-start mt-3"
            style={{ width: "fit-content" }}
          >
            <PrimaryBtn
              name={"Get in Touch"}
              onClick={() => {
                navigate("/contact");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
