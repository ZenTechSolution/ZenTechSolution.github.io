import React, { useEffect, useState } from "react";
import { AlertBox } from "../AlertBox";
import axios from "axios";
////////////////////////////////////////////////
export const SocialLinksForm = (props) => {
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  //////////////////////////////////////////////////
  let [heading, setHeading] = useState("heading");
  let [description, setDescription] = useState("description");
  let [alertBox, setAlertBox] = useState(false);
  //////////////////////////////////////////////////
  useEffect(() => {
    if (props.data) {
      setFacebook(props.data.facebook);
      setGithub(props.data.github);
      setLinkedin(props.data.linkedin);
      setTwitter(props.data.twitter);
    }
  }, [props.data]);

  if (!props.show) return;

  function handleAlertBox(
    alert = false,
    heading = "Alert",
    description = "description"
  ) {
    setAlertBox(alert);
    setHeading(heading);
    setDescription(description);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/addSocialLink",
        {
          facebook,
          linkedin,
          github,
          twitter,
          id: props.data.id,
        }
      );

      console.log("Response:", response.data);
      console.log("Data:", response.data.data);

      handleAlertBox(true, "Social Links", "Social links updated successfully");
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error);
      handleAlertBox(true, "Social Links", error.response.data.message);
    }
  };

  return (
    <>
      <div className="overlay" style={{ zIndex: 2, color: "black" }}>
        <div className="alertBox">
          <h3 className="sectionHeading mb-3">Add Social Links</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Facebook</label>
              <input
                type="url"
                className="form-control"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                placeholder="Facebook"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">LinkedIn</label>
              <input
                type="url"
                className="form-control"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="LinkedIn"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">GitHub</label>
              <input
                type="url"
                className="form-control"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder="GitHub"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Twitter</label>
              <input
                type="url"
                className="form-control"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                placeholder="Twitter"
              />
            </div>
            <div className="div d-flex gap-2 justify-content-end">
              <button
                onClick={props.onCancel}
                className="btn btn-outline-danger "
              >
                Cancel
              </button>
              <button className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <AlertBox
        show={alertBox}
        heading={heading}
        description={description}
        OkClick={() => {
          setAlertBox(false);
          props.onCancel();
        }}
      />
    </>
  );
};
////////////////////////////////////////////////
export const AddSkill = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");
  const [id, setId] = useState(null);
  ////////////////////////////////////////////////////
  let [heading, setHeading] = useState("heading");
  let [alertDescription, setAlertDescription] = useState("description");
  let [alertBox, setAlertBox] = useState(false);
  ////////////////////////////////////////////////////

  useEffect(() => {
    if (props.data) {
      setName(props.data.name || "");
      setDescription(props.data.description || "");
      setId(props.data.id || null);
    }
    if (props.user) {
      setUserId(props.user.id || "");
    }

    console.log("User ID:", props.user?.id); // Debugging purpose
  }, [props.data, props.user]);

  function handleAlertBox(
    alert = false,
    heading = "Alert",
    description = "description"
  ) {
    setAlertBox(alert);
    setHeading(heading);
    setAlertDescription(description);
  }

  if (!props.show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("User ID is missing. Please try again.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/addSkill", {
        name,
        description,
        user_id: props.user.id,
        id,
      });

      console.log("Response:", response.data);
      handleAlertBox(true, "Skills", "Skills updated");
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error);
      handleAlertBox(true, "Skills", error.response.data.message);
    }
  };

  return (
    <>
      <div className="overlay" style={{ zIndex: 2, color: "black" }}>
        <div className="alertBox">
          <h3 className="sectionHeading mb-3">Add Skill</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Skill Name"
                required
              />
            </div>
            <div className=" mb-3">
              <label className="col-12 mb-2">Description</label>
              <textarea
                className="form-control"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="d-flex gap-2 justify-content-end">
              <button
                type="button"
                onClick={props.onCancel}
                className="btn btn-outline-danger"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <AlertBox
        show={alertBox}
        description={alertDescription}
        heading={heading}
        OkClick={() => {
          setAlertBox(false);
          props.onCancel();
        }}
      />
    </>
  );
};
////////////////////////////////////////////////
export const AddExperience = (props) => {
  const [name, setName] = useState("");
  const [institute, setInstitute] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [id, setId] = useState(null);
  const [userId, setUserId] = useState(null);
  //////////////////////////////////////////////
  const [heading, setHeading] = useState("Alert");
  const [alertBox, setAlertBox] = useState("description");
  const [alertDescription, setAlertDescription] = useState("description");
  //////////////////////////////////////////////
  useEffect(() => {
    if (props.data) {
      setName(props.data.name || "");
      setType(props.data.type || "");
      setInstitute(props.data.institute || "");
      setDescription(props.data.description || "");
      setFromDate(props.data.from || "");
      setToDate(props.data.to || "");
      setId(props.data.id || null);
    }

    if (props.user) {
      setUserId(props.user.id || null);
    }

    console.log("User ID:", props.user?.id); // Debugging user ID
  }, [props.data, props.user]);
  //////////////////////////////////////////////
  if (!props.show) return null;
  //////////////////////////////////////////////
  function handleAlertBox(
    openAlert = true,
    alertDescription = "description",
    heading = "heading"
  ) {
    alertBox(openAlert);
    setAlertDescription(alertDescription);
    setHeading(heading);
  }
  //////////////////////////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserId(props.user.id);

    console.log(props.user || "null");
    if (!props.user.id) {
      alert("User ID is missing. Please try again.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/addJourney",
        {
          id,
          user_id: props.user.id,
          institute,
          type,
          name,
          to: toDate,
          from: fromDate,
          description,
        }
      );
      console.log("Response:", response.data);
      handleAlertBox(true, "Experience", "Experience updated");
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error);
      handleAlertBox(true, "Experience", error.response.data.message);
    }
  };
  //////////////////////////////////////////////
  return (
    <>
      <div className="overlay" style={{ zIndex: 2, color: "black" }}>
        <div className="alertBox">
          <h3 className="sectionHeading mb-3">Add Experience</h3>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-2">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                required
              />
            </div>

            {/* Type Field */}
            <div className="mb-2">
              <label className="form-label">Type</label>
              <select
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="">Select Type</option>
                <option value="education">Education</option>
                <option value="job">Job</option>
              </select>
            </div>

            {/* Institute Field */}
            <div className="mb-2">
              <label className="form-label">Institute</label>
              <input
                type="text"
                className="form-control"
                value={institute}
                onChange={(e) => setInstitute(e.target.value)}
                placeholder="Enter Institute"
                required
              />
            </div>

            {/* Description Field */}
            <div className="mb-2">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* From & To Date Fields */}
            <div className="row mb-3">
              <div className="col-md-6 mb-2">
                <label className="form-label">From</label>
                <input
                  type="date"
                  className="form-control"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">To</label>
                <input
                  type="date"
                  className="form-control"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-2 justify-content-end">
              <button
                type="button"
                onClick={props.onCancel}
                className="btn btn-outline-danger"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <AlertBox
        show={alertBox}
        heading={heading}
        description={alertDescription}
        OkClick={() => {
          setAlertBox(false);
          props.onCancel();
        }}
      />
    </>
  );
};
////////////////////////////////////////////////
export function ProjectImageBox(props) {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  //////////////////////////////////////////////////////////
  const [heading, setHeading] = useState("alert");
  const [description, setDescription] = useState("Are you sure");
  const [alertBox, setAlertBox] = useState(false);
  //////////////////////////////////////////////////////////
  if (!props.show) return null;
  /////////////////////////////////////////////////////////
  function handleAlert(
    show = false,
    alertHeading = "Alert",
    alertDescription = "Are you sure"
  ) {
    setAlertBox(show);
    setHeading(alertHeading);
    setDescription(alertDescription);
  }
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
      let formData = {
        media: selectedMedia,
        id: props.project.id,
      };

      console.log(formData); // Debugging output to check data before sending

      const response = await axios.post(
        "http://127.0.0.1:8000/api/addProjectImg",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Project updated successfully:", response.data);

      handleAlert(true, "Project Image", "Project image added");

      props.onCancel();
    } catch (error) {
      console.error(
        "Error updating project:"
        // error.response?.data || error.message
      );
      handleAlert(true, "Project Image", "error occur try again later");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <div className="overlay" style={{ zIndex: 2, color: "black" }}>
        <div className="alertBox mobileFormBoxes text-dark col-12 col-md-8 col-lg-4">
          <h2 className="text-center">Add Project Img</h2>
          <div className="d-flex flex-column w-100 gap-2 mt-4">
            <div className="selectBar my-2">
              <button
                className="btn btn-outline-primary col-12 "
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
      <AlertBox
        show={alertBox}
        description={description}
        heading={heading}
        OkClick={() => {
          setAlertBox(false);
          props.onCancel();
        }}
      />
    </>
  );
}
////////////////////////////////////////////////
