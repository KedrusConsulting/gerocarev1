import Link from "next/link";
import React from "react";

const HMOPricingCard = ({ title, subtitle, prices, href }) => {
  return (
    <div
      className="hmo__pricing-card"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h3 className="heading heading--3">{title}</h3>
      <p>{subtitle}</p>
      <div className="hmo__prices">
        <div className="hmo__prices--1">
          <span className="hmo__prices-amt">N{prices.price_1.amt}</span>
          <span className="hmo__prices-desc">{prices.price_1.description}</span>
        </div>
        <div className="hmo__prices--2">
          <span className="hmo__prices-amt">N{prices.price_2.amt}</span>
          <span className="hmo__prices-desc">{prices.price_2.description}</span>
        </div>
      </div>

      <Link href={href} className="btn btn--main">
        View Plan Details
      </Link>
    </div>
  );
};

export default HMOPricingCard;
