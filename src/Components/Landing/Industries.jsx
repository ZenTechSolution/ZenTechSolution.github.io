import React, { useState } from "react";
import { LuHotel } from "react-icons/lu";
import { RiHotelLine } from "react-icons/ri";
import { FaBroadcastTower } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { SlGraph } from "react-icons/sl";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaUsersViewfinder } from "react-icons/fa6";
import { RiBankLine } from "react-icons/ri";
import { SiAppsignal } from "react-icons/si";
import { LuGamepad2 } from "react-icons/lu";
import { LuHeartPulse } from "react-icons/lu";

const industriesData = [
  {
    id: 1,
    color: "#4c585b",
    name: "Travel And Hospitality",
    icon: RiHotelLine,
  },
  {
    id: 2,
    color: "#754e1a",
    name: "Public Sector",
    icon: FaUsersViewfinder,
  },
  {
    id: 3,
    color: "#77b254",
    name: "Telecommunication",
    icon: FaBroadcastTower,
  },
  {
    id: 4,
    color: "#48a6a7",
    name: "Retail And CPG",
    icon: AiOutlineShop,
  },
  {
    id: 5,
    color: "#2d336b",
    name: "Startups",
    icon: SlGraph,
  },
  {
    id: 6,
    color: "#e9762b",
    name: "E-Commerce",
    icon: RiShoppingCart2Line,
  },
  {
    id: 7,
    color: "#2d667b",
    name: "Banking",
    icon: RiBankLine,
  },
  {
    id: 8,
    name: "Fintech",
    icon: SiAppsignal,
    color: "#4d55cc",
  },
  {
    id: 9,
    color: "#543a14",
    name: "Gaming",
    icon: LuGamepad2,
  },
  {
    id: 10,
    name: "Healthcare And Pharmaceuticals",
    icon: LuHeartPulse,
    color: "#1f7d53",
  },
];
////////////////////////////////////////////
export const Industries = () => {
  return (
    <div className="col-11 mx-auto my-5">
      <p className=" text-primary fw-bold text-center">Industries</p>
      <h2 className="serviceSectionHeading mb-5 text-center">
        Discover our Impact Across Industries
      </h2>
      <div className="row g-4 justify-content-center column-gap-5">
        {industriesData.map((industry) => (
          <div
            key={industry.id}
            className="col-12 col-md-5 d-flex justify-content-center m-0 industryBoxContainer"
          >
            <IndustryBox data={industry} />
          </div>
        ))}
      </div>
    </div>
  );
};

const IndustryBox = ({ data }) => {
  const [industry] = useState(data);

  return (
    <>
      <div className="d-flex align-items-center gap-3 py-2 rounded w-100 Industry Box mt-5">
        <div className="bg-light p-2 rounded">
          <industry.icon size={40} color={industry.color} />
        </div>
        <h4 className=" m-0">{industry.name}</h4>
      </div>
    </>
  );
};
