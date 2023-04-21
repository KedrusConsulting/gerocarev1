import React from "react";

const Section = ({ children, sectionName }) => {
  return (
    <section className={`section section--${sectionName}`}>
      <div className="row">{children}</div>
    </section>
  );
};

export default Section;
