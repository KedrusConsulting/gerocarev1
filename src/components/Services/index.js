import React from "react";
import Image from "next/image";

import Section from "@/Layout/Section";

const services = [
  {
    icon: require("@/assets/img/elderly-home-visits.svg").default,
    name: "Regular Doctor Home Visits",
    href: "/elderly-care",
    description:
      "Subscribe to premium health care plans designed to proactively respond to the health and wellness needs of your elderly loved ones.",
  },

  {
    icon: require("@/assets/img/doctor-on-demand.svg").default,
    name: "Doctor on Demand",
    href: "/doctor-on-demand",
    description:
      "Access urgent care from our top-rated doctors in minutes. Schedule a session with three simple steps.",
  },
  {
    icon: require("@/assets/img/teleconsultation.svg").default,
    name: "Teleconsultation",
    href: "/teleconsultation",
    description:
      "Benefit from confidential video consultations with experienced practitioners specialized in diverse medical fields.",
  },

  {
    icon: require("@/assets/img/care-givers.svg").default,
    name: "Care Givers",
    href: "/care-giver",
    description:
      "24/7 companionship and personal care services provided by qualified nurses and non-medical caregivers.",
  },
  {
    icon: require("@/assets/img/hmo.svg").default,
    name: "HMO",
    href: "/hmo",
    description:
      "Access our HMO plans specially  packed for your Elderly Loved ones with adequate resources for improving their health and general well-being.",
  },
];

const Services = () => {
  return (
    <Section sectionName={"services"}>
      <div
        className="services__caption"
        data-aos="fade-up"
        data-aos-duration="2000"
        // data-aos-once="true"
      >
        <h2 className="heading heading--1">
          You won't always be there. That's why we are.
        </h2>
        <p>
          No matter where you live, Gerocare make it easy for your
          parents&mdash;without stress, guilt, or fear. Here's how we help:
        </p>
      </div>

      <div className="services grid grid--3-col">
        {services.map((service, i) => (
          <div
            key={i}
            className="services__service"
            data-aos="fade-up"
            data-aos-duration="2000"
            // data-aos-once="true"
          >
            <Image
              className="services__icon"
              src={service.icon}
              alt={service.name}
            />
            <h6 className="heading heading--6">{service.name}</h6>
            <p className="services__description">{service.description}</p>
            <a className="services__link" href={service.href}>
              See Pricing
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
