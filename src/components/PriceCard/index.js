import React from "react";

const PriceCard = ({ title, description, nairaAmt, dollarAmt = 0, label }) => {
  return (
    <div className="price__card" data-aos="fade-up" data-aos-duration="2000">
      <h4 className="heading--4">{title}</h4>
      <p>{description}</p>

      <div className="price__price">
        <span className="price__amt">{nairaAmt}</span>
        <span className="price__duration">/Per Call</span>
        <span className="pricing__amt-dollar">(${dollarAmt.toFixed(2)})</span>
      </div>

      <a href="/register" className="btn btn--main">
        {label}
      </a>
    </div>
  );
};

export default PriceCard;
