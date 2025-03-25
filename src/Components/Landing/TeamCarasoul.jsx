import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./../../Css/DarkMode.css";
import "./../../Css/Landing.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const TeamBox = ({ member }) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (member?.img_path) {
      const img = new Image();
      img.src = member.img_path;
      img.onload = () => setImgSrc(member.img_path);
    }
  }, [member?.img_path]);

  function NavigateTeam() {
    navigate(`/team/${member.id}`);
  }

  return (
    <div
      className="p-4 shadow-md rounded-lg text-center cursor-pointer"
      onClick={NavigateTeam}
    >
      <LazyLoadImage
        src={imgSrc || "https://via.placeholder.com/150"} // Placeholder while loading
        alt={`${member.first_name} ${member.last_name}`}
        effect="blur"
        className="w-24 h-24 rounded-full mx-auto mb-2"
        style={{
          maxWidth: "100%",
          maxHeight: "350px",
          objectFit: "cover",
          borderRadius: "50%",
          transition: "opacity 0.5s ease-in-out",
          opacity: imgSrc ? 1 : 0.5, // Smooth transition effect
        }}
      />
      <h3 className="text-lg font-semibold">
        {member.first_name} {member.last_name}
      </h3>
    </div>
  );
};

export const TeamCarousel = () => {
  const sliderRef = useRef(null);
  let [data, setData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      let jsonData = localStorage.getItem("users");

      if (jsonData) {
        try {
          let teamObject = JSON.parse(jsonData);

          if (Array.isArray(teamObject)) {
            let extractedProfiles = teamObject.map((item) => item.profile);

            setData(extractedProfiles);
            console.log("Team Profiles:", extractedProfiles);
          } else {
            console.warn("Expected an array but got:", teamObject);
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        console.warn("No users found in localStorage.");
      }
    }, 1000);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {data ? (
        <div className=" col-11 m-auto p-4">
          {/* Header Section */}
          <p className=" text-primary fw-bold text-start">Team</p>

          <div className="d-flex justify-content-between items-center mb-4">
            <h2 className="serviceSectionHeading mb-3">Our Team</h2>
            <div className="d-flex space-x-2">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="team-carousel-btn btn p-2 bg-gray-200 rounded"
              >
                <p className="team-carousel-arrow">
                  <FaArrowLeft />
                </p>
                {/* <ChevronLeft size={24} /> */}
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="team-carousel-btn btn p-2 bg-gray-200 rounded"
              >
                <p className="team-carousel-arrow">
                  <FaArrowRight />
                </p>
                {/* <ChevronRight size={24} /> */}
              </button>
            </div>
          </div>

          {/* Carousel */}
          <Slider ref={sliderRef} {...settings}>
            {data.map((member) => (
              <TeamBox key={member.id} member={member} />
            ))}
          </Slider>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};
