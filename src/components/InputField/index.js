import React from "react";
import { ErrorMessage } from "formik";
import ErrorText from "../ErrorText";

const InputField = ({ id, label, error, type, ...others }) => {
  const { name } = { ...others };
  return (
    <>
      <fieldset className="inputfield">
        <label className="inputfield__label" htmlFor={id}>
          {label}
        </label>
        <input className="inputfield__input" type={type} {...others} />

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
