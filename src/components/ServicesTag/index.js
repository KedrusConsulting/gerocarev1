import Link from "next/link";
import React from "react";

const ServiceTag = ({ service, href }) => {
  return (
    <Link
      className="service-tag"
      href={href}
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-offset="-200"
    >
      <span className="service-tag__icon"></span>
      <span>{service}</span>
    </Link>
  );
};

export default ServiceTag;
