import Link from "next/link";
import React, { useState } from "react";

function truncateStr(str, max) {
  return str?.length > max ? str.slice(0, max - 1) + "..." : str;
}

const capitalizeEveryWord = (str) => {
  if (!str) return null;

  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
};

const BeneficiaryCard = ({ beneficiary = null }) => {
  const [isOpen, setIsOpen] = useState(true);
  const fields = Object.entries(beneficiary);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="beneficiary-card">
      {isOpen && (
        <div className="beneficiary-card__body">
          {fields &&
            fields?.map(([key, value], i) => (
              <div key={i} className="beneficiary-card__field">
                <span>{capitalizeEveryWord(key)}:</span>{" "}
                <span>{truncateStr(value, 23)}</span>
              </div>
            ))}
        </div>
      )}
      <div className="beneficiary-card__head">
        <Link href={"#"} className="beneficiary-card__edit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
          >
            <path
              d="M6.5 11.3334H11.375M8.9375 2.39587C9.15299 2.18039 9.44525 2.05933 9.75 2.05933C9.90089 2.05933 10.0503 2.08905 10.1897 2.14679C10.3291 2.20454 10.4558 2.28918 10.5625 2.39587C10.6692 2.50257 10.7538 2.62924 10.8116 2.76865C10.8693 2.90806 10.899 3.05748 10.899 3.20837C10.899 3.35927 10.8693 3.50869 10.8116 3.6481C10.7538 3.78751 10.6692 3.91418 10.5625 4.02087L3.79167 10.7917L1.625 11.3334L2.16667 9.16671L8.9375 2.39587Z"
              stroke="#009855"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Edit Beneficiary Details</span>
        </Link>

        <div className="beneficiary-card__icon" onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <path
              d="M5 12.5L10 7.5L15 12.5"
              stroke="#002E1A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BeneficiaryCard;
