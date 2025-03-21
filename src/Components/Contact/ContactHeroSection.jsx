import React from "react";

const data = {
  miniHeading: "Contact Us",
  heading: "Let's Connect and Build Something Great Together",
  description:
    "Have questions or looking for enterprise-grade software solutions? Our team is here to help! With expertise in technology and innovation, we’re ready to collaborate and drive your business forward. Reach out today and let's discuss how we can work together.",
  img_path: "/Images/General/ContactUs.jpg",
};

export const ContactHeroSection = () => {
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
