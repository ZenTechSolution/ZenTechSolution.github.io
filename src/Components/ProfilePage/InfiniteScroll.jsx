import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import Marquee from "react-fast-marquee";
import { FaBeer } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";

export const InfiniteScroll = (props) => {
  console.log(props.data);

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
