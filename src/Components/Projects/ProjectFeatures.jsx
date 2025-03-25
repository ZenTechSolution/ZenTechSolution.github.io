import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { BloomCircle } from "./../General/BloomCircles";

export const ProjectFeatures = ({ features }) => {
  return (
    <>
      <div
        className="d-flex col-11 m-auto flex-wrap justify-content-start gap-4"
        style={{ margin: "auto" }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="py-3 h5  rounded col-12 col-md-5"
            style={{
              minWidth: "200px",
              border: "none",
            }}
          >
            {feature}
          </div>
        ))}
      </div>
    </>
  );
};

export function ImageGallery({ Images }) {
  return (
    <div
      className="d-flex flex-wrap justify-content-center gap-3 mt-5"
      style={{ margin: "auto" }}
    >
      {Images.slice(0, 6).map((img, index) => (
        <img
          key={index}
          src={img.img_path}
          className="rounded col-12 col-md-3"
          alt={`Gallery image ${index + 1}`}
          style={{
            height: "300px",
            objectFit: "contain",
            objectPosition: "center",
            borderRadius: "8px",
            background: "rgb(238, 238, 238)",
          }}
        />
      ))}
    </div>
  );
}

export function ReviewSection({ data }) {
  return (
    <section className="our-mission py-5">
      <div className="col-11 m-auto">
        {/* Mission Heading */}
        <div className="text-center">
          <p className=" text-primary fw-bold text-start">Reviews</p>

          <h2 className="heading-style-h1 text-start fw-bold">
            What They Says
          </h2>
        </div>

        {/* Mission Description with Quote */}
        <div
          className="quote-border  border  rounded-4 mt-4 d-flex flex-column justify-content-center"
          style={{ position: "relative", minHeight: "150px" }}
        >
          <p className="text-size-medium text-center fs-5  m-auto my-5 mb-3 px-4">
            "{data.customer_review}"
          </p>
          <p className="text-center mb-5 fw-bold">--{data.customer_name}</p>
          <div
            className="div  p-3 rounded-circle colonCircle"
            style={{ position: "absolute", top: "-20%", right: "1%" }}
          >
            <FaQuoteLeft size={35} color="#fff" />
          </div>
        </div>
      </div>
    </section>
  );
}
