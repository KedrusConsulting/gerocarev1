import React from "react";

const HMOPlan = ({ plan, description }) => {
  return (
    <div className="hmo-plan" data-aos="fade-up" data-aos-duration="2000">
      <h2 className="heading heading--display">{plan}</h2>
      <p>{description}</p>
    </div>
  );
};

export default HMOPlan;
