import React, { useEffect, useRef, useState } from "react";
import { TbSchool } from "react-icons/tb";
import { GoBriefcase } from "react-icons/go";

export const Journey = (props) => {
  return (
    <div className="div AboutUsSecction">
      <div className="education-section container py-5">
        {/* Heading */}
        <div className="col-12 col-md-6 mx-auto text-center">
          <h3 className="sectionHeading text-dark">
            My <span className="text-light">Journey</span>
          </h3>
          <p className="sectionDescription text-dark">
            Here’s a summary of my academic background.
          </p>
        </div>

        {/* Education Grid */}
        <div className="row justify-content-center">
          {props.data.map((edu, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <EducationBox education={edu} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EducationBox = ({ education }) => {
  const [showFull, setShowFull] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const lineHeight = parseFloat(
        getComputedStyle(descriptionRef.current).lineHeight
      );
      const maxHeight = lineHeight * 3; // Limit description to 3 lines
      setIsOverflowing(descriptionRef.current.scrollHeight > maxHeight);
    }
  }, [education.description]);

  return (
    <div className="educationBox h-100 p-4 rounded shadow-lg bg-light text-center">
      {/* Dynamic Icon */}
      <div className="education-icon text-center mb-3">
        {education.type === "education" ? (
          <TbSchool size={50} className="text-primary" />
        ) : (
          <GoBriefcase size={50} className="text-warning" />
        )}
      </div>

      {/* Education/Job Details */}
      <h4 className="text-dark">{education.name}</h4>
      <p className="text-muted">
        {education.from} to {education.to}
      </p>
      <h6 className="text-primary">{education.institute}</h6>

      {/* Description with "Show More / Less" */}
      <div
        ref={descriptionRef}
        className={`text-dark textDescription ${
          showFull ? "expanded" : "collapsed"
        }`}
        style={{ overflow: "hidden", maxHeight: showFull ? "none" : "4.5rem" }}
      >
        {education.description}
      </div>

      {isOverflowing && (
        <button
          className="btn profileBoxDescription btn-link text-primary mt-2"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};
