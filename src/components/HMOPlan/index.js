import React from "react";

const HMOPlan = ({ plan, description }) => {
  return (
    <div className="hmo-plan">
      <h2 className="heading heading--display">{plan}</h2>
      <p>{description}</p>
    </div>
  );
};

export default HMOPlan;
