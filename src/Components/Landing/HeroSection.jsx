import React, { useState, Component, useEffect } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (data?.img_path) {
      const img = new Image();
      img.src = data.img_path;
      img.onload = () => {
        setBgImage(data.img_path);
        setIsLoaded(true);
      };
    }
  }, [data?.img_path]);

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
      }}
    >
      {/* Blurred Placeholder (Low Quality) */}
      <LazyLoadImage
        src={data?.low_quality_img_path || data?.img_path} // Use a low-quality version if available
        effect="blur"
        alt={data?.name}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(90%)",
          transition: "opacity 0.5s ease-in-out",
          opacity: isLoaded ? 0 : 1, // Hide once high-quality loads
        }}
      />

      {/* High-Quality Background Image */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(90%)",
          transition: "opacity 0.5s ease-in-out",
          opacity: isLoaded ? 1 : 0, // Show when loaded
        }}
      />

      {/* Content */}
      <div className="content text-white text-center" style={{ width: "100%" }}>
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
