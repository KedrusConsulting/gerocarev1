import React from "react";

const RadioBtn = ({ id, name, label, ...others }) => {
  return (
    <fieldset className="inputfield">
      <input type="radio" id={id} name={name} className="inputfield__radio" />
      <label className="inputfield__label inputfield__label-radio" htmlFor={id}>
        <span className="inputfield__custom-radio"></span>
        <span className="inputfield__label-text">{label}</span>
      </label>
    </fieldset>
  );
};

const RadioBtnGroup = ({ options, name, label }) => {
  return (
    <div className="inputfield__radio-grp">
      <label className="inputfield__label">{label}</label>
      {options?.map((option) => (
        <RadioBtn id={option.id} name={name} label={option.label} />
      ))}
    </div>
  );
};

export default RadioBtnGroup;
