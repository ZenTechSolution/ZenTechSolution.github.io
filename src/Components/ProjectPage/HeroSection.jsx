import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

export let HeroSection = (props) => {
  let [data, setData] = useState({});
  let [images, setImages] = useState([]);

  useEffect(() => {
    setData(props.data);
    setImages(props.images);
  }, [props.data]);

  return (
    <>
      <div className="HeroSection relative">
        <div
          className="div bg-light m-3 miniLogoPages projects"
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            position: "absolute",
            top: "0%",
            left: "0%",
          }}
        >
          <img
            className="text-light"
            src="/Images/Icons/zentech.png"
            alt="ZentechLogo"
            style={{ width: "100%", height: "100%", scale: "70%" }}
          />
        </div>

        <SliderItem data={data} images={images} />

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

      <UserReview data={data} />
    </>
  );
};

function SliderItem({ data, images }) {
  return (
    <div
      className="container text-white text-left text-md-start py-4 d-flex miniLogoPagesContainer"
      style={{
        width: "100%",
        margin: "auto",
        minHeight: "80vh",
      }}
    >
      <div className="row align-items-center w-100">
        {/* Left Text */}
        <div className="col-md-4 col-12 text-center text-md-start">
          <img
            className="mb-3"
            src={data.img_path}
            style={{ width: "120px", height: "120px", borderRadius: "50%" }}
            alt=""
          />
          <h2 className="fw-bold display-5">{data.name}</h2>
          <p className="fs-5 mt-3 sectionDescription text-light">
            {data.description}
          </p>
        </div>

        {/* Right Image */}
        <div className="col-md-7 col-12">
          <SwiperSlideshow data={images} />
        </div>
      </div>
    </div>
  );
}

const SwiperSlideshow = ({ data }) => {
  return (
    <div
      className="swiper-container myProject"
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        backgroundColor="#fff !important"
        slidesPerView={1} // Show only one image at a time
        loop={data.length > 1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        style={{ borderRadius: "10px" }}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <SwiperSlide key={index} className="custom-slide">
              <div
                style={{
                  width: "100%",
                  height: "450px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  borderRadius: "10px",
                }}
              >
                <ImageSlide data={item} />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-gray-500">No data available.</p>
        )}
      </Swiper>
    </div>
  );
};

const ImageSlide = ({ data }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: "10px",
        }}
        src={data.img_path}
        alt="Project Image"
      />
    </div>
  );
};

function UserReview(props) {
  return (
    <div
      className="col-10 m-auto p-5 my-5"
      style={{
        boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.1)",
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <h2>{props.data.customer_name}</h2>
      <p style={{ fontSize: "1.2rem", fontStyle: "italic", marginTop: "8px" }}>
        " {props.data.customer_review} "
      </p>
    </div>
  );
}
