import React, { useEffect, useState } from "react";
import "./../../Css/Classes.css";
import "./../../Css/DarkMode.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrimaryBtn } from "./General";
import { ToggleSwitch } from "./ToggleSwitch";
import { RiMenu4Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

////////////////////////////////////////////////////
export const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (event) => {
    event.stopPropagation(); // Fix: Prevents immediate close
    setActiveDropdown(!activeDropdown);
  };

  const closeDropdown = () => setActiveDropdown(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".nav-container")) {
        setActiveDropdown(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className="NavigationBar text-white d-flex p-2 justify-content-between nav-container">
        {/* Logo & Dark Mode Toggle */}
        <div className="imgBox d-flex gap-3 align-items-center">
          <img
            onClick={() => navigate("/")}
            style={{ width: "70px", height: "70px", borderRadius: "20%" }}
            src="/Images/Icons/logo.png"
            alt="Logo"
          />
          <ToggleSwitch />
        </div>

        {/* Desktop Navigation (Hidden on Small Screens) */}
        <div className="d-none d-md-flex justify-around align-items-center">
          <h4
            className="px-4 py-2 rounded cursor-pointer navItemLink text-d"
            onClick={toggleDropdown}
          >
            What We Serve ▼
          </h4>
          {activeDropdown && <NavDropdown />}{" "}
          <h4 className="px-4 py-2 rounded cursor-pointer navItemLink text-d">
            Teams
          </h4>
          <h4 className="px-4 py-2 rounded cursor-pointer navItemLink text-d">
            Projects
          </h4>
          <h4 className="px-4 py-2 rounded cursor-pointer navItemLink text-d">
            Careers
          </h4>
          <h4
            className="px-4 py-2 rounded cursor-pointer navItemLink text-d"
            onClick={() => navigate("/about")}
          >
            About Us
          </h4>
          {/* Dropdown inside desktop nav */}
          <PrimaryBtn
            name="Contact Us"
            onClick={() => {
              navigate("/contact");
            }}
          />
        </div>

        {/* Burger Menu (Visible on Small Screens) */}
        <div className="d-md-none align-self-center">
          <button
            className="burger-menu btn text-white"
            onClick={toggleMobileMenu}
          >
            <RiMenu4Fill size={28} color="black" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav bg-light text-white p-3">
          <h4
            className="py-2 cursor-pointer navItemLink text-d"
            onClick={toggleDropdown} // Stop propagation to prevent auto-close
          >
            What We Serve? ▼
          </h4>
          {activeDropdown && <NavDropdown />}{" "}
          {/* Dropdown inside mobile menu */}
          {["NavItem2", "NavItem3", "NavItem4", "NavItem5"].map(
            (item, index) => (
              <h4
                key={index}
                className="py-2 cursor-pointer navItemLink text-dark"
              >
                {item}
              </h4>
            )
          )}
          <PrimaryBtn
            name="Contact Us"
            onClick={() => {
              console.log("hello");
            }}
          />
        </div>
      )}
    </>
  );
};
////////////////////////////////////////////////////
export const NavDropdown = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let jsonResponse = localStorage.getItem("nav-services");
    let jsonObj = JSON.parse(jsonResponse);
    let response = Object.values(formatServices(jsonObj));
    setData(response);
  }, []);

  function navigatePage(id) {
    navigate(`/services/${id}`);
    window.location.reload();
  }

  return (
    <div className="NavDropDown text-dark shadow-lg p-4">
      {/* Responsive Column Layout */}
      <div className="row justify-content-center gap-md-4 gap-3">
        {/* First Column */}
        <div className="col-12 col-md-5 d-flex flex-column gap-3">
          {data
            .filter((_, index) => index % 2 === 0) // Even index items
            .map((item, index) => (
              <div key={index} className="">
                {Array.isArray(item) ? (
                  <>
                    <h2 className="fs-5 fw-bold">{item[0].tag}</h2>
                    {item.map((subItem, subIndex) => (
                      <p
                        key={subIndex}
                        className="p-2 hover-bg-secondary cursor-pointer m-0"
                        onClick={() => navigatePage(subItem.id)}
                      >
                        {subItem.name}
                      </p>
                    ))}
                  </>
                ) : (
                  <h2
                    className="fs-5 fw-bold hover-bg-secondary cursor-pointer"
                    onClick={() => navigatePage(item.id)}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {item.name}
                  </h2>
                )}
              </div>
            ))}
        </div>

        {/* Second Column */}
        <div className="col-12 col-md-5 d-flex flex-column gap-3">
          {data
            .filter((_, index) => index % 2 !== 0) // Odd index items
            .map((item, index) => (
              <div key={index} className="">
                {Array.isArray(item) ? (
                  <>
                    <h2 className="fs-5 fw-bold">{item[0].tag}</h2>
                    {item.map((subItem, subIndex) => (
                      <p
                        key={subIndex}
                        className="p-2 hover-bg-secondary cursor-pointer m-0"
                        onClick={() => navigatePage(subItem.id)}
                      >
                        {subItem.name}
                      </p>
                    ))}
                  </>
                ) : (
                  <h2
                    className="fs-5 fw-bold  hover-bg-secondary cursor-pointer"
                    onClick={() => navigatePage(item.id)}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {item.name}
                  </h2>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
////////////////////////////////////////////////////
function formatServices(services) {
  return services.reduce((acc, service) => {
    let { name, price, tag } = service;

    if (!tag) {
      acc[name] = service;
    } else {
      let formattedTag = tag.toLowerCase();

      if (!acc[formattedTag]) {
        acc[formattedTag] = [];
      }
      acc[formattedTag].push(service);
    }

    return acc;
  }, {});
}
////////////////////////////////////////////////////
