import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ProjectImageBox } from "./../UserDashboard/Popups.jsx";
import axios from "axios";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TbSchool } from "react-icons/tb";
import { GoBriefcase } from "react-icons/go";

let Data = {
  project: {
    id: 1,
    name: "Schoollet",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    link: "https://schoollet.sa",
    address: null,
    created_at: "2025-03-06T10:26:58.000000Z",
    updated_at: "2025-03-06T10:26:58.000000Z",
    img_path: "http://127.0.0.1:8000/uploads/projects/1741256818.png",
    customer_name: "Naif Raza",
    customer_review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  teams: [
    {
      id: 1,
      name: "Test Web Developer",
      user_id: 1,
      project_id: 1,
    },
    {
      id: 2,
      name: "Test admin",
      user_id: 2,
      project_id: 1,
    },
  ],
  images: [
    {
      id: 1,
      project_id: 1,
      img_path:
        "https://www.promoteyourschool.co.uk/wp-content/uploads/2019/02/Hazelwood-table-table-art-9.webp",
      created_at: "2025-03-08T11:32:08.000000Z",
      updated_at: "2025-03-08T11:32:08.000000Z",
    },
    {
      id: 2,
      project_id: 1,
      img_path:
        "https://www.canteen.com/wp-content/uploads/53362109623_fc19cc2157_o-500x375.jpg",
      created_at: "2025-03-08T11:32:08.000000Z",
      updated_at: "2025-03-08T11:32:08.000000Z",
    },
    {
      id: 3,
      project_id: 1,
      img_path:
        "https://cdn.prod.website-files.com/62e628ccdd3aacd9841de18b/62ead78b6f662a4cb7295ab6_Carousel%3ACanteen.jpg",
      created_at: "2025-03-08T11:32:08.000000Z",
      updated_at: "2025-03-08T11:32:08.000000Z",
    },
    {
      id: 4,
      project_id: 1,
      img_path:
        "https://www.spectra-vision.com/wp-content/uploads/2021/12/Canteen-Management-System.jpg",
      created_at: "2025-03-08T11:32:08.000000Z",
      updated_at: "2025-03-08T11:32:08.000000Z",
    },
    {
      id: 5,
      project_id: 1,
      img_path:
        "https://www.befurnituresales.co.uk/wp-content/uploads/2020/01/Office-Canteen-_-Cafeteria-Guide.jpg",
      created_at: "2025-03-08T11:32:08.000000Z",
      updated_at: "2025-03-08T11:32:08.000000Z",
    },
    {
      id: 6,
      project_id: 1,
      img_path:
        "https://www.drouinsc.vic.edu.au/wp-content/uploads/2023/08/canteen-banner.jpg",
      created_at: "2025-03-08T11:32:08.000000Z",
      updated_at: "2025-03-08T11:32:08.000000Z",
    },
    {
      id: 7,
      project_id: 1,
      img_path: "https://penkethgroup.com/wp-content/uploads/2022/10/2-2.jpg",
      created_at: "2025-03-08T11:32:08.000000Z",
      updated_at: "2025-03-08T11:32:08.000000Z",
    },
    {
      id: 8,
      project_id: 1,
      img_path:
        "https://www.jade-aden-interiors.co.uk/wp-content/uploads/2022/11/iStock-1127634717-1-700x500.jpg",
      created_at: "2025-03-08T11:32:08.000000Z",
      updated_at: "2025-03-08T11:32:08.000000Z",
    },
  ],
};

export const ProjectPage = ({ show, data }) => {
  const [project, setProject] = useState(null);
  const [images, setImages] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imgBox, setImgBox] = useState(false);

  useEffect(() => {
    if (!data?.id) return; // ✅ Ensure data.id exists before making the API call

    console.log("Id from project:", data.id);
    setLoading(true); // ✅ Set loading to true before fetching data

    axios
      .post(
        "http://127.0.0.1:8000/api/projectData",
        { id: data.id },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Api Data:", response.data); // ✅ Properly log API response

        const { project, images, teams } = response.data.data;
        if (response.data.success) {
          setProject(project);
          setImages(images);
          setTeams(teams);
        }
      })
      .catch((err) => {
        console.error("Error fetching project data:", err);
      })
      .finally(() => {
        setLoading(false); // ✅ Set loading to false after fetching data
      });
  }, [data?.id]);

  if (!show) return null;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="project-page col-11 m-auto mt-4">
        <div className="row">
          {/* Left Section - Project Details & Team */}
          <div className="col-lg-6 col-md-12 mb-4 text-start">
            {/* Project Details */}
            <div className="project-details d-flex gap-3 align-items-center">
              <div
                className="border rounded d-flex align-items-center justify-content-center"
                style={{ width: "100px", height: "130px" }}
              >
                <img
                  className="p-1"
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "contain",
                  }}
                  src={project.img_path}
                  alt="Project"
                />
              </div>
              <div>
                <h2 className="project-name">Project Description</h2>
                <p className="project-description">{project?.description}</p>
                <a
                  href={project?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link btn btn-outline-info"
                >
                  Visit Project
                </a>
              </div>
            </div>

            {/* Team Section */}
            <div className="team-section mt-4">
              <h3 className="sectionHeading">Team Members</h3>
              <div className="team-list">
                {teams.length > 0 ? (
                  teams.map((team, index) => (
                    <div key={index} className="team-member">
                      <p>Team: {team.name}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No team members assigned.</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Customer Review */}
          <div className="col-lg-6 col-md-12 mb-4 text-start">
            <div className="customer-review">
              <h3 className="sectionHeading">Customer Review</h3>
              <blockquote>
                <p>"{project?.customer_review}"</p>
                <footer>- {project?.customer_name}</footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Lower Section - Project Gallery */}
        <div className="lower-section mt-4 text-start">
          <div className="d-flex justify-content-between mb-3">
            <h3 className="sectionHeading mb-3">Project Gallery</h3>
            <button className="btn btn-info" onClick={() => setImgBox(true)}>
              Add Img
            </button>
          </div>
          <SwiperSlideshow
            data={images}
            Component={ImageSlide}
            project={project}
          />
        </div>
      </div>

      {/* Image Upload Modal */}
      <ProjectImageBox
        show={imgBox}
        project={project}
        onCancel={() => setImgBox(false)}
      />
    </>
  );
};

const SwiperSlideshow = ({ data, Component, project }) => {
  return (
    <>
      <div className="swiper-container myProject">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={data.length < 3 ? 1 : 3}
          loop={data.length >= 3}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 },
            480: { slidesPerView: data.length < 2 ? 1 : 2, spaceBetween: 10 },
            768: { slidesPerView: data.length < 3 ? 1 : 2, spaceBetween: 15 },
            1024: { slidesPerView: data.length < 3 ? 1 : 3, spaceBetween: 20 },
          }}
        >
          {data.length > 0 ? (
            data.map((item, index) => (
              <SwiperSlide key={index} className="custom-slide">
                <div
                  className="image-container"
                  style={{
                    width: "100%",
                    aspectRatio: "1/1", // Ensures equal width and height
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    height: "250px",
                  }}
                >
                  <Component data={item} />
                  <button
                    className="btn btn-outline-danger rounded-circle deleteBtn"
                    onClick={(e) => {
                      e.stopPropagation();
                      // deleteItem(item);
                    }}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      zIndex: 10,
                      scale: "70%",
                      borderRadius: "50%",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <RiDeleteBin5Fill size={30} />
                  </button>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p className="text-center text-gray-500">No data available.</p>
          )}
        </Swiper>
      </div>
    </>
  );
};

const ImageSlide = ({ data }) => {
  return (
    <div
      className="skill-img"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures uniform size without stretching
          borderRadius: "10px",
          border: "2px solid #17a2b8", // Info border
        }}
        src={data.img_path}
        className="equal-size-image"
        alt="Project Image"
      />
    </div>
  );
};
