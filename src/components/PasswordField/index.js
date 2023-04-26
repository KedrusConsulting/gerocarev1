import React from "react";
import { ErrorMessage } from "formik";

const PasswordField = ({ label, id, type, errors, others }) => {
  return (
    <>
      <fieldset className="inputfield">
        <label className="inputfield__label" htmlFor={id}>
          {label}
        </label>
        <input type={type} {...others} />

        {errors && (
          <ErrorMessage
            className="inputfield__error"
            component={<span>{errors.message}</span>}
          />
        )}
      </fieldset>
      ;
    </>
  );
};

export default PasswordField;
