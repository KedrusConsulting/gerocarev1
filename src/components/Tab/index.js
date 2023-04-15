import { duration } from "@mui/material";
import React, { useState } from "react";

const pricing = [
  {
    plan: "Single",
    duration: ["Quarterly", "Annually"],
    description: "For 1 Parent, 1 Address for 3 Visits valid for 3 Months.",
    amount: 45000,
    benefits: [
      "Doctor Visits",
      "Doctor takes Calls",
      "Doctor Chats with you",
      "Medical Reports",
      "Access to GeroCare App",
    ],
  },

  {
    plan: "Couple",
    duration: ["Quarterly", "Annually"],
    description: "For 2 Parents, 1 Address for 3 Visits valid for 3 Months",
    amount: 81000,
    benefits: [
      "Doctor Visits",
      "Doctor takes Calls",
      "Doctor Chats with you",
      "Medical Reports",
      "Access to GeroCare App",
    ],
  },
];

const Tabs = () => {
  const [tab, setTab] = useState(false);

  return (
    <>
      <div className="tab">
        <input type="checkbox" id="tab-switch" name="tab-switch" />
        <label
          className="tab__ctrl"
          htmlFor="tab-switch"
          onClick={() => setTab((prev) => !prev)}
        >
          <span>Quarterly Payment</span>
          <span>Annually Payment</span>
        </label>
      </div>

      <div className="tab__panel">
        <div className="pricing__table">
          {pricing.map((price) => (
            <div
              className={`pricing__plan pricing__${price.plan.toLowerCase()}`}
            >
              <h4 className="heading--4">{price.plan}</h4>

              <p>{price.description}</p>

              <div className="pricing__price">
                <span className="pricing__amt">
                  ₦{!tab ? price.amount : price.amount * 2}
                </span>
                <span className="pricing__duration">
                  {!tab ? "/Quarterly" : "/Annually"}
                </span>
              </div>

              <ul className="pricing__list">
                {price.benefits.map((benefit) => (
                  <li className="pricing__item">
                    <span className="pricing__icon">&#x2713;</span>
                    <span className="pricing__ben">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a href="/register" className="btn btn--main">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tabs;
