import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
// import { FaFacebook } from "react-icons/fa";
import {
  FaFacebook,
  FaSquareXTwitter,
  FaSquareGithub,
  FaLinkedin,
} from "react-icons/fa6";

const teamObj = [
  {
    id: "1",
    name: "Adil Sehr",
    role: "Founder & Lead Mobile Developer",
    img_path: "./Images/Images/UserImage.png",
    skills: [
      { name: "Mobile App Development" },
      { name: "Firebase" },
      { name: "Full-Stack Development" },
    ],
    description:
      "I am  founder of Zentech Solutions, has been developing mobile apps since 2014. With expertise in various modern technologies, I leads the team in crafting cutting-edge digital solutions with a focus on efficiency and innovation.",
  },
  {
    id: "2",
    name: "Saad Shafique",
    role: "Senior Mobile App Developer",
    img_path: "./Images/Images/UserImage.png",
    skills: [
      { name: "Flutter" },
      { name: "Game Development" },
      { name: "PHP, Python (AI Scripts)" },
      { name: "SQL & Firestore" },
    ],
    description:
      "I am a  skilled mobile app developer with 3 years of experience in Flutter. I had developed mobile games and worked on numerous projects involving PHP, Python AI scripting, Firestore, and SQL, bringing versatile expertise to the team.",
  },
  {
    id: "3",
    name: "Talha Nazir",
    role: "Web Developer",
    img_path: "./Images/Images/UserImage.png",
    skills: [
      { name: "React.js" },
      { name: "Laravel" },
      { name: "SQL" },
      { name: "Firestore" },
    ],
    description:
      "I am a web developer with 1.5 years of experience specializing in React.js, Laravel, SQL, and Firestore. I am about building scalable and efficient web applications, ensuring seamless user experiences.",
  },
];

export const OurTeam = () => {
  const [team, setTeam] = useState([...teamObj, ...teamObj]);
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/getTeams", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setApiResponse(response.data.data || []);
      })
      .catch((err) => {
        console.error("Error fetching teams:", err);
      });
  }, []);

  useEffect(() => {
    if (apiResponse.length > 0) {
      setTeam(
        apiResponse.length == 3 ? [...apiResponse, ...apiResponse] : apiResponse
      );
    }
  }, [apiResponse]);

  return (
    <div className="teamSection py-10">
      <div className="div teamSectionContent my-auto">
        <h2 className="text-center sectionHeading text-2xl font-bold mb-4 text-light sectionHeading">
          Our <span>Team</span>
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
              <SliderBox member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const SliderBox = ({ member }) => {
  console.log(member);
  return (
    <div className="col-lg-3 col-sm-6 slide-card text-light">
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
        <div className="social_box d-flex justify-content-center mt-3 col-6 d-flex justify-content-around m-auto">
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
