import React, { useState } from "react";
import Section from "@/Layout/Section";
import FAQCard from "../FAQCard";

const FAQs = ({ data = [] }) => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Section sectionName="faqs">
      <div className="row faqs__grid">
        {data.map((faq) => (
          <FAQCard
            key={faq.id}
            title={faq.title}
            body={faq.content ?? faq.body}
            open={openId === faq.id}
            handleOpen={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </Section>
  );
};

export default FAQs;
