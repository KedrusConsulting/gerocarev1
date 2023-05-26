import Section from "@/Layout/Section";
import Image from "next/image";
import React from "react";

const benefits = [
  {
    icon: require("@/assets/img/health-and-safety.svg"),
    title: "Premium Care",
    description:
      "We are passionate about every patient. So we care for them like our own parents. Our system is designed to ensure that we uphold empathy, respect, and Love in every engagement with your elderly ones.",
  },

  {
    icon: require("@/assets/img/health-and-safety.svg"),
    title: "Highly Affordable",
    description:
      "Because we are more concerned about the value of elderly care, we designed our service to be affordable for everyone.",
  },

  {
    icon: require("@/assets/img/health-and-safety.svg"),
    title: "Wide Coverage",
    description:
      "Our services extend to both urban and suburban areas. Just let us know where your loved ones are, and we’ll be there to take care of them.",
  },
];

const Benefits = () => {
  return (
    <Section sectionName={"benefits"}>
      <div className="benefits">
        <h2
          className="heading heading--display"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Why Our Paitents Love Gerocare Services
        </h2>

        <div className="benefits__grid">
          {benefits.map((benefit) => (
            <div
              className="benefits__card"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                className="benefits__icon"
                src={benefit.icon}
                alt={benefit.title}
              />

              <h6 className="heading heading--6">{benefit.title}</h6>

              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
