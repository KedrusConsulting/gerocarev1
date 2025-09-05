import React from "react";
import Image from "next/image";

import home_doc_visits from "@/assets/img/home-doctor-visits@2x.png";
import get_reports from "@/assets/img/get-reports-monthly@2x.png";
import home_meds from "@/assets/img/home-medication@2x.png";
import home_samples from "@/assets/img/home-sample-collections@2x.png";
import Section from "@/Layout/Section";

const Solutions = () => {
  return (
    <Section sectionName={"solutions"}>
      <div
        className="solution__caption"
        data-aos="fade-up"
        data-aos-duration="2000"
        // data-aos-once="true"
      >
        <h2 className="heading heading--1">
          A complete health solution for the Elderly
        </h2>
      </div>

      <div className="solution grid grid--2-col-reverse grid--center-v">
        <div
          className="solution__text-box"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="heading heading--2">A doctor visit every month</h2>
          <p className="solution__text">
            Once you add a beneficiary, we assign them a doctor who visits
            monthly at home for health checkups. Your elderly loved ones can
            enjoy personal doctor consultations in the comfort of their home
            once every month.
          </p>
        </div>

        <div
          className="solution__img"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Image
            className="uti-pr-0"
            src={home_doc_visits}
            alt="Doctor starring at his patient"
          />
        </div>
      </div>

      <div className="solution grid grid--2-col grid--center-v">
        <div
          className="solution__img"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Image
            className="uti-pl-0"
            src={get_reports}
            alt="Doctor starring at his patient"
          />
        </div>

        <div
          className="solution__text-box"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="heading heading--2">
            Health updates without the wait
          </h2>
          <p className="solution__text">
            Oh yes! You get reports for every visit. You’ll see the test results
            and prescriptions as well. We’ll update you on every step we take
            through our website or mobile app.
          </p>
        </div>
      </div>

      <div className="solution grid grid--2-col-reverse grid--center-v">
        <div
          className="solution__text-box"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="heading heading--2">
            Prescriptions delivered to their door
          </h2>
          <p className="solution__text">
            At your request, we can administer prescriptions to the patient at
            home or just deliver it to them.
          </p>
        </div>

        <div
          className="solution__img"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Image
            className="uti-pl-0"
            src={home_meds}
            alt="Doctor starring at his patient"
          />
        </div>
      </div>

      <div className="solution grid grid--2-col grid--center-v">
        <div
          className="solution__img"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Image
            className="uti-pl-0"
            src={home_samples}
            alt="Doctor starring at his patient"
          />
        </div>

        <div
          className="solution__text-box"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="heading heading--2">No more long hospital lines</h2>
          <p className="solution__text">
            No need to step an inch outside your home. We perform home-based
            laboratory investigations and tests for your elderly loved ones
            right at their homes.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Solutions;
