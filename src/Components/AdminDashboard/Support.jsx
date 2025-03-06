import React, { useEffect, useState } from "react";
import { NavigationBar } from "./DashboardData";

let support = [
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 1,
    email: "mail@mail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ex! Atque beatae, hic tenetur deserunt, magnam nulla numquam neque, maxime autem a amet corporis ipsa perspiciatis id impedit ullam cumque!",
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export const Support = () => {
  return (
    <>
      <NavigationBar heading="Support" />
      <div className="container-fluid mt-1">
        <div className="supportList">
          {/* Header Row */}
          <div className="supportRow supportHeader d-flex">
            <div className="supportCol col-sm-2 col-4">Email</div>
            <div className="supportCol col-sm-4 col-6">Message</div>
            <div className="supportCol col-sm-3 col-6">Date</div>
            <div className="supportCol col-sm-3 col-6">Actions</div>
          </div>

          {/* Data Rows */}
          {support.map((item, index) => (
            <SupportBox key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
// /////////////////////////////////////////////////

const SupportBox = ({ item }) => {
  let [show, setShow] = useState(false);
  return (
    <>
      <div className="supportRow d-flex flex-wrap">
        <div className="supportCol col-sm-2 col-4">{item.email}</div>
        <div className="supportCol supportDescription col-sm-4 col-6">
          {item.description}
        </div>
        <div className="supportCol col-sm-3 col-6">
          {formatDate(item.created_at)}
        </div>
        <div className="supportCol col-sm-3 col-6 d-flex flex-wrap justify-content-center">
          <button className="btn btn-danger m-2 btn-sm col-sm-5 col-5">
            Delete
          </button>
          <button
            className="btn btn-primary m-2 btn-sm col-sm-5 col-5"
            onClick={() => setShow(true)}
          >
            Reply
          </button>
        </div>
      </div>
      <SupportPopUP show={show} onCancel={() => setShow(false)} mail={item} />
    </>
  );
};

// /////////////////////////////////////////////////
function SupportPopUP(props) {
  const [Subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    // Placeholder for future logic, if needed
  }, []);

  if (!props.show) return null;

  const handleOkClick = async () => {
    const formData = {
      Subject,
      description,
    };

    console.log("Form Data:", formData); // Log entire form data
    setIsUploading(true);
  };

  return (
    <div className="overlay" style={{ zIndex: 2, color: "black" }}>
      <div className="alertBox mobileFormBoxes text-dark col-12 col-md-8 col-lg-4">
        <h2>{"Send Email"}</h2>
        <div className="d-flex flex-column w-100 gap-2 mt-4">
          {/* Name Input */}
          <div className="selectBar d-flex flex-column flex-md-row align-items-md-center">
            <label className="col-12 col-md-3 mb-2 mb-md-0">Mail</label>
            <input
              type="text"
              className="border p-2 bg-light col-12 col-md-9"
              placeholder="Enter Subject"
              value={props.mail.email ?? "support@mail.com"}
              onChange={(e) => setSubject(e.target.value)}
              disabled={true}
            />
          </div>{" "}
          <div className="selectBar d-flex flex-column flex-md-row align-items-md-center">
            <label className="col-12 col-md-3 mb-2 mb-md-0">Subject</label>
            <input
              type="text"
              className="border p-2 bg-light col-12 col-md-9"
              placeholder="Enter Subject"
              value={Subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          {/* Description Input */}
          <div className="selectBar row w-100 m-auto">
            <label className="col-12 col-md-3 p-0">Description</label>
            <textarea
              className="border p-2 bg-light col-12 col-md-9"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="buttonContainer">
          <button
            onClick={props.onCancel}
            className="btn btn-outline-danger"
            disabled={isUploading}
          >
            Cancel
          </button>
          <button
            onClick={handleOkClick}
            className="btn btn-outline-success"
            disabled={isUploading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export function formatDate(date) {
  if (!date) return "";

  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
}
