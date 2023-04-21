import Section from "@/Layout/Section";
import React from "react";

const Metrics = () => {
  return (
    <Section sectionName={"metrics"}>
      <div className="metrics">
        <div className="metrics__caption">
          <h2 className="heading heading--display">Gerocare in Numbers</h2>
          <p>
            You can trust our team of outstanding professionals. In the last 5
            years, we have taken care of more than 30,000 elderly persons across
            the country.
          </p>
        </div>

        <div className="metrics__grid">
          <div className="metrics__stat">
            <span>750+</span>
            <h6 className="heading heading--6">Doctors Nationwide </h6>
          </div>

          <div className="metrics__stat">
            <span>54+</span>
            <h6 className="heading heading--6">Cities Covered</h6>
          </div>

          <div className="metrics__stat">
            <span>1000+</span>
            <h6 className="heading heading--6">Pharmacies & labs</h6>
          </div>

          <div className="metrics__stat">
            <span>3</span>
            <h6 className="heading heading--6">Regional Offices</h6>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Metrics;
