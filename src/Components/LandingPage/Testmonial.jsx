import React, { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const clients = [
  {
    img_path: "./Images/Images/UserImage.png",
    name: "LusDen",
    customer_name: "1122",
    customer_review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, com",

    project:
      "Project 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img_path: "./Images/Images/UserImage.png",
    name: "John Doe",
    project: "Sed do eiusmod",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat .",
    customer_name: "1122",
    customer_review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, com",
  },
  {
    img_path: "./Images/Images/UserImage.png",
    name: "Jane Smith",
    project: "Duis aute irure",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    customer_name: "1122",
    customer_review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, com",
  },
  {
    img_path: "./Images/Images/UserImage.png",
    name: "Alex Brown",
    project: "Excepteur sint",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    customer_name: "1122",
    customer_review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, com",
  },
];

export const Testmonial = () => {
  const [data, setData] = useState(clients);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/getProjects", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data.data || []);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, []);

  return (
    <div className="TestmonialSection">
      <div className="testmonialContainer">
        <h3 className="sectionHeading">Testimonial</h3>
        <SwiperSlideshow data={data} />
      </div>
    </div>
  );
};

const SwiperSlideshow = ({ data }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [slides, setSlides] = useState([]);

  // Update the slides when new data comes in from the parent component
  useEffect(() => {
    setSlides(data);
  }, [data]);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [slides]); // Update Swiper when slides change

  return (
    <div className="swiper-container">
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slides.length < 2 ? 1 : 2}
        loop={slides.length >= 2}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: slides.length < 2 ? 1 : 2, spaceBetween: 20 },
        }}
      >
        {slides.length > 0 ? (
          slides.map((client, index) => (
            <SwiperSlide key={index}>
              <ClientCard data={client} />
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No testimonials available.
          </p>
        )}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-nav">
        <button ref={prevRef} className="swiper-button prev">
          <IoIosArrowBack />
        </button>
        <button ref={nextRef} className="swiper-button next">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

const ClientCard = (props) => {
  return (
    <div className="client-card">
      {/* Image Section */}
      <div className="client-img-box">
        <img src={props.data.img_path} alt="client-img" />
      </div>

      {/* Details Section */}
      <div className="client-detail-box">
        <div className="client-id">
          <div className="client-info text-left">
            <h5 className="clentName textHeading">
              {props.data.customer_name}
            </h5>
            <div className="testmoniaProjectName div d-flex justify-content-center">
              <p className="projectName h6">{props.data.name}</p>
              <FaQuoteLeft className="quote-icon" />
            </div>
          </div>
        </div>
        <p className="client-quote textDescription">{props.data.description}</p>
      </div>
    </div>
  );
};
