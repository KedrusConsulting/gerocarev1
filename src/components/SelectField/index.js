import { ErrorMessage } from "formik";
import React from "react";

const SelectField = ({ name, id, label, error, ...others }) => {
  return (
    <fieldset className="inputfield">
      <label className="inputfield__label" htmlFor={id}>
        {label}
      </label>
      <select className="inputfield__select" name={name} id={id}>
        {others?.options?.map((option, i) => (
          <option key={i} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>

      {error && (
        <span className="inputfield__error">
          <ErrorMessage name={name} />
        </span>
      )}
    </fieldset>
  );
};

export default SelectField;
