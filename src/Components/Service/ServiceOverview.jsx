import React, { useEffect, useState } from "react";
import { PrimaryBtn } from "./../General/General";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImagePath } from "./ServiceImage";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

export const ServiceData = {
  profile: {
    id: "1",
    name: "Service1",
    description:
      "Eyes, vision and dark with an eye of a woman in a test or exam for prescription eye wear or contact lenses at the optometrist or optician. Female testing for eyesight in a studio on a black background 4K stock video",
    img_path:
      "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6746cd3786ddb52478d995d1_MS%20D365%20ERP%20.webp",
    description_img: "/Images/Services/agileSoftware.jpg",
    price: 100,
    tag: "Web",
    overView:
      "Our web development services provide enterprise-grade and customized web development services tailored to meet the evolving demands of modern businesses. Whether you need a simple landing page or a complex web application, we have the expertise to deliver results that exceed expectations.",
  },
  overview: {
    id: 1,
    description:
      "Our web development services provide enterprise-grade and customized web development services tailored to meet the evolving demands of modern businesses. Whether you need a simple landing page or a complex web application, we have the expertise to deliver results that exceed expectations.",
    img_path:
      "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/6749f050b8a44ed826f1a73e_WhatsApp%20Image%202024-11-28%20at%2011.22.01.jpeg",
  },
  service: [
    {
      id: 1,
      name: "Mobile-First Architecture",
      description:
        "Leveraging agile methodologies to build scalable, responsive solutions that align with mobile-first strategies.",
    },
    {
      id: 2,
      name: "Enterprise Mobility",
      description:
        "Developing robust, secure applications to streamline operations and enhance productivity for businesses of all sizes.",
    },
    {
      id: 3,
      name: "Integration Expertise",
      description:
        "Seamlessly connecting mobile apps with third-party services, APIs, and backend systems.",
    },
    {
      id: 4,
      name: "Performance Optimization",
      description:
        "Ensuring apps are fast, lightweight, and responsive, even under heavy user loads.",
    },
    {
      id: 5,
      name: "Custom Mobile Solutions",
      description:
        "Building tailored apps to address specific business challenges and deliver measurable results.",
    },
  ],
};

export const ServiceOverview = (props) => {
  const [data, setData] = useState(ServiceData);
  const navigate = useNavigate();

  useEffect(() => {
    setData(props.service);
  }, [props.service]);

  return (
    <>
      <div className="col-11 m-auto my-5">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-6 d-flex flex-column gap-3">
            <p className="text-primary fw-bold">Overview</p>
            <h4 className="">{data.overview.description}</h4>
            <div className="listItem">
              {data.service.map((item) => (
                <ListItem key={item.id} list={item} />
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <LazyLoadImage
              src={data.overview.img_path}
              effect="blur"
              alt="Service Overview"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "600px", width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="div d-flex justify-content-center my-5">
          <PrimaryBtn
            name={"Turn Idea Into Reality"}
            onClick={() => {
              navigate("/contact");
            }}
          />
        </div>
      </div>
    </>
  );
};

function ListItem({ list }) {
  return (
    <div className="mb-2 fs-6 fs-md-5 fs-lg-4">
      <strong className=" fs-5 fs-md-4 fs-lg-3">{list.name} :</strong>{" "}
      {list.description}
    </div>
  );
}
