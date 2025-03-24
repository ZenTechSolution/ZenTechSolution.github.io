import React, { useState, Component, useEffect } from "react";
import "./../../Css/DarkMode.css";
import "./../../Css/Landing.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import { Carousel } from "react-responsive-carousel";

let images = [
  {
    name: "Drive Tomorrow",
    description:
      "Empowering businesses with cutting-edge technology for a smarter future.",
    img_path: "/Images/General/HomePageImg.jpg",
  },
  {
    name: "Unlock Future Possibilities",
    description: "Innovating today to shape the digital landscape of tomorrow.",
    img_path: "/Images/General/heroSectionImg2.jpg",
  },
];

export const HeroImg = ({ data }) => {
  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    if (data?.img_path) {
      const img = new Image();
      img.src = data.img_path;
      img.onload = () => setBgImage(data.img_path);
    }
  }, [data?.img_path]);

  return (
    <div
      className="HeroSection ImgContainer container-fluid mt-2 "
      style={{
        height: "90vh",
        width: "100%",
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(90%)",
        transition: "background-image 0.5s ease-in-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div className="content text-white text-center" style={{ width: "100%" }}>
        <h2
          className="text-heading w-100"
          style={{ width: "100%", textAlign: "left" }}
        >
          {data?.name}
        </h2>
        <h4
          className="text-description"
          style={{ width: "100%", textAlign: "left" }}
        >
          {data?.description}
        </h4>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const [data] = useState(images);
  const [isMobile, setIsMobile] = useState(false);

  // Detect Mobile Screen
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      dynamicHeight={false}
      swipeable={!isMobile} // Disable swipe on mobile
    >
      {data.map((img, index) => (
        <HeroImg key={index} data={img} />
      ))}
    </Carousel>
  );
};
