import React, { useState } from "react";

const ProgressBar = ({ value }) => {
  // alert(value);
  return (
    <div className="progress-bar">
      <progress
        className="progress-bar__bar"
        value={value || 100 / 3}
        max={100}
        onChange={() => setStep(value)}
      ></progress>

      <div className="progress-bar__progress">
        <div className="progress-bar__mobile">
          Step{" "}
          {value > 0 && value <= 33.33336
            ? "1"
            : value >= 33.33336 && value <= 66.66667
            ? "2"
            : value >= 66.66667 && value <= 100
            ? "3"
            : "1"}{" "}
          of 3
        </div>

        <div
          className={`step ${value > 0 && value <= 100 ? "step--active" : ""}`}
        >
          <span className="step__number">1.</span>
          <span className="step__name">Create an Account</span>
        </div>

        <div
          className={`step ${
            value >= 33.33336 && value <= 100 ? "step--active" : ""
          }`}
        >
          <span className="step__number">2.</span>
          <span className="step__name">Add beneficiary</span>
        </div>

        <div
          className={`step ${
            value >= 66.66667 && value <= 100 ? "step--active" : ""
          }`}
        >
          <span className="step__number">3.</span>
          <span className="step__name">Choose Plan</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
