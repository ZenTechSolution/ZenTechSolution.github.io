import React from "react";
import { PrimaryBtn } from "./../General/General";

export const CareerSection = () => {
  return (
    <div className="is-career">
      <div className="is-home-career py-5">
        <div className="col-11 mx-auto">
          <div className="row d-flex align-items-center">
            {/* Video Section */}
            <div className="col-12 col-md-6">
              <div className="career-image is-animate">
                <div className="full-image w-background-video w-background-video-atom">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-100 rounded"
                    style={{ objectFit: "cover", height: "100%" }}
                  >
                    <source src="/Images/Videos/meeting.mp4" />
                  </video>
                </div>
              </div>
            </div>

            {/* Text Content Section */}
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <div className="text-start text-md-start">
                <p className="text-primary fw-bold">Careers</p>
                <div className="py-2"></div>
                <h2 className="serviceSectionHeading mb-3">
                  Human-first is our foundation.
                </h2>
                <div className="py-2"></div>
                <p className="fs-5">
                  Join a culture that celebrates excellence and diversity,
                  Globally!
                </p>
                <div className="py-3"></div>
                <PrimaryBtn name={"Join"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
