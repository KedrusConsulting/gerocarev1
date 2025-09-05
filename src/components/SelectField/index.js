import { ErrorMessage } from "formik";
import React, { forwardRef } from "react";

const SelectField = forwardRef(({ name, id, label, error, ...others }, ref) => {
  return (
    <fieldset className="inputfield">
      <label className="inputfield__label" htmlFor={id}>
        {label}
      </label>
      <select
        ref={ref}
        className="inputfield__select"
        name={name}
        id={id}
        onChange={others?.onChange}
      >
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
});

export default SelectField;
