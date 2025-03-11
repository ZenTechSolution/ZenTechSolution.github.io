import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const About = (props) => {
  return (
    <div className="AboutUsSecction team m-0">
      <div className="div aboutUsSectionBox py-4">
        <div className="div about-heading text-light mx-4">
          <h3 className="sectionHeading text-dark">
            About <span>Me</span>
          </h3>
        </div>
        <div className="div aboutUsSection d-flex">
          <div className="div leftSection mx-4 mt-4">
            <img
              className="profileAboutImg"
              src={props.data.img_path}
              alt="profile image"
            />
          </div>
          <div className="div rightSection text-left my-0 align-self-center gap-2 mx-4">
            <h3 className="textHeading text-dark sectionHeading">
              who is{" "}
              <span className="h3">
                {props.data.first_name + " " + props.data.last_name + " "}
              </span>
              ?
            </h3>
            <p className="textDescription text-dark">
              {props.data.description}
            </p>
            <SocialMedia data={props.data} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialMedia = (props) => {
  const { facebook, linkedin, github, twitter } = props.data;

  return (
    <div className="social-media text-left mt-3">
      <h5 className="mt-5 mb-3 text-dark">Contact Me</h5>
      <div className="d-flex justify-content-left gap-4 mt-2">
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={25} className="text-secondary" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} className="text-secondary" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={25} className="text-secondary" />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter size={25} className="text-secondary" />
          </a>
        )}
      </div>
    </div>
  );
};
