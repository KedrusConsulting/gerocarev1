import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceTag = ({ service, href }) => {
  return (
    <Link className="service-tag" href={href}>
      <Image src={require("@/assets/img/circle.svg")} alt="circle icon" />
      <span>{service}</span>
    </Link>
  );
};

export default ServiceTag;
