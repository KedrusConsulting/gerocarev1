import Section from "@/Layout/Section";
import React from "react";

const CTA = () => {
  return (
    <Section sectionName={"cta"}>
      <div className="cta">
        <h2 className="heading heading--display">
          Have A Passion To Serve the Elderly?{" "}
        </h2>

        <p>
          If you are a qualified doctor or nurse, or a certified healthcare
          provider looking for an opportunity to help deliver quality medical
          services for the elderly, we welcome you to join our growing family of
          committed medical professionals
        </p>

        <a href="/register" className="btn btn--main cta__btn">
          Register as a Doctor
        </a>
      </div>
    </Section>
  );
};

export default CTA;
