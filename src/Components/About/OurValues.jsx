import { useState } from "react";
import { FaRegHandshake } from "react-icons/fa6";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { LuScanSearch } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";

const values = {
  profile: {
    miniHeading: "Our Values",
    heading: "We Believe in Providing Values.",
  },
  visions: [
    {
      icon: TbAdjustmentsHorizontal,
      name: "Ship & Iterate",
      description:
        "We move swiftly, refining our approach with every step to maintain a leading edge.",
    },
    {
      icon: FaRegHandshake,
      name: "Trusted Pair of Hands",
      description:
        "Dependable and steadfast, we are always there when it matters most.",
    },
    {
      icon: SlBadge,
      name: "Overdeliver on the Promise",
      description:
        "Exceeding expectations is our standard, going beyond what’s assured.",
    },
    {
      icon: LuScanSearch,
      name: "Clear is Kind",
      description:
        "Transparent, honest communication keeps everyone on the same page.",
    },
  ],
};

export const OurValues = () => {
  const [data] = useState(values);

  return (
    <div className="col-11 m-auto my-5">
      <div className="text-center">
        <p className="text-primary fw-bold text-center">
          {data.profile.miniHeading}
        </p>
        <h2 className="fw-bold">{data.profile.heading}</h2>
      </div>

      <div className="row justify-content-center mt-4">
        {data.visions.map((item, index) => (
          <div
            key={index}
            className="col-6 col-md-3 d-flex justify-content-center"
          >
            <ValueBox value={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ValueBox = ({ value }) => {
  return (
    <div
      className="shadow-lg rounded-lg p-4 aboutValueBox text-center rounded mb-3"
      style={{ height: "350px" }}
    >
      <div className="our-values-icons mb-4 d-flex justify-content-center">
        <value.icon size={60} />
      </div>
      <h3 className="heading-style-h5">{value.name}</h3>
      <p>{value.description}</p>
    </div>
  );
};
