import React from "react";
import Image from "next/image";

import Section from "@/Layout/Section";

import doctor_img from "@/assets/img/become-a-doctor.png";

const CTA = () => {
  return (
    <Section sectionName={"cta"}>
      <div className="cta">
        <h2
          className="heading heading--1"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Work as a Gerocare Doctor{" "}
        </h2>

        <a
          href="/doctors-registration"
          className="btn btn--main cta__btn"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Register as a Doctor
        </a>

        <Image
          className="cta__img"
          src={doctor_img}
          alt="Register as a Doctor"
          data-aos="fade-up"
          data-aos-duration="2000"
        />

        <div className="cta__rect cta__rect--1"></div>
        <div className="cta__rect cta__rect--2"></div>
      </div>
    </Section>
  );
};

export default CTA;
