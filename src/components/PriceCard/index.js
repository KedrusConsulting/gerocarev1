import React from "react";

const PriceCard = ({ title, description, amt, label }) => {
  return (
    <div className="price__card">
      <h4 className="heading--4">{title}</h4>
      <p>{description}</p>

      <div className="price__price">
        <span className="price__amt">{amt}</span>
        <span className="price__duration">/Per Call</span>
      </div>

      <a href="/register" className="btn btn--main">
        {label}
      </a>
    </div>
  );
};

export default PriceCard;
