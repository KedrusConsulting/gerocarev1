import Section from "@/Layout/Section";
import React from "react";

const CTA = () => {
  return (
    <Section sectionName={"cta"}>
      <div className="cta">
        <h2
          className="heading heading--display"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Work as a Gerocare Doctor{" "}
        </h2>

        {/* <p data-aos="fade-up" data-aos-duration="2000">
          If you are a qualified doctor or nurse, or a certified healthcare
          provider looking for an opportunity to help deliver quality medical
          services for the elderly, we welcome you to join our growing family of
          committed medical professionals
        </p> */}

        <a
          href="/doctors-registration"
          className="btn btn--main cta__btn"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Register as a Doctor
        </a>
      </div>
    </Section>
  );
};

export default CTA;
