import React from "react";
import "./../../Css/Responsive.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const businessPrinciples = [
  {
    id: 1,
    img_path: "/Images/General/plantImg.jpg",
    imgAlt: "Business Principle 1",
  },
  {
    id: 2,
    img_path:
      "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83d61/67762f3ddc42e17e2f8d835a_Business%20Principles%202%20.jpg",
    imgAlt: "Business Principle 2",
  },
];

export const CodeConduct = () => {
  return (
    <section className="padding-section-l">
      <div className="col-11 m-auto mt-5">
        <div className="row justify-content-center align-items-center">
          {/* Left Image */}
          <div className="col-md-4" style={{ marginBottom: "10px" }}>
            <BusinessImage
              src={businessPrinciples[0].img_path}
              alt={businessPrinciples[0].imgAlt}
            />
          </div>

          {/* Center Content */}
          <div className="col-md-4 text-center">
            <p className="text-primary fw-bold text-center">Code of Conduct</p>
            <h2 className="serviceSectionHeading mb-5 text-center">
              Our Code of Business Principles
            </h2>
            <p className="text-size-medium">
              Zentech prioritizes legal and ethical conduct, ensuring honesty,
              fairness, and accountability for all.
            </p>
          </div>

          {/* Right Image */}
          <div
            className="col-md-4 AboutBottomImg"
            style={{ marginTop: "100px" }}
          >
            <BusinessImage
              src={businessPrinciples[1].img_path}
              alt={businessPrinciples[1].imgAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Business Image Component
const BusinessImage = ({ src, alt }) => {
  return (
    <div className="aspect-ratio-square">
      <LazyLoadImage
        effect="blur"
        src={src}
        alt={alt}
        style={{ height: "400px", width: "100%", objectFit: "cover" }}
        className="full-image img-fluid rounded rounded-4"
        loading="lazy"
      />
    </div>
  );
};
