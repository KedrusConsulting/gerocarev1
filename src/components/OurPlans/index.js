import React from "react";
import Image from "next/image";

import PlanCard from "../PlanCard";
import Section from "@/Layout/Section";

import { plans } from "./plansData";
import ngnSvg from "@/assets/img/ngn.svg";
import globleSvg from "@/assets/img/globle.svg";

const OurPlans = () => {
  return (
    <Section className="plans">
      <div className="row">
        <div className="our-plans__NGN">
          <div className="our-plans__caption">
            <Image
              data-aos="fade-up"
              data-aos-duration="2000"
              src={ngnSvg}
              alt="NGN"
              width={40}
              height={40}
            />

            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              className="heading heading--1"
            >
              GeroCare Plans for Nigerian-Based Sponsors
            </h2>
          </div>

          <div className="our-plans__grid">
            {plans?.map((plan) => (
              <PlanCard
                key={plan?.id}
                duration={plan?.duration}
                prices={plan?.prices}
                discount={plan?.discount}
                category={plan?.category}
                benefits={plan?.benefits}
                addOns={plan?.addOns}
                currency={"NGN"}
              />
            ))}
          </div>
        </div>

        <div className="our-plans__diaspora">
          <div className="our-plans__caption">
            <Image
              data-aos="fade-up"
              data-aos-duration="2000"
              src={globleSvg}
              alt="NGN"
              width={40}
              height={40}
            />

            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              className="heading heading--1"
            >
              GeroCare Plans for Diaspora Sponsors
            </h2>
          </div>
          <div className="our-plans__grid">
            {plans?.map((plan) => (
              <PlanCard
                key={plan?.id}
                duration={plan?.duration}
                prices={plan?.prices}
                discount={plan?.discount}
                category={plan?.category}
                benefits={plan?.benefits}
                addOns={plan?.addOns}
                currency={"USD"}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurPlans;
