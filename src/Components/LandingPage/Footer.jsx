import React from "react";
import {
  FaFacebook,
  FaSquareXTwitter,
  FaSquareGithub,
  FaLinkedin,
} from "react-icons/fa6";

let footerData = {
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  github: "https://github.com",
  imgPath: "./Images/Images/user-avatar.png",
  name: "Zentech",
};

export const Footer = () => {
  return (
    <div className="footerSection d-flex justify-content-around gap-1 py-5 m-0 row d-flex gap-2">
      {/* Logo Section */}
      <div className="col-10 col-md-2 text-center mb-3">
        <div className="footerLogoImg">
          <div
            className="div bg-light"
            style={{ width: "130px", height: "130px", borderRadius: "50%" }}
          >
            <img
              className="text-light"
              src="/Images/Icons/zentech.png"
              alt="ZentechLogo"
              style={{ width: "100%", height: "100%", scale: "70%" }}
            />
          </div>
        </div>
        <h3 className="text-light footerName mt-2">{footerData.name}</h3>
        <div className="logoBox">
          <LogoBox member={footerData} />
        </div>
        <h6 className="text-light footerName mt-3">{"mail@mail.com"}</h6>
      </div>

      {/* Info Section */}
      <div className="col-10 col-md-2 mb-3" style={{ textAlign: "left" }}>
        <h3 className="text-light">Info</h3>
        <p className="text-light">
          We take pride in empowering businesses worldwide with innovative
          solutions. We bring an unwavering commitment to excellence.
        </p>
      </div>

      {/* Links Section */}
      {/* <div className="col-10 col-md-2  mb-3 footerSectionLinks">
        <h3 className="text-light m-0">Links</h3>
        <div className="text-light">
          <div>Home</div>
          <div>Services</div>
          <div>About Us</div>
          <div>Why Us</div>
          <div>Our Team</div>
          <div>Testimonial</div>
        </div>
      </div> */}

      {/* Contact Section */}
      {/* <div className="col-10 col-md-2 mb-3 footerContactSection text-light">
        <h3 className="text-light m-0">Contact Us</h3>
        <p className="footerContactText m-0">Email</p>
        <input
          className="footerInput m-0"
          type="email"
          placeholder="Enter your email"
        />
        <p className="footerContactText m-0">Message</p>
        <input className="footerInput" type="text" placeholder="Your message" />
        <button className="footerSendBtn">Send Email</button>
      </div> */}
    </div>
  );
};

// Social Media Links Component
function LogoBox({ member }) {
  return (
    <div className="social_box d-flex justify-content-start mt-3 col-6  gap-3 ">
      {member.facebook && (
        <a
          className="teamSocialLinksFooter"
          href={member.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
        </a>
      )}
      {member.twitter && (
        <a
          className="teamSocialLinksFooter"
          href={member.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter size={24} />
        </a>
      )}
      {member.github && (
        <a
          className="teamSocialLinksFooter"
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareGithub size={24} />
        </a>
      )}
      {member.linkedin && (
        <a
          className="teamSocialLinksFooter"
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      )}
    </div>
  );
}
