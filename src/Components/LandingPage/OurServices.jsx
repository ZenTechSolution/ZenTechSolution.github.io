import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

let services = [
  {
    name: "Service 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo deleniti enim necessitatibus quia libero laborum fugiat laboriosam iusto at vero ipsa, quod consequuntur nisi?",
    img_path: "./Images/Icons/icon.svg",
  },
  {
    name: "Service 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo deleniti enim necessitatibus quia libero laborum fugiat laboriosam iusto at vero ipsa, quod consequuntur nisi  consectetur adipisicing elit. Nemo deleniti enim necessitatibus quia libero laborum fugiat laboriosam iusto at vero ipsa, quod consequuntur nisi?",
    img_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLeTF8i4BJfDzb-sbp4AxveNaX4uvw_yyCw&s",
  },
  {
    name: "Service 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo deleniti enim necessitatibus quia libero laborum fugiat laboriosam iusto at vero ipsa, quod consequuntur nisi?",
    img_path: "./Images/Icons/icon.svg",
  },
  {
    name: "Service 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo deleniti enim necessitatibus quia libero laborum fugiat laboriosam iusto at vero ipsa, quod consequuntur nisi?",
    img_path: "./Images/Icons/icon.svg",
  },
  {
    name: "Service 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo deleniti enim necessitatibus quia libero laborum fugiat laboriosam iusto at vero ipsa, quod consequuntur nisi?",
    img_path: "./Images/Icons/icon.svg",
  },
];

export const OurServices = () => {
  const [showAll, setShowAll] = useState(false);
  let [data, setData] = useState(services);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/getServices", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       setData(response.data.data || []);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching teams:", err);
  //     });
  // }, []);

  return (
    <div className="ourServiceSection">
      <div className="div col-12 col-md-6 m-auto serviceDescription">
        <h3 className="sectionHeading">
          Our <span>Services</span>
        </h3>
        <p className="w-100 col-md-6 m-auto sectionDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          deleniti enim necessitatibus quia libero laborum fugiat laboriosam
          iusto at vero ipsa, quod conser nisi?
        </p>
      </div>
      <ServiceDiv showAll={showAll} data={data} />
      <div className="button-container">
        <button
          className="view-all-btn btn btn-primary p-2 bordered col-12 col-sm-3 col-lg-2 mt-3"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Hide" : "View All"}
        </button>
      </div>
    </div>
  );
};
function ServiceDiv({ showAll, data }) {
  return (
    <div className="serviceBoxGrid">
      {data.slice(0, showAll ? services.length : 3).map((service) => (
        <ServiceBox key={service.id} service={service} />
      ))}
    </div>
  );
}
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
    <div className={`serviceBox ${showFull ? "expanded" : ""}`}>
      <div className="service-image">
        <img src={service.img_path} alt="service logo" />
      </div>
      <div className="h4 text-dark text-center textHeading">{service.name}</div>
      <div
        ref={descriptionRef}
        className={`description text-dark textDescription ${
          showFull ? "expanded" : "collapsed"
        }`}
      >
        {service.description}
      </div>
      {isOverflowing && (
        <button
          className="show-more-btn text-center col-12"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
