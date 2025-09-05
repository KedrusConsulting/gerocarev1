import Root from "@/Layout/Root";
import React from "react";
import Header from "@/components/Header";
import HeroCentered from "@/components/HeroCentered";
import Image from "next/image";
import Section from "@/Layout/Section";
import Link from "next/link";
import HMOPricingCard from "@/components/HMOPricingCard";

const pricings = [
  {
    plan: "Basic",
    description: "Annual home medical visits",
    price_1: { naira: "N180,000", dollar: "100.00" },
    price_2: { naira: "N60,000", dollar: "100.00" },

    route: "/hmo/basic",
  },

  {
    plan: "Standard",
    description: "Everything in Basic + Annual comprehensive Check-up",
    price_1: { naira: "N280,000", dollar: "560.00" },
    price_2: { naira: "N160,000", dollar: "320.00" },
    route: "/hmo/standard",
  },

  {
    plan: "Premium",
    description:
      "Everything in Standard + Support services (includes Basic drugs and Test)",
    price_1: { naira: "N250,000", dollar: "500.00" },
    price_2: { naira: "N130,000", dollar: "260.00" },

    route: "/hmo/premium",
  },

  {
    plan: "Diamond",
    description:
      "Everything in Premium + Chronic Care (Includes Medication for Chronic Cases)",
    price_1: { naira: "N280,000", dollar: "560.00" },
    price_2: { naira: "N160,000", dollar: "320.00" },

    route: "/hmo/diamond",
  },

  {
    plan: "Platinum",
    description: "Everything in Diamond + annual Comprehensive checkup",
    price_1: { naira: "N380,000", dollar: "760.00" },
    price_2: { naira: "N260,000", dollar: "520.00" },

    route: "/hmo/platinum",
  },

  {
    plan: "Ultimate",
    description:
      "Everything in Platinum + In-patient Care (Includes Admission Services)",
    price_1: { naira: "N600,000", dollar: "1200.00" },
    price_2: { naira: "N500,000", dollar: "1000.00" },

    route: "/hmo/ultimate",
  },
];

const HMO = () => {
  return (
    <Root title={"HMO"}>
      <Header className={"hmo"}>
        <HeroCentered>
          <h1
            className="heading heading--display"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Get a HMO plan for your elderly ones.
          </h1>

          <p data-aos="fade-up" data-aos-duration="2000">
            Our plans offer your elderly loved ones access to annual medical
            care and support services at an affordable rate.
          </p>

          <a
            href="/register"
            className="btn btn--main"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Get Started
          </a>
        </HeroCentered>
      </Header>

      <section className="section section--full-width-img">
        <Image
          src={require("@/assets/img/hmo-img.png").default}
          alt="Happy Man and his wife with sitting in the living room"
          data-aos="fade-up"
          data-aos-duration="2000"
        />
      </section>

      <Section sectionName={"hmo-pricing"}>
        <div className="hmo__pricing-caption">
          <h2
            className="heading heading--display"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            HMO Pricing
          </h2>
        </div>

        <table
          className="hmo__table"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <thead>
            <tr>
              <td>Plans</td>
              <td>Description</td>
              <td>Price for 12 Visits Annual Plan</td>
              <td>Price for 4 Visits Annual Plan</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {pricings.map((price) => (
              <tr>
                <td className="headings">
                  <h5 className="heading heading--5">{price.plan}</h5>
                </td>
                <td>
                  <span className="hmo__text">{price.description}</span>
                </td>
                <td>
                  <span className="hmo__amt">{price.price_1.naira}</span>
                  <span className="pricing__amt-dollar">
                    {`($${price.price_1.dollar})`}
                  </span>
                </td>
                <td>
                  <span className="hmo__amt">{price.price_2.naira}</span>
                  <span className="pricing__amt-dollar">
                    (${price.price_2.dollar})
                  </span>
                </td>
                <td>
                  <Link href={price.route} className="btn btn--table">
                    View Plan Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="hmo__pricing-grid">
          <HMOPricingCard
            title={"Basic Plan"}
            subtitle={"Annual home Medical visits"}
            prices={{
              price_1: {
                amt: { naira: 180000, dollar: 100 },
                description: "Price for 12 Visits Annual Plan",
              },
              price_2: {
                amt: { naira: 60000, dollar: 100 },
                description: "Price for 4 Visits Annual Plan",
              },
            }}
            href={"/hmo/basic"}
          />

          <HMOPricingCard
            title={"Standard Plan"}
            subtitle={"Everything in Basic + Annual comprehensive Check-up"}
            prices={{
              price_1: {
                amt: { naira: 280000, dollar: 560 },
                description: "Price for 12 Visits Annual Plan",
              },
              price_2: {
                amt: { naira: 160000, dollar: 320 },
                description: "Price for 4 Visits Annual Plan",
              },
            }}
            href={"/hmo/standard"}
          />

          <HMOPricingCard
            title={"Premium Plan"}
            subtitle={
              "Everything in Standard + Support services (includes Basic drugs and Test)"
            }
            prices={{
              price_1: {
                amt: { naira: 250000, dollar: 500 },

                description: "Price for 12 Visits Annual Plan",
              },
              price_2: {
                amt: { naira: 130000, dollar: 260 },
                description: "Price for 4 Visits Annual Plan",
              },
            }}
            href={"/hmo/premium"}
          />

          <HMOPricingCard
            title={"Diamond Plan"}
            subtitle={"Everything in Diamond + annual Comprehensive checkup."}
            prices={{
              price_1: {
                amt: { naira: 280000, dollar: 560 },
                description: "Price for 12 Visits Annual Plan",
              },
              price_2: {
                amt: { naira: 160000, dollar: 320 },
                description: "Price for 4 Visits Annual Plan",
              },
            }}
            href={"/hmo/diamond"}
          />

          <HMOPricingCard
            title={"Platinum Plan"}
            subtitle={"Everything in Diamond + annual Comprehensive checkup."}
            prices={{
              price_1: {
                amt: { naira: 380000, dollar: 760 },
                description: "Price for 12 Visits Annual Plan",
              },
              price_2: {
                amt: { naira: 260000, dollar: 520 },
                description: "Price for 4 Visits Annual Plan",
              },
            }}
            href={"/hmo/platinum"}
          />

          <HMOPricingCard
            title={"Ultimate Plan"}
            subtitle={
              "Everything in Platinum + In-patient Care (Includes Admission Services)"
            }
            prices={{
              price_1: {
                amt: { naira: 600000, dollar: 1200 },
                description: "Price for 12 Visits Annual Plan",
              },
              price_2: {
                amt: { naira: 500000, dollar: 1000 },
                description: "Price for 4 Visits Annual Plan",
              },
            }}
            href={"/hmo/ultimate"}
          />
        </div>

        <div className="hmo__link">
          <Link href="/register" className="btn btn--main">
            Get Started
          </Link>
        </div>
      </Section>
    </Root>
  );
};

export default HMO;
