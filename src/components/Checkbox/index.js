import React from "react";

const Checkbox = ({ id, name, label, ...others }) => {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        name={name}
        className="checkbox__input"
        {...others}
      />

      <label htmlFor={id} className="checkbox__label-box">
        <span className="checkbox__check"></span>
        <span className="checkbox__label">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
