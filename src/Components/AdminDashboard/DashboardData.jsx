import React from "react";

export const DashboardData = () => {
  return <div>DashboardData</div>;
};

export function NavigationBar(props) {
  return (
    <div className="div navigationBar bg-success d-flex justify-content-between px-2">
      <div className="heading h-auto h4">{props.heading ?? "Zentech"}</div>
      {props.Addbtn ? (
        <div className="div button">
          <div
            className="btn addBtn btn-outline-success"
            onClick={() => props.Addbtn()}
          >
            {props.btnName ?? "Add"}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
