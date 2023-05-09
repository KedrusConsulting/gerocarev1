import Link from "next/link";
import React from "react";

const HMOPricingCard = ({ title, subtitle, prices, href }) => {
  return (
    <div className="hmo__pricing-card">
      <h3 className="heading heading--3">{title}</h3>
      <p>{subtitle}</p>
      <div className="hmo__prices">
        <div className="hmo__prices--1">
          <span></span>
          <span></span>
        </div>
        <div className="hmo__prices--2">
          <span></span>
          <span></span>
        </div>
      </div>

      <Link href={href} className="btn btn--main">
        View Plan Details
      </Link>
    </div>
  );
};

export default HMOPricingCard;
