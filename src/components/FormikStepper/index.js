import { ProgressContext } from "@/context/progress";
import { Form, Formik, useFormikContext } from "formik";
import React, { useContext, useEffect, useState } from "react";

export const FormikStep = ({ children, getFormikState, className }) => {
  const formik = useFormikContext();

  useEffect(() => {
    {
      getFormikState && getFormikState(formik);
    }
  }, [formik.values]);

  return (
    <div className={`form__step ${className ? className : ""}`}>{children}</div>
  );
};

const FormikStepper = ({ children, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(2);
  const [completed, setCompleted] = useState(false);

  const { currentProgress } = useContext(ProgressContext);

  const currentChild = childrenArray[step];

  const isLastStep = () => step === childrenArray.length - 1;

  useEffect(() => {
    currentProgress(step);
  }, [step]);

  return (
    <div className="form__stepper">
      <Formik
        {...props}
        validationSchema={currentChild.props.validationSchema}
        onSubmit={async (values, helpers) => {
          console.log("Clicked submit button");
          if (isLastStep()) {
            await props.onSubmit(values, helpers);
            setCompleted(true);
          } else {
            step >= 3 ? setStep(2) : setStep((prev) => prev + 1);
            helpers.setTouched({});
          }
        }}
      >
        {(formik) => (
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            {step >= 3 ? setStep(2) : currentChild}

            <div className="form__btns">
              <button className="btn btn--main" type="submit">
                {formik.isSubmitting
                  ? "Submitting"
                  : isLastStep()
                  ? "Submit"
                  : "Continue"}
              </button>

              {step > 0 ? (
                <button
                  className="btn btn--sec"
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                >
                  Go Back
                </button>
              ) : null}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormikStepper;
