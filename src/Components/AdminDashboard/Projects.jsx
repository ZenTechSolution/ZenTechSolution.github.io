import React, { useEffect, useState } from "react";
import { NavigationBar } from "./DashboardData";
import { ConfirmBox, AlertBox } from "../AlertBox";
import { TeamPopUp } from "./../TeamPopUp";
import { ProjectPage } from "./ProjectPage";
import { CircularProgressBar } from "./../TeamPopUp";
import axios from "axios";

let projects = [
  {
    id: 1,
    name: "Project 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illum eaque amet suscipit ipsam aperiam excepturi, ipsa aspernatur magni iste. Amet aliquam, hic deleniti ab perferendis labore sit deserunt magnam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil illum eaque amet suscipit ipsam aperiam excepturi, ipsa aspernatur magni iste. Amet aliquam, hic deleniti ab perferendis labore sit deserunt magnam",
    img_path: "./Images/Images/projectLogo.png",
    team: [{ name: "Team1 " }, { name: "team2" }, { name: "team3" }],
  },
];

export const Projects = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/getProjects", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, []);

  function handleAddProject() {
    setShowPopup(true);
  }

  return (
    <>
      <NavigationBar
        heading={selectedProject ? selectedProject.name : "Projects"}
        Addbtn={handleAddProject}
        btnName={selectedProject ? "Edit" : "Add"}
      />

      {/* Hide the grid when a project is selected */}
      <div className={`projectGridBox ${selectedProject ? "d-none" : ""}`}>
        {data.map((project) => (
          <ProjectBox
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Show ProjectPage when a project is selected */}
      {selectedProject && (
        <ProjectPage
          show={true}
          data={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Show Popup for adding a new project */}
      <ProjectPopUp
        show={showPopup}
        data={selectedProject}
        onCancel={() => setShowPopup(false)}
      />
    </>
  );
};

function ProjectBox({ project, onSelect }) {
  return (
    <div className="projectCard" onClick={() => onSelect(project)}>
      <div className="ImgBox">
        <img src={project.img_path} alt={project.name} />
      </div>
      <div className="projectCardText mt-2">
        <h3>{project.name}</h3>
        <p className="projectDescription">{project.description}</p>
        <div className="Contributors d-flex justify-content-around">
          {project.team.slice(0, 3).map((team, i) => (
            <div key={i} className="contributorName mb-2">
              {team.name}
            </div>
          ))}
        </div>
        <button
          className="btn btn-outline-danger w-100"
          onClick={(e) => {
            e.stopPropagation();
            // Delete function here
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function ProjectPopUp(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([]);
  let [heading, setHeading] = useState("Add Project");
  let [customer, setCustomer] = useState("");
  let [review, setReview] = useState("");

  useEffect(() => {
    if (props.data) {
      console.log(props.data);
      setName(props.data.name);
      setDescription(props.data.description);
      setHeading(`Edit ${props.data.name}`);
      setLink(props.data.link);
      setSelectedTeams(props.data.team);
      setReview(props.data.customer_review);
      setCustomer(props.data.customer_name);
    }
  }, [props.data]);

  if (!props.show) return null;

  const handleMediaSelection = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".png, .jpeg, .jpg"; // Only image files
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      console.log("Selected Media:", file); // Log the whole media object
      setSelectedMedia(file);
    };

    fileInput.click();
  };

  const handleOkClick = async () => {
    setIsUploading(true);

    try {
      const formData = new FormData();

      if (props.data && props.data.id) {
        formData.append("id", props.data.id); // Send ID only if updating
      }

      formData.append("name", name);
      formData.append("link", link);
      formData.append("description", description);
      formData.append("client", customer);
      formData.append("reviews", review);

      if (selectedMedia) {
        formData.append("media", selectedMedia);
      }

      // Correctly append team data as an array
      selectedTeams.forEach((team, index) => {
        formData.append(`team[${index}][id]`, team.id);
      });

      console.log(formData); // Debugging output to check data before sending

      const response = await axios.post(
        "http://127.0.0.1:8000/api/addProject",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Project updated successfully:", response.data);
      props.onCancel();
    } catch (error) {
      console.error(
        "Error updating project:"
        // error.response?.data || error.message
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleTeamSelect = (event) => {
    const selectedTeam = JSON.parse(event.target.value);

    if (
      selectedTeam &&
      !selectedTeams.some((team) => team.id === selectedTeam.id)
    ) {
      setSelectedTeams((prev) => [...prev, selectedTeam]);
    }

    console.log(selectedTeams);
  };

  const removeTeam = (team) => {
    setSelectedTeams((prev) => prev.filter((item) => item !== team));
  };

  return (
    <>
      <div className="overlay" style={{ zIndex: 2, color: "black" }}>
        <div className="alertBox mobileFormBoxes text-dark col-12 col-md-8 col-lg-4">
          <h2 className="text-center">{heading}</h2>
          <div className="d-flex flex-column w-100 gap-2 mt-4">
            {/* Project Name Input */}
            <div className="selectBar d-flex flex-column flex-md-row align-items-md-center">
              <label className="col-12 col-md-3 mb-2 mb-md-0">
                Client Name
              </label>
              <input
                type="text"
                className="border p-2 bg-light col-12 col-md-9"
                placeholder="Enter Client Name"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              />
            </div>
            <div className="selectBar d-flex flex-column flex-md-row align-items-md-center">
              <label className="col-12 col-md-3 mb-2 mb-md-0">
                Project Name
              </label>
              <input
                type="text"
                className="border p-2 bg-light col-12 col-md-9"
                placeholder="Enter Project Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="selectBar row w-100 m-auto">
              <label className="col-12 col-md-3">Review</label>
              <textarea
                className="border p-2 bg-light col-12 col-md-9"
                placeholder="Enter Reveiws"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
            {/* Project Description Input */}
            <div className="selectBar row w-100 m-auto">
              <label className="col-12 col-md-3">Description</label>
              <textarea
                className="border p-2 bg-light col-12 col-md-9"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <SelectTeams handleTeamSelect={handleTeamSelect} />

            {/* Team Select Bar */}

            <div className="selectedTeams mt-2 col-12 col-md-9 align-self-end d-flex">
              {selectedTeams.map((team, index) => (
                <div
                  key={index}
                  className="badge btn btn-outline-primary text-dark me-2 d-flex "
                >
                  <div className="m-auto">{team.name}</div>
                  <button
                    className="btn-close ms-2"
                    onClick={() => removeTeam(team)}
                    aria-label="Remove"
                  />
                </div>
              ))}
            </div>

            {/* Project Link Input */}
            <div className="selectBar d-flex flex-column flex-md-row align-items-md-center">
              <label className="col-12 col-md-3 mb-2 mb-md-0">
                Project Link
              </label>
              <input
                type="text"
                className="border p-2 bg-light col-12 col-md-9"
                placeholder="Enter Project Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className="selectBar my-2">
              <label className="col-12 col-md-3 mb-3">Project Image</label>
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
              Add
            </button>
          </div>
        </div>
      </div>
      <CircularProgressBar show={isUploading} />
    </>
  );
}

function SelectTeams({ handleTeamSelect }) {
  let [teams, setTeam] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/getTeams", {
        headers: {
          // Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTeam(response.data.data);
        // console.log(response.data.data);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        // setError("Failed to load projects");
      });
  }, []);

  return (
    <div className="selectBar d-flex flex-column flex-md-row align-items-md-center">
      <label className="col-12 col-md-3 mb-2 mb-md-0">Select Team</label>
      <select
        className="border p-2 bg-light col-12 col-md-9"
        onChange={handleTeamSelect}
      >
        <option value="">Select a Team</option>
        {teams.map((team) => (
          <option key={team.id} value={JSON.stringify(team)}>
            {team.name}
          </option>
        ))}
      </select>
    </div>
  );
}
