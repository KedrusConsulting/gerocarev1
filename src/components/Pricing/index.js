import React from "react";
import PriceCard from "../PriceCard";
import Tabs from "../Tab";

const Prices = () => {
  return (
    <section className="section section--pricing">
      <div className="row">
        <h2 className="heading heading--display">Elder Home Care</h2>

        <div className="pricing__tab">
          <Tabs />

          <div className="pricing__tele">
            <h2 className="heading heading--display">Teleconsultation</h2>
            <p>
              We also offer One-Time subscription at the best affordable rates
            </p>

            <div className="pricing__tele-grp">
              <PriceCard
                title="Voice Calls"
                description={
                  "Book a voice call with a doctor. Medical Report inclusive."
                }
                amt={2500}
                label="Get Started"
              />

              <PriceCard
                title="Voice Calls"
                description={
                  "Book a voice call with a doctor. Medical Report inclusive."
                }
                amt={3500}
                label="Get Started"
              />
            </div>
          </div>

          <div className="pricing__doc">
            <h2 className="heading heading--display">Doctor on Demand</h2>
            <p>
              We also offer One-Time subscription at the best affordable rates
            </p>

            <div className="pricing__doc-grp">
              <PriceCard
                title="On-Demand"
                description={
                  "1 Person, 1 Address for a Single visit within 24 hours."
                }
                amt={25000}
                label="Get Started"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
