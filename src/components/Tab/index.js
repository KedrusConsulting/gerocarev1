import { duration } from "@mui/material";
import React, { useState } from "react";

const pricing = [
  {
    plan: "Single",
    duration: ["Quarterly", "BI Annually", "Annually"],
    description: {
      monthly: "For 1 Parent, 1 Address for 3 Visits valid for 3 Months.",
      biannually: "For 1 Parent, 1 Address for 6 Visits valid for 6 Months.",
      annually: "For 1 Parent, 1 Address for 12 Visits valid for 12 Months",
    },

    amount: {
      quaterly: ["45,000", "90.00"],
      biannually: ["90,000", "180.00"],
      annually: ["162,000", "324.00"],
    },
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
    duration: ["Quarterly", "BI Annually", "Annually"],
    description: {
      monthly: "For 2 Parents, 1 Address for 3 Visits valid for 3 Months",
      biannually: "For 2 Parents, 1 Address for 6 Visits valid for 6 Months",
      annually: "For 2 Parents, 1 Address for 12 Visits valid for 12 Months",
    },

    amount: {
      quaterly: ["81,000", "160.00"],
      biannually: ["162,000", "324.00"],
      annually: ["292,000", "584.00"],
    },
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
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="tab" data-aos="fade-up" data-aos-duration="2000">
        <div className="tab__ctrl">
          <button
            className={`tab__btn tab__btn--1 ${
              tab === 0 ? "tab__btn--active" : ""
            }`}
            onClick={() => setTab(0)}
          >
            Quarterly Payment
          </button>
          <button
            className={`tab__btn tab__btn--2 ${
              tab === 1 ? "tab__btn--active" : ""
            }`}
            onClick={() => setTab(1)}
          >
            BI Annual Payment
          </button>
          <button
            className={`tab__btn tab__btn--3 ${
              tab === 2 ? "tab__btn--active" : ""
            }`}
            onClick={() => setTab(2)}
          >
            Annually Payment
          </button>
        </div>
      </div>

      <div className="tab__panel">
        <div className="pricing__table">
          {pricing.map((price) => (
            <div
              className={`pricing__plan pricing__${price.plan.toLowerCase()}`}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4 className="heading--4">{price.plan}</h4>

              <p>
                {tab === 0 && price.description.monthly}
                {tab === 1 && price.description.biannually}
                {tab === 2 && price.description.annually}
              </p>

              <div className="pricing__price">
                <span className="pricing__amt">
                  ₦{tab === 0 && price.amount.quaterly[0]}
                  {tab === 1 && price.amount.biannually[0]}
                  {tab === 2 && price.amount.annually[0]}
                </span>
                <span className="pricing__duration">
                  {tab === 0 && "/Quarterly"}
                  {tab === 1 && "/BIannually"}
                  {tab === 2 && "/Annually"}
                </span>

                <span className="pricing__amt-dollar">
                  (${tab === 0 && price.amount.quaterly[1]}
                  {tab === 1 && price.amount.biannually[1]}
                  {tab === 2 && price.amount.annually[1]})
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
