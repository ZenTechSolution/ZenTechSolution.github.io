import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode } from "swiper/modules";
import Marquee from "react-fast-marquee";
import { ImgCarasoule } from "./ImgCarasoule";

export const MyProjects = ({ data }) => {
  return (
    <div className="HeroSection relative pb-5">
      <h2 className="text-light py-3">Projects</h2>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <SliderItem slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

function SliderItem({ slide }) {
  if (!slide) return null;

  return (
    <div className="sliderSlide container text-white py-4 d-flex">
      <div
        className="row align-items-center justify-content-between"
        style={{ width: "100%" }}
      >
        {/* Left Side (Text) */}
        <div className="col-md-6">
          <div className="ProjectimgBox mb-3">
            <img
              className="rounded-circle shadow border border-primary border-5"
              src={slide.profile.img_path || "https://via.placeholder.com/100"}
              alt="Project Logo"
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
          </div>

          <h2 className="fw-bold display-5">
            <a
              href={slide.profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              {slide.profile.name}
            </a>
          </h2>

          <p className="fs-5 mt-3 text-light">{slide.profile.description}</p>

          <div className="mt-4">
            <h5 className="fw-bold">{slide.profile.customer_name}</h5>
            <p className="mt-2 text-light">{slide.profile.customer_review}</p>
          </div>
        </div>

        {/* Right Side (Image Carousel) */}
        <div className="col-md-6 text-center">
          {slide.project_img && slide.project_img.length > 0 ? (
            <ImgCarasoule images={slide.project_img} key={slide.name} />
          ) : (
            <p className="text-light">No images available</p>
          )}
        </div>
      </div>
    </div>
  );
}
