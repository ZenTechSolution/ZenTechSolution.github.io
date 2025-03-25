import React, { useEffect, useState } from "react";

let imgArr = [
  "/Images/General/ProjectImage.jpg",
  "/Images/Projects/project1.jpg",
  "/Images/Projects/project2.jpg",
  "/Images/Projects/project3.jpg",
  "/Images/Projects/project4.jpg",
  "/Images/Projects/project5.jpg",
];

export const ProjectHeroPage = ({ profile, tags }) => {
  const [profiles, setProfile] = useState(profile || {});
  const [tag, setTags] = useState(tags || []);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    setProfile(profile);
    setTags(tags);
  }, [profile, tags]);

  useEffect(() => {
    const randomImg = imgArr[Math.floor(Math.random() * imgArr.length)];
    setBgImage(randomImg);
  }, []);

  return (
    <div
      className="d-flex align-items-end justify-content-center position-relative"
      style={{
        width: "100vw",
        height: "90vh",
        background: `url(${bgImage}) center / cover no-repeat`,
      }}
    >
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
        }}
      >
        <div className="w-100">
          <h2 className="fw-bold fs-6 text-start">Project</h2>
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
            {profiles.name || "Loading..."}
          </p>
          <div className="mt-3 ProjectTechDivs" style={{ width: "fitContent" }}>
            {tag.slice(0, 5).map((t, index) => (
              <span key={index} className="badge bg-secondary me-1">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
