import React from "react";
import Image from "next/image";

import DoctorOnDemand from "@/assets/img/doctor-on-demand.svg";

const services = [
  {
    icon: require("@/assets/img/doctor-on-demand.svg").default,
    name: "Doctor on Demand",
    href: "/doc-on-demand",
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
    icon: require("@/assets/img/elderly-home-visits.svg").default,
    name: "Elderly home visits",
    href: "/elderly-vistis",
    description:
      "Subscribe to premium health care plans designed to proactively respond to the health and wellness needs of your elderly loved ones.",
  },
  {
    icon: require("@/assets/img/care-givers.svg").default,
    name: "Care Givers",
    href: "/care-givers",
    description:
      "24/7 companionship and personal care services provided by qualified nurses and non-medical caregivers.",
  },
  {
    icon: require("@/assets/img/hmo.svg").default,
    name: "HMO",
    href: "/hmo",
    description:
      "Benefit from confidential video consultations with experienced practitioners specialized in diverse medical fields.",
  },
];

const Services = () => {
  return (
    <section className="section section--services">
      <div className="row">
        <div className="services__caption">
          <h2 className="heading heading--display">Our Services</h2>
          <p>
            Explore our bouquet of Premium health care services designed to
            provide the best possible experience for those that have shown
            greater care for us.
          </p>
        </div>

        <div className="services grid grid--3-col">
          {services.map((service) => (
            <div className="services__service">
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
      </div>
    </section>
  );
};

export default Services;
