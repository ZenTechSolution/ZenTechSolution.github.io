import React, { useEffect, useState } from "react";
import { NavigationBar } from "./DashboardData";
import axios from "axios";
import { CircularProgressBar } from "../TeamPopUp";

let services = [
  {
    id: 1,
    name: "name1",
    img_path: "/Images/Icons/icon.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facilis autem impedit voluptatum debitis doloribus libero.  ",
  },
];

export const Services = () => {
  let [show, setShow] = useState(false);
  let [data, setData] = useState(services);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/getServices", {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        // setError("Failed to load projects");
      });
  }, []);

  function Addbtn() {
    setShow(true);
  }
  return (
    <>
      <NavigationBar heading={"Services"} Addbtn={Addbtn} />
      <div className="projectGridBox mt-4">
        {data.map((service) => (
          <ServiceBox key={service.id} service={service} />
        ))}
      </div>

      <ServicePopUp show={show} onCancel={() => setShow(false)} />
    </>
  );
};

function ServiceBox(props) {
  let [show, setShow] = useState(false);

  function deleteFunction(e) {
    e.stopPropagation();
  }

  return (
    <>
      <div className="div serviceCard d-flex" onClick={() => setShow(true)}>
        <div className="div serviceLeftSection ">
          <div className="div serviceImgBox">
            <img src={props.service.img_path} alt="Project Name" />
          </div>
          <h3 className="serviceName mt-1 m-auto">{props.service.name}</h3>
        </div>
        <div className="div ">
          <p className="serviceDescriptionDahboard">
            {props.service.description}
          </p>
          <button
            className="btn  btn-outline-danger my-2 align-self-end w-100"
            onClick={(e) => deleteFunction(e)}
          >
            Delete
          </button>
        </div>
      </div>
      <ServicePopUp
        show={show}
        data={props.service}
        onCancel={() => setShow(false)}
      />
    </>
  );
}

function ServicePopUp(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("Description");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (props.data) {
      setName(props.data.name || "");
      setDescription(props.data.description || "Description");
    }
  }, [props.data]);

  if (!props.show) return null;

  const handleMediaSelection = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".png, .jpeg, .jpg"; // Only image files
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      console.log("Selected Media:", file);
      setSelectedMedia(file);
    };
    fileInput.click();
  };

  const handleOkClick = async () => {
    setIsUploading(true);

    try {
      const formData = new FormData();

      if (props.data?.id) {
        formData.append("id", props.data.id); // Only append if updating
      }

      formData.append("name", name);
      formData.append("description", description);

      if (selectedMedia) {
        formData.append("media", selectedMedia);
      }

      console.log("Form Data:", Object.fromEntries(formData.entries())); // Debugging

      const response = await axios.post(
        "http://127.0.0.1:8000/api/addService",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Service saved successfully:", response.data);
      props.onCancel();
    } catch (error) {
      console.error(
        "Error saving service:",
        error.response?.data || error.message
      );
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <div className="overlay" style={{ zIndex: 2, color: "black" }}>
        <div className="alertBox mobileFormBoxes text-dark col-12 col-md-8 col-lg-4">
          <h2>{props.data?.id ? "Edit Service" : "Add New Service"}</h2>
          <div className="d-flex flex-column w-100 gap-2 mt-4">
            {/* Service Name Input */}
            <div className="selectBar d-flex flex-column flex-md-row align-items-md-center">
              <label className="col-12 col-md-3 mb-2 mb-md-0">Name</label>
              <input
                type="text"
                className="border p-2 bg-light col-12 col-md-9"
                placeholder="Enter Service Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Service Description Input */}
            <div className="selectBar row w-100 m-auto">
              <label className="col-12 col-md-3 p-0">Description</label>
              <textarea
                className="border p-2 bg-light col-12 col-md-9"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Media Selection */}
            <div className="selectBar my-2">
              <label className="col-12 col-md-3 mb-3">Image</label>
              <button
                className="btn btn-outline-primary col-12 col-md-9"
                onClick={handleMediaSelection}
                disabled={isUploading}
              >
                {selectedMedia ? selectedMedia.name : "Choose File"}
              </button>
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
              {props.data?.id ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
      <CircularProgressBar show={isUploading} />
    </>
  );
}
