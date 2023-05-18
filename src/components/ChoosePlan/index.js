import React, { useState } from "react";

const hmoPlans = [
  {
    type: "Basic",
    name: "hmo",
    id: "hmo-basic",
    prices: {
      annually: 180000,
      quaterly: 60000,
    },
    numofVisits: {
      annually: 12,
      quaterly: 4,
    },
    description: "Annual Home Medical Visits.",
  },

  {
    type: "Standard",
    name: "hmo",
    id: "hmo-standard",
    prices: {
      annually: 280000,
      quaterly: 160000,
    },
    numofVisits: {
      annually: 12,
      quaterly: 4,
    },
    description: "Everything in Basic + Annual comprehensive Check-up.",
  },

  {
    type: "Premium",
    name: "hmo",
    id: "hmo-premium",
    prices: {
      annually: 250000,
      quaterly: 130000,
    },
    numofVisits: {
      annually: 12,
      quaterly: 4,
    },
    description:
      "Everything in Standard + Support services (includes Basic drugs and Test)",
  },

  {
    type: "Diamond",
    name: "hmo",
    id: "hmo-diamond",
    prices: {
      annually: 280000,
      quaterly: 160000,
    },
    numofVisits: {
      annually: 12,
      quaterly: 4,
    },
    description:
      "Everything in Premium + Chronic Care (Includes Medication for Chronic Cases)",
  },

  {
    type: "Platium",
    name: "hmo",
    id: "hmo-platium",
    prices: {
      annually: 380000,
      quaterly: 260000,
    },
    numofVisits: {
      annually: 12,
      quaterly: 4,
    },
    description: "Everything in Diamond + annual Comprehensive checkup.",
  },

  {
    type: "Ultimate",
    name: "hmo",
    id: "hmo-ultimate",
    prices: {
      annually: 600000,
      quaterly: 500000,
    },
    numofVisits: {
      annually: 12,
      quaterly: 4,
    },
    description:
      "Everything in Platinum + In-patient Care (Includes Admission Services)",
  },
];

export const TeleConsultation = () => {
  return (
    <div className="choose-plan__teleconsultation">
      <div>
        <input
          type="radio"
          id="phone-consultation-voice"
          name="phone-consultation"
          className="inputfield__radio"
        />

        <label
          className="choose-plan__label"
          htmlFor="phone-consultation-voice"
        >
          <div className="choose-plan__voice-calls">
            <span>Voice Calls</span>

            <span className="choose-plan__amt">
              N2,500<span>/Per Call</span>
            </span>
          </div>
          <p className="choose-plan__desc">
            Book a voice call with a doctor. Medical Report inclusive.
          </p>
        </label>
      </div>

      <div>
        <input
          type="radio"
          id="phone-consultation-video"
          name="phone-consultation"
          className="inputfield__radio"
        />

        <label
          className="choose-plan__label"
          htmlFor="phone-consultation-video"
        >
          <div className="choose-plan__voice-calls">
            <span>Video Calls</span>

            <span className="choose-plan__amt">
              N3,500<span>/Per Call</span>
            </span>
          </div>
          <p className="choose-plan__desc">
            Book a Video call with a doctor. Medical Report inclusive.
          </p>
        </label>
      </div>
    </div>
  );
};

export const ElderlyHomeVisit = () => {
  return (
    <div className="choose-plan__elderly">
      <div>
        <input
          type="radio"
          id="elderly-single"
          name="elderly-home-visits"
          className="inputfield__radio"
        />

        <label className="choose-plan__label" htmlFor="elderly-single">
          <div className="choose-plan__elderly-single">
            <span>Single</span>

            <span className="choose-plan__amt">
              N45,000<span>/Per Annual</span>
            </span>
          </div>
          <p className="choose-plan__desc">
            For 1 Parent, 1 Address for 3 Visits valid for 3 Months.
          </p>
        </label>
      </div>

      <div>
        <input
          type="radio"
          id="elderly-couple"
          name="elderly-home-visits"
          className="inputfield__radio"
        />

        <label className="choose-plan__label" htmlFor="elderly-couple">
          <div className="choose-plan__elderly-single">
            <span>Couple</span>

            <span className="choose-plan__amt">
              N81,000<span>/Per Annual</span>
            </span>
          </div>
          <p className="choose-plan__desc">
            12 visits as needed in total valid for 12 months.
          </p>
        </label>
      </div>
    </div>
  );
};

export const OnDemandService = () => {
  return (
    <div className="choose-plan__on-demand-service">
      <div>
        <input
          type="radio"
          id="on-demand-service"
          name="on-demand-service"
          className="inputfield__radio"
        />

        <label className="choose-plan__label" htmlFor="on-demand-service">
          <div className="choose-plan__elderly-single">
            <span>On Demand</span>

            <span className="choose-plan__amt">
              N25,000<span>/Per Visits</span>
            </span>
          </div>

          <p className="choose-plan__desc">
            For 1 Parent, 1 Address for a single visit within 24 Hours.
          </p>
        </label>
      </div>
    </div>
  );
};

export const HMO = () => {
  const [tab, setTab] = useState(false);

  return (
    <>
      <div className="tab choose-plan__tab">
        <input type="checkbox" id="tab-switch" name="tab-switch" />
        <label
          className="tab__ctrl"
          htmlFor="tab-switch"
          onClick={() => setTab((prev) => !prev)}
        >
          <span>Annually</span>
          <span>Quarterly</span>
        </label>
      </div>

      <div className="choose-plan__hmo">
        {hmoPlans.map((plan) => (
          <div>
            <input
              type="radio"
              id={plan.id}
              name={plan.name}
              className="inputfield__radio"
            />

            <label className="choose-plan__label" htmlFor={plan.id}>
              <div className="choose-plan__elderly-single">
                <span>{plan.type}</span>

                <span className="choose-plan__amt">
                  N{!tab ? plan.prices.annually : plan.prices.quaterly}
                </span>

                <span className="choose-plan__duration">
                  Price for{" "}
                  {!tab ? plan.numofVisits.annually : plan.numofVisits.quaterly}{" "}
                  Visits Annual Plan
                </span>
              </div>

              <p className="choose-plan__desc">{plan.description}</p>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
