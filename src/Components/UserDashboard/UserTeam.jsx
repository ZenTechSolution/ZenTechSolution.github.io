import React, { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TbSchool } from "react-icons/tb";
import { GoBriefcase } from "react-icons/go";

import { FaCode } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaFlutter } from "react-icons/fa6";
import { FiDatabase } from "react-icons/fi";
import { GiArtificialHive } from "react-icons/gi";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { FiYoutube } from "react-icons/fi";

let clients = {
  education: [
    {
      name: "BsIt",
      from: "2019-01-01",
      to: "2021-01-01",
      type: "job",
      institute: "Punjab University Lahore",
      description: "Cgpa 3.54",
    },
    {
      name: "MsIt",
      from: "2022-01-01",
      to: "2024-01-01",
      type: "education",
      institute: "Punjab University Lahore",
      description: "Cgpa 3.54",
    },
    {
      name: "Ics",
      from: "2017-01-01",
      to: "2019-01-01",
      type: "education",
      institute: "Punjab University Lahore",
      description: "892/1100",
    },
    {
      name: "Web Dev",
      from: "2017-01-01",
      to: "2019-01-01",
      type: "job",
      institute: "Zentech",
      description:
        "Card sliders are an effective way to showcase related blocks of content, letting you put multiple pieces of content in front of a visitor quickly. Similar to image carousels, card sliders let you add headings, text, and call to action buttons to quickly navigate visitors to high-priority pages, or even quickly add a product to an online cart. Vev’s card slider offers a quick and easy way to set one up",
    },
  ],
  skills: [
    {
      name: "skill 1",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    },
    {
      name: "skill 1",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    },
    {
      name: "skill 1",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    },
    {
      name: "skill 1",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
    },
  ],
};

export const UserTeam = () => {
  const [data, setData] = useState(clients);

  return (
    <div className="TestmonialSection">
      {/* Journey Section */}
      <div className="testmonialContainer myTeamMember">
        <h3 className="sectionHeading">My Journey</h3>
        <SwiperSlideshow data={data.education} />
      </div>

      {/* Skills Section */}
      <div className="testmonialContainer mySkills myTeamMember">
        <h3 className="sectionHeading">My Skills</h3>
        <SwiperSlideshow data={data.skills} />
      </div>
    </div>
  );
};

const SwiperSlideshow = ({ data }) => {
  const swiperRef = useRef(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides(data);
  }, [data]);

  return (
    <div className="swiper-container">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={slides.length < 3 ? 1 : 3} // Show up to 3 slides
        loop={slides.length >= 3} // Enable looping if there are at least 3 slides
        autoplay={{ delay: 1000, disableOnInteraction: false }} // Auto change every 5 sec
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: slides.length < 3 ? 1 : 2, spaceBetween: 20 },
          1024: { slidesPerView: slides.length < 3 ? 1 : 3, spaceBetween: 20 },
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
    </div>
  );
};

const ClientCard = (props) => {
  return (
    <div className="client-card">
      {/* Image Section */}
      <div className="client-img-box userTeamBoxes d-flex align-items-center justify-content-center">
        {props.data.type === "education" ? (
          <TbSchool size={50} className="text-primary" />
        ) : (
          <GoBriefcase size={50} className="text-warning" />
        )}
      </div>

      {/* Details Section */}
      <div className="client-detail-box">
        <div className="client-info text-left">
          <h5 className="clientName textHeading font-weight-bold">
            {props.data.name}
          </h5>
          <p className="projectName h6 text-muted">
            {props.data.from} to {props.data.to}
          </p>
        </div>
        <p className="client-quote textDescription">{props.data.description}</p>
      </div>
    </div>
  );
};

function ServiceBox({ service }) {
  const [showFull, setShowFull] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const lineHeight = parseFloat(
        getComputedStyle(descriptionRef.current).lineHeight
      );
      const maxHeight = lineHeight * 4; // Max height for 4 lines
      setIsOverflowing(descriptionRef.current.scrollHeight > maxHeight);
    }
  }, [service.description]);

  return (
    <div
      className={`serviceBox p-3 rounded shadow-lg ${
        showFull ? "expanded" : ""
      }`}
      style={{ width: "350px" }}
    >
      {/* Service Image */}
      <div className="service-image text-center mb-3">
        <img
          src={service.img_path}
          alt="service logo"
          className="img-fluid rounded"
        />
      </div>

      {/* Service Name */}
      <h4 className="text-dark text-center">{service.name}</h4>

      {/* Service Description */}
      <div
        ref={descriptionRef}
        className={`text-dark textDescription ${
          showFull ? "expanded" : "collapsed"
        }`}
        style={{ overflow: "hidden", maxHeight: showFull ? "none" : "4.5rem" }}
      >
        {service.description}
      </div>

      {/* Show More / Less Button */}
      {isOverflowing && (
        <button
          className="btn profileBoxDescription btn-link text-primary mt-2"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
