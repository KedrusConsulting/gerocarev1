import Image from "next/image";
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
      <Image src={require("@/assets/img/circle.svg")} alt="circle icon" />
      <span>{service}</span>
    </Link>
  );
};

export default ServiceTag;
