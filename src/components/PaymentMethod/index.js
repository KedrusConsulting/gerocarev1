import React from "react";
import RadioBtnGroup from "../RadioBtnGroup";
import Link from "next/link";

const PaymentMethod = ({ options, name, label }) => {
  return (
    <div className="payment-method">
      <div className="inputfield__radio-grp">
        <label className="inputfield__label">{label}</label>
        <div className="payment-method__method">
          {options?.map((option) => (
            <fieldset className="inputfield">
              <input
                type="radio"
                id={option.id}
                name={name}
                className="inputfield__radio"
              />
              <label
                className="inputfield__label inputfield__label-radio"
                htmlFor={option.id}
              >
                <span className="inputfield__custom-radio"></span>
                <span className="inputfield__label-text">
                  {option.paymentMethod}
                </span>
              </label>
            </fieldset>
          ))}
        </div>

        <Link className="payment-method__link" href={"#"}>
          Pay Later
        </Link>
      </div>
    </div>
  );
};

export default PaymentMethod;
