import Section from "@/Layout/Section";
import React from "react";

const Metrics = () => {
  return (
    <Section sectionName={"metrics"}>
      <div className="metrics">
        <div
          className="metrics__caption"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="heading heading--1">Gerocare in Numbers</h2>
          <p>
            You can trust our team of outstanding professionals. In the last 5
            years, we have taken care of more than 30,000 elderly persons across
            the country.
          </p>
        </div>

        <div className="metrics__grid">
          <div
            className="metrics__stat"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span>750+</span>
            <h6 className="heading heading--6">Doctors Nationwide </h6>
          </div>

          <div
            className="metrics__stat"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span>134k</span>
            <h6 className="heading heading--6">Doctors Visits </h6>
          </div>

          <div
            className="metrics__stat"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span>10k</span>
            <h6 className="heading heading--6">Prescription Fulfilled</h6>
          </div>

          <div
            className="metrics__stat"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span>54+</span>
            <h6 className="heading heading--6">Cities Covered</h6>
          </div>

          <div
            className="metrics__stat"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span>1000+</span>
            <h6 className="heading heading--6">Pharmacies & labs</h6>
          </div>

          <div
            className="metrics__stat"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span>3</span>
            <h6 className="heading heading--6">Regional Offices</h6>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Metrics;
