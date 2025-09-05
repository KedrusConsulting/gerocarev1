import React from "react";

const PlanCard = ({
  duration,
  prices,
  discount,
  category,
  benefits,
  addOns,
  ...props
}) => {
  const { className, currency = "NGN" } = props;
  const styles = [
    "plan__card",
    `plan__card--${duration?.toLowerCase()}`,
    className,
  ].join(" ");

  return (
    <div className={styles} data-aos="fade-up" data-aos-duration="2000">
      <span className="plan__type">{duration}</span>

      <h2 className="plan__price heading heading--1">
        <span>
          {`${prices?.[currency.toLowerCase()]?.[0]}${
            prices?.[currency.toLowerCase()]?.length > 1
              ? `/ ${prices?.[currency.toLowerCase()]?.[1]}`
              : ""
          }`}{" "}
        </span>
        {discount && <span className="plan__discount">(-{discount})</span>}
      </h2>

      <span className="plan__category">{category}</span>

      <div className="plan__features">
        <ul>
          <h4>Visit & Duration, Core Benefits</h4>

          {benefits?.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>

        <ul>
          <h4>Optional Add-ons</h4>

          {addOns?.map((addOn, i) => (
            <li key={i}>
              <p>
                {addOn.text}{" "}
                <strong className="plan__amt">{addOn.price}</strong>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <a href="/register" className="btn btn--main">
        Start Care Plan
      </a>
    </div>
  );
};

export default PlanCard;
