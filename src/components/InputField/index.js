import React from "react";
import { ErrorMessage } from "formik";

const InputField = ({ id, label, error, type, ...others }) => {
  const { name } = { ...others };
  return (
    <>
      <fieldset className="inputfield">
        <label className="inputfield__label" htmlFor={id}>
          {label}
        </label>
        <input className="inputfield__input" type={type} id={id} {...others} />

        {error && (
          <span className="inputfield__error">
            <ErrorMessage name={name} />
          </span>
        )}
      </fieldset>
    </>
  );
};

export default InputField;
