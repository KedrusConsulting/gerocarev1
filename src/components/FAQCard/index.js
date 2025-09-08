import React, { useEffect, useRef } from "react";

function FAQCard({ title, body, open, handleOpen }) {
  const bodyRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const el = bodyRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const onTransitionEnd = () => {
      if (open) {
        el.style.height = "auto"; // let it grow naturally
      }
    };

    if (open) {
      const height = inner.offsetHeight;
      el.style.height = height + "px";
      el.addEventListener("transitionend", onTransitionEnd);
    } else {
      const currentHeight = el.scrollHeight;
      el.style.height = currentHeight + "px";
      // force reflow so browser registers current height
      void el.offsetHeight;
      el.style.height = "0px";
    }

    return () => {
      el.removeEventListener("transitionend", onTransitionEnd);
    };
  }, [open]);

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className={`faqs__faq ${open ? "faqs__faq--is-open" : ""}`}>
        <div className="faqs__title" onClick={handleOpen}>
          <h5 className="heading heading--5">{title}</h5>

          {/* Open icon */}
          <svg
            className={`faqs__open ${open ? "hidden" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#00542f"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
          </svg>

          {/* Close icon */}
          <svg
            className={`faqs__close ${open ? "" : "hidden"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#00542f"
            viewBox="0 0 256 256"
          >
            <path d="M176,128a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,128Zm56,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
          </svg>
        </div>

        <div
          className="faqs__body"
          ref={bodyRef}
          style={{
            height: open ? "auto" : "0px",
            overflow: "hidden",
            transition: "height 300ms ease",
          }}
        >
          <div ref={innerRef} className="faqs__answer">
            {body}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQCard;
