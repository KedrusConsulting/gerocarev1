import React from "react";
import Section from "@/Layout/Section";
import PriceCardOutline from "../PriceCard/PriceCardOutline";

const OnDemand = () => {
  return (
    <Section sectionName="on-demand">
      <div className="on-demand__caption">
        <h2 className="heading heading--1">Need to speak to a doctor now?</h2>
      </div>

      <div className="on-demand__grid">
        <PriceCardOutline
          title={"Voice Call"}
          nairaAmt={"2,500"}
          description={
            "Talk to a licensed doctor by phone, anytime. Includes diagnosis + medical report."
          }
          label={"Book Voice Call"}
        />

        <PriceCardOutline
          title={"Voice Call"}
          nairaAmt={"3,500"}
          description={
            "Prefer face-to-face? Speak with a doctor via secure video. Includes diagnosis + medical report."
          }
          label={"Book Voice Call"}
        />

        <PriceCardOutline
          title={"Emergency Visit (On Demand)"}
          nairaAmt={"35,000"}
          description={"For urgent care at home—within 24 hours."}
          label={"Request Emergency Visit"}
          occurence="/Visit"
          note={"One patient. One visit. One location."}
          onDemand={true}
        />
      </div>
    </Section>
  );
};

export default OnDemand;
