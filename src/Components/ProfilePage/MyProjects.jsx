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

export const MyProjects = ({ data }) => {
  return (
    <div className="HeroSection relative pb-5">
      {/* <SliderItem slide={data[0]} /> */}
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
  if (!slide) return null; // Prevent errors if slide is undefined

  return (
    <div className="sliderSlide container text-white text-left text-md-start py-4 d-flex">
      <div
        className="row align-items-center justify-content-between"
        style={{ width: "100%" }}
      >
        {/* Left Text Section */}
        <div className="col-md-6" style={{ width: "500px" }}>
          {/* Project Image */}
          <div
            className="ProjectimgBox mb-3"
            style={{ width: "100px", height: "100px" }}
          >
            <img
              className="rounded-circle shadow border border-primary border-5"
              src={slide.img_path || "https://via.placeholder.com/100"}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
              alt="Project Logo"
            />
          </div>

          {/* Project Name */}
          <h2 className="fw-bold display-5">
            <a
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              {slide.name}
            </a>
          </h2>

          {/* Project Description */}
          <p className="fs-5 mt-3 text-light">{slide.description}</p>

          {/* Customer Review */}
          <div className="mt-4">
            <h5 className="fw-bold">{slide.customer_name}</h5>
            <p className="mt-2 text-light">{slide.customer_review}</p>
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="col-md-6 text-center">
          {slide.images && slide.images.length > 0 ? (
            <SliderImg images={slide.images} />
          ) : (
            <p className="text-light">No images available</p>
          )}
        </div>
      </div>
    </div>
  );
}

const SliderImg = ({ images }) => {
  return (
    <div className="mt-3">
      <Marquee
        speed={300}
        gradient={true}
        gradientWidth={200}
        gradientColor={"white"}
        pauseOnHover={false}
        pauseOnClick={false}
        play={true}
      >
        <div className="d-flex align-items-end justify-content-around">
          {images.map((item, index) => (
            <div key={index} className="me-3">
              <img
                className="marqueImg"
                style={{
                  backgroundColor: "#fff",
                  maxHeight: "300px", // Ensures images stay within max height
                  maxWidth: "250px", // Keeps images responsive
                  objectFit: "contain", // Prevents cropping
                  display: "block",
                  pointerEvents: "none", // Disables any interaction on images
                }}
                src={item.img_path}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
