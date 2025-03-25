import React, { useState, Component, useEffect } from "react";
import "./../../Css/DarkMode.css";
import "./../../Css/Landing.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import { Carousel } from "react-responsive-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="HeroSection ImgContainer container-fluid mt-2"
      style={{
        height: "90vh",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        overflow: "hidden",
      }}
    >
      <LazyLoadImage
        src={data?.img_path}
        effect="opacity"
        alt={data?.name}
        className="hero-img"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(90%)",
          transition: "opacity 0.5s ease-in-out",
          zIndex: 1, // Ensures text is above it
        }}
        afterLoad={() => setIsLoaded(true)} // Mark image as loaded
      />

      <div
        className="content text-white text-center align-self-end"
        style={{
          marginBottom: "100px",
          width: "100%",
          position: "absolute",
          zIndex: 2, // Keeps text above image
          padding: "20px",
        }}
      >
        <h2 className="text-heading w-100" style={{ textAlign: "left" }}>
          {data?.name}
        </h2>
        <h4 className="text-description" style={{ textAlign: "left" }}>
          {data?.description}
        </h4>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const [data] = useState(images);
  const [isMobile, setIsMobile] = useState(false);
  let touchStartY = 0;
  let touchStartX = 0;

  // Detect Mobile Screen
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Handle touch events to allow vertical scroll
  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchEndY = e.touches[0].clientY;
    const touchEndX = e.touches[0].clientX;

    const deltaY = Math.abs(touchEndY - touchStartY);
    const deltaX = Math.abs(touchEndX - touchStartX);

    // If the movement is mostly vertical, let the page scroll
    if (deltaY > deltaX) {
      e.stopPropagation(); // Allow vertical scrolling
    } else {
      e.preventDefault(); // Prevent horizontal swipe
    }
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      dynamicHeight={false}
      swipeable={false} // Disable swipe completely
      emulateTouch={false} // Disable touch gestures
      preventScrollOnSwipe={true}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {data.map((img, index) => (
        <HeroImg key={index} data={img} />
      ))}
    </Carousel>
  );
};
