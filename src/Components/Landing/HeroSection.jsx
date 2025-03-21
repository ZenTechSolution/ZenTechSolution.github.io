import React, { useState, Component } from "react";
import "./../../Css/DarkMode.css";
import "./../../Css/Landing.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import { Carousel } from "react-responsive-carousel";

let images = [
  {
    name: "Drive Tomorrow",
    description: "We help companies redefine the future through technology",
    img_path: "/Images/General/HomePageImg.jpg",
  },
  {
    name: "Drive Tomorrow's Possibilities",
    description: "We help companies redefine the future through technology",
    img_path: "/Images/General/HomePageImg.jpg",
  },
];

export const HeroImg = ({ data }) => {
  return (
    <div
      className="HeroSection ImgContainer container-fluid mt-2 rounded"
      style={{
        height: "90vh",
        width: "100%",
        backgroundImage: `url(${data?.img_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(90%)",
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

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      dynamicHeight={false}
    >
      {data.map((img, index) => (
        <HeroImg key={index} data={img} />
      ))}
    </Carousel>
  );
};
