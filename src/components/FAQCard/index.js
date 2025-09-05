import React, { useEffect, useRef, useState } from "react";

function FAQCard({ title, body, open, handleOpen }) {
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className={`faqs__faq`}>
        <div className="faqs__title" onClick={handleOpen}>
          <h5 className="heading heading--5">{title}</h5>

          <svg
            className="faqs__open"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#00542f"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
          </svg>

          <svg
            className="faqs__close hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#00542f"
            viewBox="0 0 256 256"
          >
            <path d="M176,128a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,128Zm56,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
          </svg>
        </div>

        <div className="faqs__body">
          <p className="faqs__answer">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQCard;
