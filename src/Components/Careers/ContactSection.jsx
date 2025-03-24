import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";

export const ContactSection = () => {
  return (
    <div className="col-11 m-auto my-5">
      <div className="row border rounded-4 p-4 d-flex justify-content-between ">
        {/* Left Section - Description */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-4">
          <p className="text-primary fw-bold text-start">Contact</p>
          <h2 className="fw-semibold ">Get in Touch</h2>
          <p className=" mt-2">
            Have questions or need assistance? We’re here to help! Contact us
            anytime, and our team will get back to you as soon as possible.
          </p>
        </div>

        {/* Right Section - Contact Details */}
        <div className="col-md-4  rounded-4 p-4">
          <div className="d-flex align-items-center mb-3 gap-2">
            <GrMapLocation size={30} />
            <p className="mb-0 ">
              61 Jade Block Street 2, Park View City, Lahore, 54000
            </p>
          </div>
          <div className="d-flex align-items-center mb-3 gap-2">
            <IoMailOpenOutline size={30} />
            <p className="mb-0 ">zentechsol7@gmail.com</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <MdOutlinePhone size={30} />
            <p className="mb-0 ">03066673331</p>
          </div>
        </div>
      </div>
    </div>
  );
};
