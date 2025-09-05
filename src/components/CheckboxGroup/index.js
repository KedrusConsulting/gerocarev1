import React from "react";
import Checkbox from "../Checkbox";

const CheckboxGroup = ({ options, name, label }) => {
  return (
    <div className="checkbox__grp">
      <label className="checkbox__grp-label">{label}</label>
      {options?.map((option) => (
        <Checkbox id={option.id} label={option.label} name={name} />
      ))}
    </div>
  );
};

export default CheckboxGroup;
