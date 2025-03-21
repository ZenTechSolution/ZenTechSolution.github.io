import React from "react";
import "./../../Css/General.css";

export const General = () => {
  return <div>General</div>;
};

export function PrimaryBtn(props) {
  return (
    <button
      className={`btn btn-primary PrimaryBtn m-auto`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}

export function PrimaryBtnOutline(props) {
  return (
    <button className={`btn PrimaryBtnOutline m-auto`} onClick={props.onClick}>
      {props.name}
    </button>
  );
}
