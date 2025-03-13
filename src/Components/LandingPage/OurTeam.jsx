import React, { use, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  FaFacebook,
  FaSquareXTwitter,
  FaSquareGithub,
  FaLinkedin,
} from "react-icons/fa6";

const teamObj = [
  {
    profile: {
      id: 3,
      first_name: "Adil",
      last_name: "Sehr",
      role: "Founder & Lead Mobile Developer",
      email: "adil@example.com", // Add actual email if available
      dob: "1989-06-15", // Example DOB, update accordingly
      facebook: "https://facebook.com/adilsehr",
      github: "https://github.com/adilsehr",
      linkedin: "https://linkedin.com/in/adilsehr",
      twitter: "https://twitter.com/adilsehr",
      address: "Lahore, Pakistan",
      img_path: "./Images/team/adilsehr.png",
      description:
        "Founder of Zentech Solutions with over a decade of experience in mobile app development. Leading the team in building innovative digital solutions with a focus on efficiency and scalability.",
    },
    skills: [
      {
        id: 1,
        name: "Mobile App Development",
        description:
          "Specializing in Android and iOS development with expertise in cross-platform technologies.",
      },
      {
        id: 2,
        name: "Firebase",
        description:
          "Experience in Firebase Authentication, Firestore, Realtime Database, and Firebase Cloud Functions.",
      },
      {
        id: 3,
        name: "Full-Stack Development",
        description:
          "Proficient in front-end and back-end development, including React, Node.js, and databases.",
      },
    ],
    education: [
      {
        name: "BsIt",
        from: "2019-01-01",
        to: "2021-01-01",
        type: "education",
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
          "Worked as a Web Developer at Zentech, developing dynamic websites and web applications using modern technologies. Collaborated with designers and backend teams to build responsive and user-friendly interfaces. Gained experience in front-end and back-end development, optimizing performance and functionality.",
      },
    ],
    projects: [
      {
        name: "Project Name",
        description:
          "'About Project' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        customer_name: "client name",
        customer_review:
          "'Client Review' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        link: "https://schoollet.com",
        img_path:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        images: [
          {
            img_path: "./Images/projects/eris/1.png",
          },
          {
            img_path: "./Images/projects/eris/2.png",
          },
          {
            img_path: "./Images/projects/eris/3.png",
          },
          {
            img_path: "./Images/projects/eris/4.png",
          },
        ],
      },
      {
        name: "Schoollet 2",
        description:
          "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        customer_name: "Ali Raza",
        customer_review:
          "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        link: "https://schoollet.com",
        img_path:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        images: [
          {
            img_path: "./Images/projects/schoollet/7.png",
          },

          {
            img_path: "./Images/projects/schoollet/3.png",
          },
          {
            img_path: "./Images/projects/schoollet/5.png",
          },
          {
            img_path: "./Images/projects/schoollet/4.png",
          },

          {
            img_path: "./Images/projects/schoollet/6.png",
          },
          {
            img_path: "./Images/projects/schoollet/2.png",
          },
          {
            img_path: "./Images/projects/schoollet/8.png",
          },
          {
            img_path: "./Images/projects/schoollet/1.png",
          },
          {
            img_path: "./Images/projects/schoollet/9.png",
          },
          {
            img_path: "./Images/projects/schoollet/10.png",
          },
        ],
      },
    ],
  },
  {
    profile: {
      id: 1,
      first_name: "Saad",
      last_name: "Shafique",
      role: "Senior Mobile App Developer",
      email: "saad@example.com", // Add actual email if available
      dob: "1998-08-10", // Example DOB, update accordingly
      facebook: "https://facebook.com/saadshafique",
      github: "https://github.com/saadshafique",
      linkedin: "https://linkedin.com/in/saadshafique",
      twitter: "https://twitter.com/saadshafique",
      address: "Lahore, Pakistan",
      img_path: "./Images/team/saadshafique.png",
      description:
        "Experienced mobile app developer with 3 years of expertise in Flutter, game development, and AI scripting using PHP and Python.",
    },
    skills: [
      {
        id: 1,
        name: "Flutter",
        description:
          "Building cross-platform mobile applications with Flutter for seamless user experiences.",
      },
      {
        id: 2,
        name: "Game Development",
        description:
          "Expertise in creating mobile games with engaging UI and optimized performance.",
      },
      {
        id: 3,
        name: "PHP, Python (AI Scripts)",
        description:
          "Skilled in AI-powered applications using PHP and Python scripting.",
      },
      {
        id: 4,
        name: "SQL & Firestore",
        description:
          "Database management with SQL and NoSQL solutions like Firestore for scalable apps.",
      },
    ],
    education: [
      {
        name: "BsIt",
        from: "2019-01-01",
        to: "2021-01-01",
        type: "education",
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
          "Worked as a Web Developer at Zentech, developing dynamic websites and web applications using modern technologies. Collaborated with designers and backend teams to build responsive and user-friendly interfaces. Gained experience in front-end and back-end development, optimizing performance and functionality.",
      },
    ],
    projects: [
      {
        name: "Project Name",
        description:
          "'About Project' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        customer_name: "client name",
        customer_review:
          "'Client Review' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        link: "https://schoollet.com",
        img_path:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        images: [
          {
            img_path:
              "https://t3.ftcdn.net/jpg/11/20/41/56/360_F_1120415665_WHkqspUot6bbRTsLfUFpJrxn1qetUZUY.jpg",
          },
          {
            img_path: "https://cdn-icons-png.flaticon.com/512/8136/8136031.png",
          },
          {
            img_path:
              "https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
        ],
      },
      {
        name: "Schoollet 2",
        description:
          "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        customer_name: "Ali Raza",
        customer_review:
          "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        link: "https://schoollet.com",
        img_path:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        images: [
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
        ],
      },
    ],
  },
  {
    profile: {
      id: 2,
      first_name: "Talha",
      last_name: "Nazir",
      role: "Web Developer",
      email: "talhanazzir786y@gmail.com",
      dob: "2001-07-21",
      facebook: "https://facebook.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      address: "Lahore, Pakistan",
      img_path: "./Images/team/talhanazir.png",
      description:
        "Web developer with 1.5 years of experience in React.js, Laravel, SQL, and Firestore, specializing in building scalable and efficient web applications.",
    },
    skills: [
      {
        id: 1,
        name: "React.js",
        description:
          "Expert in building interactive and dynamic web applications using React.js.",
      },
      {
        id: 2,
        name: "Laravel",
        description:
          "Back-end development with Laravel for scalable and secure web applications.",
      },
      {
        id: 3,
        name: "SQL",
        description:
          "Database management and optimization using SQL for efficient data handling.",
      },
      {
        id: 4,
        name: "Firestore",
        description:
          "Experience in Firestore for real-time database solutions in web applications.",
      },
    ],
    education: [
      {
        name: "BsIt",
        from: "2019-01-01",
        to: "2021-01-01",
        type: "education",
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
          "Worked as a Web Developer at Zentech, developing dynamic websites and web applications using modern technologies. Collaborated with designers and backend teams to build responsive and user-friendly interfaces. Gained experience in front-end and back-end development, optimizing performance and functionality.",
      },
    ],
    projects: [
      {
        name: "Project Name",
        description:
          "'About Project' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        customer_name: "client name",
        customer_review:
          "'Client Review' it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        link: "https://schoollet.com",
        img_path:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        images: [
          {
            img_path:
              "https://t3.ftcdn.net/jpg/11/20/41/56/360_F_1120415665_WHkqspUot6bbRTsLfUFpJrxn1qetUZUY.jpg",
          },
          {
            img_path: "https://cdn-icons-png.flaticon.com/512/8136/8136031.png",
          },
          {
            img_path:
              "https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
        ],
      },
      {
        name: "Schoollet 2",
        description:
          "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        customer_name: "Ali Raza",
        customer_review:
          "it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar . it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar .  it is a canteen app that is used for integrate the transaction between students and canteens CircularProgressBar",
        link: "https://schoollet.com",
        img_path:
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        images: [
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
          {
            img_path:
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg",
          },
        ],
      },
    ],
  },
];

export const OurTeam = (props) => {
  const [team, setTeam] = useState([]);
  const [apiResponse, setApiResponse] = useState([]);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    let data = localStorage.getItem("users");

    if (data) {
      let responseData = JSON.parse(data);

      setTeam([...responseData, ...responseData]);
      // setApiResponse(JSON.parse(data));
    }
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/getTeams", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       setApiResponse(response.data.data || []);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching teams:", err);
  //     });
  // }, []);

  useEffect(() => {
    if (apiResponse.length > 0) {
      setTeam(
        apiResponse.length == 3 ? [...apiResponse, ...apiResponse] : apiResponse
      );
    }
  }, [apiResponse]);

  function handleTeamClick(member) {
    console.log(`/profile/${member.profile.id}`);
    navigate(`/profile/${member.profile.id}`, { state: { team: member } });
  }

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
            <SwiperSlide key={member.profile.id} style={{ margin: "auto" }}>
              <div onClick={() => handleTeamClick(member)}>
                <SliderBox member={member.profile} />
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
