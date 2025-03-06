import React, { useEffect } from "react";

export const ConfirmBox = ({
  heading = "Alert",
  description = "Are you sure ?",
  onConfirm = () => console.log("Open Btn"),
  onCancel = () => console.log("close Btn"),
  show = true,
}) => {
  useEffect(() => {
    console.log("AlertBox show state:", show);
  }, [show]);
  if (!show) return null;

  return (
    <div className="overlay" style={{ zIndex: 2, color: "black" }}>
      <div className="alertBox">
        <h2>{heading}</h2>
        <p>{description}</p>
        <div className="buttonContainer">
          <button onClick={onCancel} className="button btn btn-outline-danger">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="button btn btn-outline-primary"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export const AlertBox = ({
  heading = "Alert",
  description = "Are you sure?",
  OkClick = () => console.log("close"),
  show = true,
}) => {
  useEffect(() => {
    console.log("AlertBox show state:", show);
  }, [show]);
  if (!show) return null;

  return (
    <div className="overlay" style={{ zIndex: 2, color: "black" }}>
      <div className="alertBox">
        <h2>{heading}</h2>
        <p>{description}</p>
        <div className="buttonContainer">
          <button onClick={OkClick} className="button btn btn-outline-primary">
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};
