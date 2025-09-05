import Section from "@/Layout/Section";
import SplitScreen from "@/Layout/SplitScreen";
import Image from "next/image";
import React from "react";

const steps = [
  {
    step: 1,
    title: "Create an account",
    description: "Input your credentials to setup your personal account.",
  },
  {
    step: 2,
    title: "Add your parent or loved one",
    description: "Provide the relevant details of your beneficiary.",
  },

  {
    step: 3,
    title: "Pick a plan that works for you",
    description: "Choose a subscription plan that suits your needs.",
  },

  {
    step: 4,
    title: "Make Payment and relax",
    description: "Proceed to payment and we'll handle the rest.",
  },
];

const GetStarted = () => {
  return (
    <Section sectionName={"get-started"}>
      <div
        className="get-started__caption"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2 className="heading heading--1">How to Get Started</h2>
        <p>It takes less than 5 minutes to start care.</p>
      </div>

      <SplitScreen>
        <div
          className="get-started__img"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Image
            src={require("@/assets/img/get-started-img@4x.png")}
            alt="get started img"
          />
        </div>
        <div className="get-started__steps">
          {steps.map((step, i) => (
            <div
              key={i}
              className="get-started__step"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span>{step.step}</span>

              <div className="step">
                <h6 className="heading heading--6">{step.title}</h6>
                <p>Input your credentials to setup your personal account</p>
              </div>
            </div>
          ))}

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            // data-aos-once="true"
            style={{ marginTop: "3.2rem" }}
          >
            <a href="/register" className="btn btn--primary">
              Start Care Plan Today
            </a>
          </div>
        </div>
      </SplitScreen>
    </Section>
  );
};

export default GetStarted;
