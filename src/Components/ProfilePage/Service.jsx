import React, { useEffect, useRef, useState } from "react";

export const Service = (props) => {
  const [showAll, setShowAll] = useState(false);
  const [data, setData] = useState(props.data);

  return (
    <div className="ourServiceSection text-center py-5">
      {/* Service Heading */}
      <div className="col-12 col-md-6 mx-auto serviceDescription">
        <h3 className="profile sectionHeading mb-4">
          <span>Services</span> i provide
        </h3>
      </div>

      {/* Services List */}
      <ServiceDiv showAll={showAll} data={data} />

      {/* View All Button */}
      <div className="button-container mt-4">
        <button
          className="btn btn-primary px-4 py-2 col-12 col-sm-3 col-lg-2"
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
    <div className="serviceBoxGrid profile d-flex flex-wrap justify-content-center gap-4">
      {data.slice(0, showAll ? data.length : 3).map((service) => (
        <ServiceBox key={service.id} service={service} />
      ))}
    </div>
  );
}

// Single Service Box Component
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
    <div
      className={`serviceBox p-3 rounded shadow-lg ${
        showFull ? "expanded" : ""
      }`}
      style={{ width: "350px", minHeight: "355px" }}
    >
      {/* Service Image */}
      <div className="service-image text-center mb-3">
        <img
          src={service.img_path}
          alt="service logo"
          className="img-fluid rounded"
        />
      </div>

      {/* Service Name */}
      <h4 className="text-dark text-center">{service.name}</h4>

      {/* Service Description */}
      <div
        ref={descriptionRef}
        className={`text-dark textDescription ${
          showFull ? "expanded" : "collapsed"
        }`}
        style={{
          overflow: "hidden",
          maxHeight: showFull ? "none" : "4.5rem",
          textAlign: "center",
        }}
      >
        {service.description}
      </div>

      {/* Show More / Less Button */}
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
}
