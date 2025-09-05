import React, { useEffect, useRef, useState } from "react";
import Section from "@/Layout/Section";
import FAQCard from "../FAQCard";

const FAQs = ({ data }) => {
  const [open, setOpen] = useState(false);

  const faqGridRef = useRef();

  useEffect(() => {
    faqGridRef.current.addEventListener("click", (e) => {
      const elem = e.target.closest(".faqs__title");

      if (elem) {
        const parent = elem.parentElement;

        const faqs = Array.from(document.querySelectorAll(".faqs__faq"));
        const faqsBody = Array.from(document.querySelectorAll(".faqs__body"));

        faqs.map((faq, i) => {
          faq.classList.remove("faqs__faq--is-open");
          faqsBody[i].style.height = 0;

          faq.querySelector(".faqs__open").classList.remove("hidden");
          faq.querySelector(".faqs__close").classList.add("hidden");
        });

        if (!open) {
          parent.classList.add("faqs__faq--is-open");

          parent.querySelector(".faqs__body").style.height =
            parent.querySelector(".faqs__answer").offsetHeight + "px";

          parent.querySelector(".faqs__open").classList.add("hidden");
          parent.querySelector(".faqs__close").classList.remove("hidden");
        }

        if (open) {
          parent.classList.remove("faqs__faq--is-open");

          parent.querySelector(".faqs__body").style.height = 0;

          parent.querySelector(".faqs__open").classList.remove("hidden");
          parent.querySelector(".faqs__close").classList.add("hidden");
        }
      }
    });

    return faqGridRef.current.removeEventListener(
      "click",
      console.log("removed")
    );
  }, [open]);

  return (
    <Section sectionName="faqs">
      <div
        className="row faqs__grid"
        ref={faqGridRef}
        onClick={() => setOpen((prev) => !prev)}
      >
        {data?.map((faq) => (
          <FAQCard key={faq.id} title={faq.title} body={faq.content} />
        ))}
      </div>
    </Section>
  );
};

export default FAQs;
