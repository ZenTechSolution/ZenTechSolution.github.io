import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./../../Css/Responsive.css";
import { PrimaryBtn } from "./../../Components/General/General";
import { PrimaryBtnOutline } from "./../../Components/General/General";

let projectData = [
  {
    profile: {
      id: 1,
      name: "Schoollet",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat libero quidem eveniet ullam nobis praesentium expedita possimus recusandae ipsum eligendi! Velit blanditiis saepe minus qui fuga corporis id culpa similique!",
      img_path:
        "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/677b72ed7edda24e27141b5e_AWS-p-500.png",
      link: "https://facebook.com",
    },
    tags: ["flutter", "php", "Laravel", "firebase", "sql", "react"],
    Images: [
      {
        id: 1,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 2,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 3,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 4,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 5,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 6,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
    ],
    features: [
      "Over 3200 SVG icons for popular brands. See them all on one page",
      "Over 3200 SVG icons for popular brands. See ",
      "Over 3200 SVG icons for popular brands. See them all on one page Over 3200 SVG icons for popular brands.",
      "Over 3200 SVG icons for popular brands. See them all on one page",
      "Over 3200 SVG icons for",
      "Over 3200 SVG icons for popOver 3200 SVG icons for popular brands. See them all on one page",
    ],
  },
  {
    profile: {
      id: 1,
      name: "Schoollet",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat libero quidem eveniet ullam nobis praesentium expedita possimus recusandae ipsum eligendi! Velit blanditiis saepe minus qui fuga corporis id culpa similique!",
      img_path:
        "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/677b72ed7edda24e27141b5e_AWS-p-500.png",
      link: "https://facebook.com",
    },
    tags: ["flutter", "php", "Laravel", "firebase", "sql", "react"],
    Images: [
      {
        id: 1,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 2,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 3,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 4,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 5,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 6,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
    ],
    features: [
      "Over 3200 SVG icons for popular brands. See them all on one page",
      "Over 3200 SVG icons for popular brands. See ",
      "Over 3200 SVG icons for popular brands. See them all on one page Over 3200 SVG icons for popular brands.",
      "Over 3200 SVG icons for popular brands. See them all on one page",
      "Over 3200 SVG icons for",
      "Over 3200 SVG icons for popOver 3200 SVG icons for popular brands. See them all on one page",
    ],
  },
  {
    profile: {
      id: 1,
      name: "Schoollet",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat libero quidem eveniet ullam nobis praesentium expedita possimus recusandae ipsum eligendi! Velit blanditiis saepe minus qui fuga corporis id culpa similique!",
      img_path:
        "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/677b72ed7edda24e27141b5e_AWS-p-500.png",
      link: "https://facebook.com",
    },
    tags: ["flutter", "php", "Laravel", "firebase", "sql", "react"],
    Images: [
      {
        id: 1,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 2,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 3,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 4,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 5,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 6,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
    ],
    features: [
      "Over 3200 SVG icons for popular brands. See them all on one page",
      "Over 3200 SVG icons for popular brands. See ",
      "Over 3200 SVG icons for popular brands. See them all on one page Over 3200 SVG icons for popular brands.",
      "Over 3200 SVG icons for popular brands. See them all on one page",
      "Over 3200 SVG icons for",
      "Over 3200 SVG icons for popOver 3200 SVG icons for popular brands. See them all on one page",
    ],
  },
  {
    profile: {
      id: 1,
      name: "Schoollet",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat libero quidem eveniet ullam nobis praesentium expedita possimus recusandae ipsum eligendi! Velit blanditiis saepe minus qui fuga corporis id culpa similique!",
      img_path:
        "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/677b72ed7edda24e27141b5e_AWS-p-500.png",
      link: "https://facebook.com",
    },
    tags: ["flutter", "php", "Laravel", "firebase", "sql", "react"],
    Images: [
      {
        id: 1,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 2,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 3,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 4,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 5,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
      {
        id: 6,
        img_path:
          "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674bfabb2865775678d885ec_Game%20and%20gamified%20experiences.jpg",
      },
    ],
    features: [
      "Over 3200 SVG icons for popular brands. See them all on one page",
      "Over 3200 SVG icons for popular brands. See ",
      "Over 3200 SVG icons for popular brands. See them all on one page Over 3200 SVG icons for popular brands.",
      "Over 3200 SVG icons for popular brands. See them all on one page",
      "Over 3200 SVG icons for",
      "Over 3200 SVG icons for popOver 3200 SVG icons for popular brands. See them all on one page",
    ],
  },
];

export const MyProjects = (props) => {
  const [data, setData] = useState(projectData);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setData(props.project);
  }, []);

  const visibleProjects = showAll ? data : data.slice(0, 3);

  return (
    <div className="col-11 m-auto my-5">
      <h2 className="text-center fw-bold">My Projects</h2>
      <div className="div">
        {visibleProjects.map((project, index) => (
          <ProjectBox key={index} project={project} />
        ))}
      </div>

      {data.length > 3 && (
        <div className="text-center mt-4">
          <PrimaryBtnOutline
            name={showAll ? "Show Less" : "View All"}
            onClick={() => setShowAll(!showAll)}
          />
        </div>
      )}
    </div>
  );
};

const ProjectBox = ({ project }) => {
  const [profile, setProfile] = useState({});
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    if (project) {
      setProfile(project.profile);
      setTags(project.tags);
      setImages(project.Images);
      setFeatures(project.features);
    }
  }, [project]);

  return (
    <div className="d-flex row pb-4 project-flex-boxes mt-5 border-bottom">
      <div className="col-12 col-md-4 text-center d-flex flex-column justify-content-between">
        <div className="p-3 rounded">
          <img
            src={profile.img_path}
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "#fff",
              borderRadius: "100px",
            }}
            alt="Project"
            className="img-fluid "
          />
          <h2 className="mt-3">{profile.name}</h2>
          <p>{profile.description}</p>
        </div>

        <div className="div">
          {profile.link ? (
            <a href={profile.link}>
              <PrimaryBtn name={"Visit Project"} />
            </a>
          ) : (
            ""
          )}

          <div className="mt-3">
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-secondary me-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="col-12 col-md-8 d-flex flex-column justify-content-between">
        <ImageGrid images={images} />
        <div className="mt-4">
          <h4>Features:</h4>
          <ul className="list-group" style={{ listStyle: "none" }}>
            {features.map((feature, index) => (
              <li key={index} className="border-none my-1 mx-3">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ImageGrid = ({ images }) => {
  return (
    <div className="col-12 m-auto my-3">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {images.map((image, index) => (
            <div
              key={index}
              className="div rounded"
              style={{
                width: "100%",
                height: "250px",
                backgroundColor: "#f0fff0",
              }}
            >
              <img
                src={image.img_path}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
                alt={`Gallery ${index + 1}`}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
