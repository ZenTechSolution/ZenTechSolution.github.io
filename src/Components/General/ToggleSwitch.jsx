import React, { useState } from "react";
import Switch from "react-switch";

export const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (newChecked) => {
    setChecked(newChecked);
    if (checked === false) {
      let body = document.querySelector("body");
      body.classList.add("dark");
    } else {
      let body = document.querySelector("body");
      body.classList.remove("dark");
    }
  };

  return (
    <label className="flex items-center space-x-2">
      <Switch
        uncheckedIcon={false}
        checkedIcon={false}
        offHandleColor="#fff"
        onHandleColor="#3c3c3c"
        onColor="#6c6c6c"
        offColor="#cec86e"
        onChange={handleChange}
        checked={checked}
      />
    </label>
  );
};
