import React, { useState } from "react";
import Link from "next/link";

const PaymentMethod = ({ options, name, label }) => {
  const [payNow, setPayNOw] = useState(true);

  const handlePayLater = () => {
    setPayNOw((prev) => !prev);
  };

  return (
    <div className="payment-method">
      <div className="inputfield__radio-grp">
        {payNow && (
          <>
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
                    className="inputfield__label inputfield__label-radio payment-method__label"
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
          </>
        )}

        <Link
          className="btn btn--sec payment-method__link"
          href={"#"}
          onClick={handlePayLater}
        >
          {payNow ? "Pay Later" : "See Payment Options"}
        </Link>
      </div>
    </div>
  );
};

export default PaymentMethod;
