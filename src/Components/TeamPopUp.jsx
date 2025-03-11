import React, { useEffect, useState } from "react";
import { AlertBox } from "./AlertBox";
import axios from "axios";

export function TeamPopUp({ show, team, onCancel, onSave, ...props }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [startDate, setStartDate] = useState("");
  const [role, setRole] = useState("");
  const [selectedMedia, setSelectedMedia] = useState();
  const [isUploading, setIsUploading] = useState(false);
  let [roleDisable, setRoleDisable] = useState(false);
  let [description, setDescription] = useState("");
  let [id, setId] = useState(null);
  //////////////////////////////////////////////////
  let [heading, setHeading] = useState("Alert");
  let [alertDescription, setAlertDescription] = useState("Are You Sure");
  let [alertBox, setAlertBox] = useState(false);
  //////////////////////////////////////////////////
  const isEditMode = !!team;

  // Populate form in edit mode
  useEffect(() => {
    if (show && team) {
      setId(team.id || null);
      setFname(team.first_name || "");
      setLname(team.last_name || "");
      setStartDate(team.dob || "");
      setRole(team.role || "");
      setPassword(team.password_text || "");
      setEmail(team.email || "");
      setSelectedMedia(null);
      setRoleDisable(team.role == "admin" ? true : false);
      setDescription(team.description);
    } else {
      // Reset fields for add mode
      setFname("");
      setLname("");
      setStartDate("");
      setRole("");
      setSelectedMedia(null);
      setDescription("");
    }
  }, [show, team]);

  if (!show) return null;

  function handleAlertBox(
    showAlert = false,
    heading = "heading",
    description = "description"
  ) {
    setAlertBox(showAlert);
    setAlertDescription(description);
    setHeading(heading);
  }

  const handleMediaSelection = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".png, .jpeg, .jpg"; // Accept only images
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      setSelectedMedia(file);
    };
    fileInput.click();
  };

  const handleSave = async () => {
    setIsUploading(true);

    try {
      // const formData = new FormData();

      let formData = {
        id,
        first_name: fname,
        last_name: lname,
        email,
        password,
        role,
        description,
        media: selectedMedia,
      };

      // console.log(formData);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/addTeam",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.data.success) {
        handleAlertBox(true, "Team", "Team Member Added");
        props.update(response.data.user);
      }
      console.log("Project updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating project:" + error.response.data.message);
      handleAlertBox(true, "Team", error.response.data.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <div className="overlay" style={{ zIndex: 2, color: "black" }}>
        <div className="alertBox mobileFormBoxes teamPopup text-dark col-12 col-md-8 col-lg-4">
          <h2 className="text-center">
            {isEditMode ? `Edit ${fname} ${lname}` : "Add New Team"}
          </h2>

          <div className="d-flex flex-column w-100 gap-2">
            {/* Name Input */}
            <div className="selectBar d-flex flex-column flex-md-row align-items-md-center">
              <label className="col-12 col-md-3 mb-2 mb-md-0">Name</label>
              <div className="col-12 col-md-9 d-flex flex-md-row">
                <input
                  type="text"
                  className="border p-2 bg-light col-6 col-md-6 mb-1"
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                <input
                  type="text"
                  className="border p-2 bg-light col-6 col-md-6 mb-1"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>

            {/* Birth Date */}
            <div className="selectBar">
              <label className="col-12 col-md-3">Birth Date</label>
              <input
                type="date"
                className="border p-2 bg-light col-12 col-md-9"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {/* Role Input */}
            <div className="selectBar">
              <label className="col-md-3 col-12">Role</label>
              <input
                className="border p-2 bg-light col-md-9 col-12"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                disabled={roleDisable}
              />
            </div>
            <div className="selectBar row w-100 m-auto">
              <label className="col-12 col-md-3">Description</label>
              <textarea
                className="border p-2 bg-light col-12 col-md-9"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="selectBar">
              <label className="col-md-3 col-12">Email</label>
              <input
                className="border p-2 bg-light col-md-9 col-12"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="selectBar">
              <label className="col-md-3 col-12">Password</label>
              <input
                className="border p-2 bg-light col-md-9 col-12"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Image Upload */}
            <div className="selectBar my-2">
              <label className="col-12 col-md-3 mb-3"> Image</label>
              <button
                className="btn btn-outline-primary col-12 col-md-9"
                onClick={handleMediaSelection}
                disabled={isUploading}
              >
                {selectedMedia
                  ? selectedMedia.name || "Change File"
                  : "Choose File"}
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="buttonContainer">
            <button
              onClick={onCancel}
              className="btn btn-outline-danger"
              disabled={isUploading}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="btn btn-outline-success"
              disabled={isUploading}
            >
              {isEditMode ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
      <CircularProgressBar show={isUploading} />
      <AlertBox
        show={alertBox}
        heading={heading}
        description={alertDescription}
        OkClick={() => {
          setAlertBox(false);
          onCancel();
        }}
      />
    </>
  );
}

export function CircularProgressBar({ show }) {
  if (!show) return;
  return (
    <div className="overlay" style={{ zIndex: 2, color: "black" }}>
      <span class="spinner-border spinner-border-sm"></span>
      <h3 className="spinnerText">Please Wait</h3>
    </div>
  );
}
