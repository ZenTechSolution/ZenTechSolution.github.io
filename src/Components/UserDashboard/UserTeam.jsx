import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  SocialLinksForm,
  AddSkill,
  AddExperience,
} from "./../UserDashboard/Popups";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { TbSchool } from "react-icons/tb";
import { GoBriefcase } from "react-icons/go";
import { FaCode } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

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
  user: {
    id: 1,
    first_name: "loading",
    last_name: "",
    role: "Admin",
    email: "admin@admin.com",
    email_verified_at: null,
    password_text: "admin123",
    facebook: "https://facebook.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    address: null,
    created_at: "2025-03-06T06:51:52.000000Z",
    updated_at: "2025-03-06T10:27:57.000000Z",
    img_path: "https://avatar.iran.liara.run/public/47",
    description: "loading ...",
    dob: null,
  },
};

export const UserTeam = ({ data, ...props }) => {
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [user, setUser] = useState({});
  const [skillBox, setSkillBox] = useState(false);
  const [experienceBox, setExperienceBox] = useState(false);
  let [socialBox, setSocialBox] = useState(false);

  useEffect(() => {
    setUser(clients.user);
    setSkills(clients.skills);
    setEducation(clients.education);
  }, []);

  useEffect(() => {
    if (!data?.id) return; // ✅ Ensure data.id exists before making the API call

    axios
      .post(
        "http://127.0.0.1:8000/api/userData",
        { id: `${data.id}` },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Api Data:", response.data); // ✅ Properly log API response

        const {
          user: userData,
          education: educationData,
          skills: skillData,
        } = response.data.data;
        if (response.data.success) {
          console.log(educationData);
          setUser(userData);
          setSkills([...skillData, ...skillData]);
          setEducation([...educationData, ...educationData]);
        }
      })
      .catch((err) => {
        console.error("Error fetching project data:", err);
      })
      .finally(() => {
        // setLoading(false); // ✅ Set loading to false after fetching data
      });
  }, [data?.id]);

  if (!props.show) {
    return null;
  }

  function updateSkill(data) {
    setSkills(data);
  }

  function updateUser(data) {
    setUser(data);
  }

  return (
    <>
      <div className="TestmonialSection TeamMember py-2">
        <div className="col-11 m-auto my-5">
          <div className="row d-flex align-items-center gy-3">
            {/* User Image */}
            <div className="col-3 col-sm-2 col-md-1 text-center">
              <img
                className="border img-fluid rounded-circle"
                src={user.img_path}
                style={{ maxWidth: "100%", height: "auto" }}
                alt="User"
              />
            </div>

            {/* User Details */}
            <div className="col-9 col-sm-10 col-md-11 text-start">
              <div className="d-flex justify-content-between mb-2">
                <h3 className="mb-1 text-wrap">{`${user.first_name || ""} ${
                  user.last_name || ""
                }`}</h3>
                <div
                  className="btn btn-success"
                  onClick={() => {
                    setSocialBox(true);
                  }}
                >
                  Social Media
                </div>
              </div>
              <p
                className="overflow-auto text-wrap"
                style={{ maxHeight: "100px", overflowY: "auto" }}
              >
                {user.description || "No description available"}
              </p>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="testmonialContainer myTeamMember col-11 m-auto mb-2">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="sectionHeading">Journey</h3>
            <button
              className="btn btn-success"
              onClick={() => setExperienceBox(true)}
            >
              Add
            </button>
          </div>
          <SwiperSlideshow
            user={user}
            data={education}
            Component={JourneyCard}
          />
        </div>

        {/* Skills Section */}
        <div className="testmonialContainer mySkills myTeamMember col-11 m-auto">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="sectionHeading">Skills</h3>
            <button
              className="btn btn-success"
              onClick={() => setSkillBox(true)}
            >
              Add
            </button>
          </div>
          <SwiperSlideshow user={user} data={skills} Component={SkillBox} />
        </div>
      </div>

      <SocialLinksForm
        show={socialBox}
        onCancel={() => setSocialBox(false)}
        data={user}
        update={updateUser}
      />

      {/* Add Skill Popup */}
      <AddSkill
        user={user}
        show={skillBox}
        onCancel={() => setSkillBox(false)}
        // update={updateSkill(data)}
      />

      {/* Add Experience Popup */}
      <AddExperience
        show={experienceBox}
        user={user}
        onCancel={() => setExperienceBox(false)}
      />
    </>
  );
};

const SwiperSlideshow = ({ data = [], Component, user }) => {
  const swiperRef = useRef(null);
  const [slides, setSlides] = useState([]);
  const [boxData, setBoxData] = useState(null);
  const [skillBox, setSkillBox] = useState(false);
  const [experienceBox, setExperienceBox] = useState(false);

  useEffect(() => {
    setSlides(data);
  }, [data]);

  const changeData = useCallback((data) => {
    setBoxData(data);
    if (Component.name === "SkillBox") {
      setSkillBox(true);
    } else {
      setExperienceBox(true);
    }
  }, []);

  function deleteItem(item) {
    // console.log(Component.name);
    if (Component.name == "JourneyCard") {
      deleteJourneyCard(item);
    } else {
      deleteSkillCard(item);
    }
  }

  function deleteJourneyCard(item) {
    console.log("Journey Card");
  }

  function deleteSkillCard(item) {
    console.log("Skill Card");
  }

  return (
    <>
      <div className="swiper-containe">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={slides.length < 3 ? 1 : 3}
          loop={slides.length >= 3}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: slides.length < 3 ? 1 : 2, spaceBetween: 20 },
            1024: {
              slidesPerView: slides.length < 3 ? 1 : 3,
              spaceBetween: 20,
            },
          }}
        >
          {slides.length > 0 ? (
            slides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="div" onClick={() => changeData(item)}>
                  <button
                    className="btn btn-outline-danger rounded-circle deleteBtnTeamSections p-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteItem(item);
                    }}
                  >
                    <RiDeleteBin5Fill size={30} />
                  </button>
                  <Component data={item} />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="text-center text-gray-500">No data available.</p>
          )}
        </Swiper>
      </div>

      {/* Add Skill Popup */}
      <AddSkill
        show={skillBox}
        data={boxData}
        user={user}
        onCancel={() => setSkillBox(false)}
        delClick={(e) => console.log(e.target)}
      />

      {/* Add Experience Popup */}
      <AddExperience
        show={experienceBox}
        data={boxData}
        user={user}
        onCancel={() => setExperienceBox(false)}
      />
    </>
  );
};

const JourneyCard = ({ data }) => {
  return (
    <>
      <div className="shadow box-shadow-sm py-4 my-4 border rounded-3 mx-2">
        <div className="">
          <div className="client-info text-left">
            <div className="div d-flex justify-content-center gap-1 mb-2">
              <div className=" align-items-center justify-content-center">
                {data.type === "education" ? (
                  <TbSchool size={25} className="text-primary" />
                ) : (
                  <GoBriefcase size={22} className="text-warning" />
                )}
              </div>
              <h5 className="clientName textHeading font-weight-bold">
                {data.name}
              </h5>
            </div>
            <p className="projectName h6 text-muted">
              {data.from} to {data.to}
            </p>
            {/* <button className="btn btn-outline-danger rounded-circle deleteBtnTeamSections p-3">
              <RiDeleteBin5Fill size={30} />
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

const SkillBox = ({ data }) => {
  return (
    <>
      <div className="shadow box-shadow-sm py-4 my-4 border rounded-3 mx-2">
        <div className="">
          <div className="client-info text-left">
            <div className="div d-flex justify-content-center gap-1 mb-2">
              <div className=" align-items-center justify-content-center">
                {data.type === "education" ? (
                  <TbSchool size={25} className="text-primary" />
                ) : (
                  <FaCode size={22} className="text-primary" />
                )}
              </div>
              <h5 className="clientName textHeading font-weight-bold">
                {data.name}
              </h5>
            </div>
            <p
              className="projectName h6 text-mutedm-0"
              style={{ height: "60px", overflowY: "auto" }}
            >
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
