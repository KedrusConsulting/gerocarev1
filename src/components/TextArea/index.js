import React from "react";

const TextArea = ({ id, name, label }) => {
  return (
    <fieldset className="inputfield">
      <label className="inputfield__label" htmlFor={id}>
        {label}
      </label>
      <textarea className="inputfield__textarea" id={id} name={name}></textarea>
    </fieldset>
  );
};

export default TextArea;
