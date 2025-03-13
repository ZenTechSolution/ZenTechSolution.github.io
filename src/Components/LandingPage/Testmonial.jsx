import React, { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { InfiniteScrollImgs } from "./../ProfilePage/InfiniteScroll";

const clients = [
  {
    img_path: "./Images/projects/eris.png",
    name: "Eris",
    customer_name: "Johnque Washington",
    customer_review:
      "Amazing work! The Eris app has completely transformed how we manage toll booth payments. The team was professional, delivered on time, and provided great support throughout the process. Highly recommended!",
    project: "Toll Booth Payment System",
    description:
      "Eris is a booth app used by toll plazas in the USA for seamless digital payments. It streamlines transactions for booth management, ensuring efficiency and accuracy.",
  },
  {
    img_path: "./Images/projects/milesMobile.png",
    name: "Miles",
    customer_name: "Johnque Washington",
    customer_review:
      "Brilliant job! The backend system works flawlessly, and integration with our existing apps was seamless. The team provided continuous updates and made sure everything was working perfectly. Five stars!",
    project: "Booth Management Web Backend",
    description:
      "Miles is a web-based backend system for Eris and Patreon Management, providing toll plaza management with real-time data, reporting, and operational control.",
  },
  {
    img_path: "./Images/projects/patreonManagment.png",
    name: "Patreon Management",
    customer_name: "Johnque Washington",
    customer_review:
      "Absolutely fantastic experience! The app was built exactly to our requirements, and the attention to detail was incredible. Smooth functionality and excellent communication from the team. Would definitely work with them again!",
    project: "Toll Booth Client Management",
    description:
      "Patreon Management is a toll booth client app that enables secure digital transactions, providing a smooth experience for booth clients across the USA.",
  },

  {
    img_path: "./Images/projects/schoolletCanteen.png",
    name: "Schoollet Canteen",
    customer_name: "Naif Al Harbi",
    customer_review:
      "The Schoollet Canteen Management system has streamlined our billing process, making transactions quick and hassle-free. The team delivered exactly what we needed with great attention to detail. Highly recommended!",
    project: "Canteen Billing & Digital Transactions",
    description:
      "Schoollet Canteen Management is a digital solution designed for canteens to manage billing and transactions efficiently. It enables seamless digital payments, automates invoicing, and simplifies financial tracking for both vendors and students.",
  },
  {
    img_path: "./Images/projects/schoollet.png",
    name: "Schoollet",
    customer_name: "Naif Al Harbi",
    customer_review:
      "Great work! The Schoollet app has made digital payments super easy for students and vendors. The developers were very responsive, and the app was delivered on time with excellent quality. Will definitely hire again!",
    project: "Canteen & Student Digital Transactions",
    description:
      "Schoollet is a digital payment app for students and canteens, enabling seamless transactions and credit-based payments in educational institutions.",
  },
];

export const Testmonial = () => {
  const [data, setData] = useState(clients);

  useEffect(() => {
    let cacheData = localStorage.getItem("projects");
    if (cacheData) {
      let formateData = JSON.parse(cacheData);
      let object = Object.values(formateData);
      let arr = [];
      object.map((item) => {
        arr.push(item.profile);
      });
      setData(arr);
    }
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/getProjects", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       setData(response.data.data || []);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching projects:", err);
  //     });
  // }, []);

  return (
    <div className="TestmonialSection">
      <div className="div my-4">
        <InfiniteScrollImgs data={data} />
      </div>
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
  useEffect(() => {
    setSlides(data);
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [slides]);

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
  const placeholderUrl = "/Images/Images/UserImage.png";

  return (
    <div className="client-card">
      <div
        className="client-img-box border border-dark rounded-circle"
        style={{ width: "100px", height: "100px" }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={props.data.img_path || placeholderUrl}
          alt="client-img"
        />
      </div>

      <div className="client-detail-box">
        <div className="client-id">
          <div className="client-info text-left">
            <h5
              className="clentName textHeading"
              style={{ width: "40%", margin: "auto" }}
            >
              {props.data.customer_name}
            </h5>
            <div className="testmoniaProjectName div d-flex justify-content-center">
              <p className="projectName h6">{props.data.name}</p>
              <FaQuoteLeft className="quote-icon" />
            </div>
          </div>
        </div>
        <p className="client-quote textDescription">
          {props.data.customer_review}
        </p>
      </div>
    </div>
  );
};
