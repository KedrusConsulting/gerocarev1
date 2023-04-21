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
      <div className="solution__caption">
        <h2 className="heading heading--display">
          A complete health solution for the Elderly
        </h2>
      </div>

      <div className="solution grid grid--2-col-reverse grid--center-v">
        <div className="solution__text-box">
          <h2 className="heading heading--display">Home Doctor Visits</h2>
          <p className="solution__text">
            Once you add a beneficiary, we assign them a doctor who visits
            monthly at home for health checkups. Your elderly loved ones can
            enjoy personal doctor consultations in the comfort of their home
            once every month.
          </p>
        </div>

        <div className="solution__img">
          <Image
            className="uti-pr-0"
            src={home_doc_visits}
            alt="Doctor starring at his patient"
          />
        </div>
      </div>

      <div className="solution grid grid--2-col grid--center-v">
        <div className="solution__img">
          <Image
            className="uti-pl-0"
            src={get_reports}
            alt="Doctor starring at his patient"
          />
        </div>

        <div className="solution__text-box">
          <h2 className="heading heading--display">Get Reports Monthly</h2>
          <p className="solution__text">
            Oh yes! You get reports for every visit. You’ll see the test results
            and prescriptions as well. We’ll update you on every step we take
            through our website or mobile app.
          </p>
        </div>
      </div>

      <div className="solution grid grid--2-col-reverse grid--center-v">
        <div className="solution__text-box">
          <h2 className="heading heading--display">Home Medication</h2>
          <p className="solution__text">
            At your request, we can administer prescriptions to the patient at
            home or just deliver it to them.
          </p>
        </div>

        <div className="solution__img">
          <Image
            className="uti-pl-0"
            src={home_meds}
            alt="Doctor starring at his patient"
          />
        </div>
      </div>

      <div className="solution grid grid--2-col grid--center-v">
        <div className="solution__img">
          <Image
            className="uti-pl-0"
            src={home_samples}
            alt="Doctor starring at his patient"
          />
        </div>

        <div className="solution__text-box">
          <h2 className="heading heading--display">Home Sample Collections</h2>
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
