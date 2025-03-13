import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import Marquee from "react-fast-marquee";
import { FaBeer } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const InfiniteScroll = (props) => {
  return (
    <>
      <div className="mt-3 bg-primary ">
        <Marquee speed={300} gradient={true} pauseOnHover={false}>
          <div className="d-flex justify-content-around w-100">
            {props.data.map((item, index) => (
              <>
                <span
                  key={index}
                  className="d-inline-block me-2 py-2 text-light h6"
                >
                  {item.name}
                </span>
                <span className="me-2 py-2">
                  <GiStarFormation style={{ scale: 2, color: "#fff" }} />
                </span>
              </>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export const InfiniteScrollImgs = ({ data }) => {
  const placeholderUrl = "/Images/Images/UserImage.png";
  const navigate = useNavigate();

  return (
    <div className="mt-3 bg-primary">
      <Marquee speed={200} gradient={true} pauseOnHover={false}>
        <div className="d-flex justify-content-around w-100">
          {data.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center me-3 justify-content-around col-2"
              onClick={() => navigate(`/projects/${item.id}`)}
            >
              {/* Project Image & Name */}

              <span
                className="d-inline-block me-2 py-2 text-light h6"
                style={{ cursor: "pointer" }}
              >
                <img
                  className="rounded-circle shadow"
                  src={item.img_path || placeholderUrl}
                  alt="Project Logo"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    filter: "grayscale(100%)",
                  }}
                />
                <p className="m-0 mt-2">{item.name}</p>
              </span>

              <span className="me-2 py-2 my-auto">
                <GiStarFormation style={{ scale: 2, color: "#fff" }} />
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
