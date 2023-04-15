import React from "react";

const steps = [
  {
    step: 1,
    name: "Register Elderly",
    description: "Create account and add details of your elderly loved one.",
  },
  {
    step: 2,
    name: "Make Payment",
    description: "Payment are in one click, and its easy to make.",
  },

  {
    step: 3,
    name: "Doctor Matched",
    description: "A Doctor is matched to your Elderly loved one within 24 hrs.",
  },

  {
    step: 4,
    name: "Doctor Visits",
    description:
      "Doctor Visits the patient at home for a health checkup, and a notification is sent to sponsor.",
  },

  {
    step: 5,
    name: "Get Medical Report",
    description:
      "After the checkup, Sponsor is sent a health report and recommendation for the patient.",
  },

  {
    step: 6,
    name: "Take Action",
    description:
      "You can get recommended drugs/lab tests yourself, or let Gerocare handle it.",
  },
];

const SimpleSteps = () => {
  return (
    <section className="section section--simple-step">
      <div className="row">
        <div className="simple-step__caption">
          <h2 className="heading heading--display">
            Get Started in simple Steps
          </h2>
        </div>

        <div className="simple-step__grid">
          {steps.map((step) => (
            <div className="simple-step__card">
              <span className="simple-step__badge">Step {step.step}</span>
              <h5 className="heading--5">{step.name}</h5>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleSteps;
