import React, { use, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaSquareXTwitter,
  FaSquareGithub,
  FaLinkedin,
} from "react-icons/fa6";

export const TeamSection = (props) => {
  const [team, setTeam] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    setTeam([...props.team, ...props.team]);
  }, []);

  function handleTeamClick(member) {
    console.log(`/profile/${member.id}`);
    navigate(`/profile/${member.id}`, { state: { team: member } });
  }

  return (
    <div className="teamSection py-10">
      <div className="div teamSectionContent my-auto">
        <h2 className="text-center sectionHeading text-2xl font-bold mb-4 text-light sectionHeading">
          Project <span>Team</span>
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={team.length < 3 ? 1 : 3} // Adjust based on team size
          loop={team.length >= 3} // Enable loop only if enough slides
          centeredSlides={team.length >= 3} // Avoid centering with few members
          spaceBetween={10}
          loopFillGroupWithBlank={true} // Prevent issues with loop
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            480: { slidesPerView: team.length < 2 ? 1 : 2, spaceBetween: 30 },
            640: { slidesPerView: team.length < 3 ? 2 : 3, spaceBetween: 40 },
          }}
          className="w-full max-w-4xl mx-auto"
        >
          {team.map((member) => (
            <SwiperSlide key={member.id} style={{ margin: "auto" }}>
              <div onClick={() => handleTeamClick(member)}>
                <SliderBox member={member} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const SliderBox = ({ member }) => {
  return (
    <div className="col-lg-3 col-sm-6 slide-card text-light my-2">
      <div className="box p-3 py-4">
        {/* Profile Image */}
        <div className="teamimg-box">
          <img src={member.img_path} className="img1" alt={member.name} />
        </div>

        {/* Name & Role */}
        <div className="detail-box text-center">
          <h5 className="my-3 textHeading text-light">{member.name}</h5>
          <p>{member.role}</p>
        </div>

        {/* Skills Section */}
        <DescriptionBox team={member.description} />
        {/* Social Links */}
        <div className="social_box landingPage d-flex justify-content-center mt-3 col-6 d-flex justify-content-around m-auto">
          {member.facebook && (
            <a
              className="teamSocialLinks"
              href={member.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          )}
          {member.twitter && (
            <a
              className="teamSocialLinks"
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </a>
          )}
          {member.github && (
            <a
              className="teamSocialLinks"
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub />
            </a>
          )}
          {member.linkedin && (
            <a
              className="teamSocialLinks"
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const DescriptionBox = (props) => {
  return (
    <div className="skill-box">
      <div className="div LandingTeamDescriptionBox">
        <p>{props.team}</p>
      </div>
    </div>
  );
};
