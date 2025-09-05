import React from "react";

const steps = [
  { number: 1, name: "Account Setup" },
  { number: 2, name: "Add Beneficiary" },
  { number: 3, name: "Choose Plan" },
];

const ProgressBar = ({ value = 100 / 3 }) => {
  // Determine current step
  const getStep = (val) => {
    if (val <= 33.3333) return 1;
    if (val <= 66.6667) return 2;
    return 3;
  };

  const currentStep = getStep(value);

  return (
    <div className="progress-bar">
      <progress className="progress-bar__bar" value={value} max={100} />

      <div className="progress-bar__progress">
        <div className="progress-bar__mobile">
          Step {currentStep} of {steps.length}
        </div>

        {steps.map((step) => (
          <div
            key={step.number}
            className={`step ${
              currentStep >= step.number ? "step--active" : ""
            }`}
          >
            <span className="step__number">{step.number}.</span>
            <span className="step__name">{step.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
