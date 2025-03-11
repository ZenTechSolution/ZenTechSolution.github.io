import React from "react";
import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import { useSpring, animated } from "react-spring";

// export const ImgCarasoule = ({
//   images,
//   width,
//   height,
//   margin,
//   offset,
//   showArrows,
// }) => {
//   const [goToSlide, setGoToSlide] = useState(null);
//   const [offsetRadius, setOffsetRadius] = useState(1);
//   const [showNavigation, setShowNavigation] = useState(false);

//   useEffect(() => {
//     setOffsetRadius(offset);
//     setShowNavigation(showArrows);
//   }, [offset, showArrows]);

//   const cards = images.map((image, index) => ({
//     key: uuidv4(),
//     content: (
//       <Card imagen={image.img_path} onClick={() => setGoToSlide(index)} />
//     ),
//   }));

//   return (
//     <div className="carousel-container">
//       <Carousel
//         slides={cards}
//         goToSlide={goToSlide}
//         offsetRadius={offsetRadius}
//         showNavigation={showNavigation}
//         animationConfig={config.gentle}
//       />
//     </div>
//   );
// };

// const Card = ({ imagen, onClick }) => {
//   return (
//     <>
//       <animated.div className="card-container" onClick={onClick}>
//         <img src={imagen} alt="Carousel Item" />
//       </animated.div>
//     </>
//   );
// };

const OpenImg = ({ img, show, onCancel }) => {
  if (!show) return null; // Don't render if show is false

  return (
    <div className="overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={onCancel}>
          ✖
        </button>
        <img src={img} alt="Popup Preview" />
      </div>
    </div>
  );
};

export const ImgCarasoule = ({
  images = [],
  offset = 1,
  showArrows = false,
}) => {
  const [goToSlide, setGoToSlide] = useState(0); // Default to first image
  const [offsetRadius, setOffsetRadius] = useState(offset);
  const [showNavigation, setShowNavigation] = useState(showArrows);

  useEffect(() => {
    setOffsetRadius(offset);
    setShowNavigation(showArrows);
  }, [offset, showArrows]);

  // Each slide should have a unique key to prevent state persistence
  const cards = images.map((image, index) => ({
    key: uuidv4(),
    content: (
      <Card
        imagen={image.img_path}
        onClick={() => setGoToSlide(index)}
        isCenter={index === goToSlide}
      />
    ),
  }));

  return (
    <div className="carousel-container">
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={config.gentle}
      />
    </div>
  );
};

const Card = ({ imagen, onClick, isCenter }) => {
  return (
    <div
      className={`card-container ${isCenter ? "center-card" : ""}`}
      onClick={onClick}
    >
      <img src={imagen} alt="Carousel Item" />
    </div>
  );
};
