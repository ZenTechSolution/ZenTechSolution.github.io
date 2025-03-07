import React from "react";
import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./../../Css/LandingPage.css";
import gsap from "gsap";

let sliderData = [
  {
    heading: "Web Devolpment",
    description:
      "Our web development services provide enterprise-grade and customized web development services tailored to meet the evolving demands of modern businesses. Whether you need a simple landing page or a complex web application, we have the expertise to deliver results that exceed expectations",
    image: "./Images/Images/slider-img-1.png",
  },
  {
    heading: "Mobile Devolpment",
    description:
      " Every app we build is engineered to drive measurable business outcomes. With expertise spanning cutting-edge native development, cross-platform solutions, and enterprise-grade systems, our engineers transform bold ideas into dynamic mobile experiences.",
    image: "./Images/Images/slider-img-2.png",
  },
  {
    heading: "Project Manage",
    description:
      "Our project management services ensure seamless planning, execution, and delivery of projects with precision and efficiency. We specialize in managing projects of all sizes, from small-scale initiatives to enterprise-level operations. With a structured approach, we streamline workflows, optimize resource allocation, and mitigate risks to ensure timely completion and exceptional results.",
    image: "./Images/Images/slider-img-3.png",
  },
];

export let HeroSection = () => {
  return (
    <div className="HeroSection relative">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        // style={{ height: "70vh" }}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SliderItem slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SVG Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20 fill-white"
        >
          <path
            d="M0,32L48,42.7C96,53,192,75,288,85.3C384,96,480,96,576,90.7C672,85,768,75,864,64C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

function SliderItem({ slide }) {
  return (
    <div className="sliderSlide container text-white text-left text-md-start py-4 d-flex">
      <div className="row align-items-center">
        {/* Left Text */}
        <div className="col-md-6">
          <h2 className="fw-bold display-5">{slide.heading}</h2>
          <p className="fs-5 mt-3 sectionDescription text-light">
            {slide.description}
          </p>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <SliderImg image={slide.image} />
        </div>
      </div>
    </div>
  );
}

export const SliderImg = ({ image }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      y: 15,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="imageBox flex justify-center items-center">
      <div ref={boxRef} className="rounded-lg overflow-hidden">
        <img
          className="sliderImg max-w-full h-auto rounded-lg "
          src={image}
          alt="Slider Image"
        />
      </div>
    </div>
  );
};
