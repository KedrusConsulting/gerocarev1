import React from "react";
import Root from "@/Layout/Root";
import Header from "@/components/Header";
import HeroCentered from "@/components/HeroCentered";
import HMOPlan from "@/components/HMOPlan";
import Section from "@/Layout/Section";
import SplitScreen from "@/Layout/SplitScreen";
import Image from "next/image";
import Link from "next/link";

const HMOBasic = () => {
  return (
    <Root title={"HMO Basic"}>
      <Header className={"hmo-basic"}>
        <HeroCentered>
          <h1
            className="heading heading--display"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Premium HMO Services for the Elderly.
          </h1>

          <p data-aos="fade-up" data-aos-duration="2000">
            At Gerocare, we have developed a HMO service program designed to
            enhance the health and wellness of the elderly.
          </p>
        </HeroCentered>

        <HMOPlan
          plan={"Basic Plan"}
          description={"Annual home medical visits"}
        />
      </Header>

      <Section sectionName={"plan-prices"}>
        <SplitScreen>
          <div className="plan-prices__img">
            <Image
              src={require("@/assets/img/hmo-basic.png")}
              alt="Married couple smiling and holding each others"
              data-aos="fade-up"
              data-aos-duration="2000"
            />
          </div>

          <div className="plan-prices__content">
            <div
              className="plan-prices__price"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="plan-prices__price--1">
                <span className="plan-prices__amt">₦180,000</span>
                <p>Price for 12 Visits Annual Plan</p>
              </div>
              <div className="plan-prices__price--2">
                <span className="plan-prices__amt">₦60,000</span>
                <p>Price for 4 Visits Annual Plan</p>
              </div>
            </div>

            <a
              href="/register"
              className="btn btn--main"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Get Started
            </a>
          </div>
        </SplitScreen>
      </Section>

      <Section sectionName={"plan-details"}>
        <div className="plan-details__caption">
          <h2 className="heading heading--display">Basic Plan Details</h2>
        </div>

        <div className="table__container">
          <table>
            <thead>
              <tr>
                <td>
                  <h6 className="heading heading--6">Membership</h6>
                </td>

                <td>
                  <h6 className="heading heading--6">
                    Doctor Home Visits (Up to 4)
                  </h6>
                </td>

                <td>
                  <h6 className="heading heading--6">
                    Support Service N200,000 Limit
                  </h6>
                </td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Access to GeroCare Platform
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      General consultation
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Provision prescribed medication - Basic (15, 000 /
                      Quarter)
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/close-icon.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Multiple online accounts
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Physical Examination
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Provision of basic investigation (Up to Limit)
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/close-icon.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Online medical records
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Examination of the central nervous system
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Provision prescribed medication - Chronic (15, 000 /
                      Quarter)
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/close-icon.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Access to Gerocare partner services
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Examination of the cardiovascular system
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  {/* <div className="table__item">
                  <span className="table__item-name">
                    Provision prescribed medication - Chronic (15, 000 /
                    Quarter)
                  </span>

                  <span className="table__icon">
                    <Image
                      src={require("@/assets/img/close-icon.svg")}
                      alt="Check Icon"
                    />
                  </span>
                </div> */}
                </td>
              </tr>

              <tr>
                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Real time health care tracking
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Examination of the abdomen & Genito-Urinary examination
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <h6 className="table__item-name heading heading--6">
                      COMPREHENSIVE HEALTH CHECH UP
                    </h6>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/close-icon.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="table__item">
                    <span className="table__item-name">Visits Reports</span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Check of vital signs and blood pressure
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  {/* <div className="table__item">
                  <span className="table__item-name">
                    Provision prescribed medication - Chronic (15, 000 /
                    Quarter)
                  </span>

                  <span className="table__icon">
                    <Image
                      src={require("@/assets/img/close-icon.svg")}
                      alt="Check Icon"
                    />
                  </span>
                </div> */}
                </td>
              </tr>

              <tr>
                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Real time health expenses tracking
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">Nutrition advice</span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  {/* <div className="table__item">
                  <span className="table__item-name">
                    Provision prescribed medication - Chronic (15, 000 /
                    Quarter)
                  </span>

                  <span className="table__icon">
                    <Image
                      src={require("@/assets/img/close-icon.svg")}
                      alt="Check Icon"
                    />
                  </span>
                </div> */}
                </td>
              </tr>

              <tr>
                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Access to Gerocare mobile application
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Request for Laboratory Investigations
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  {/* <div className="table__item">
                  <span className="table__item-name">
                    Provision prescribed medication - Chronic (15, 000 /
                    Quarter)
                  </span>

                  <span className="table__icon">
                    <Image
                      src={require("@/assets/img/close-icon.svg")}
                      alt="Check Icon"
                    />
                  </span>
                </div> */}
                </td>
              </tr>

              <tr>
                <td>
                  {/* <div className="table__item">
                  <span className="table__item-name">
                    Access to Gerocare mobile application
                  </span>

                  <span className="table__icon">
                    <Image
                      src={require("@/assets/img/check.svg")}
                      alt="Check Icon"
                    />
                  </span>
                </div> */}
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Provision of prescribed medication
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  {/* <div className="table__item">
                  <span className="table__item-name">
                    Provision prescribed medication - Chronic (15, 000 /
                    Quarter)
                  </span>

                  <span className="table__icon">
                    <Image
                      src={require("@/assets/img/close-icon.svg")}
                      alt="Check Icon"
                    />
                  </span>
                </div> */}
                </td>
              </tr>

              <tr>
                <td>
                  <div className="table__item">
                    <h6 className="table__item-name heading heading--6">
                      INPATIENT CARE
                    </h6>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/close-icon.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Health education & Counselling
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  {/* <div className="table__item">
                  <span className="table__item-name">
                    Provision prescribed medication - Chronic (15, 000 /
                    Quarter)
                  </span>

                  <span className="table__icon">
                    <Image
                      src={require("@/assets/img/close-icon.svg")}
                      alt="Check Icon"
                    />
                  </span>
                </div> */}
                </td>
              </tr>

              <tr>
                <td>
                  {/* <div className="table__item">
                  <span className="table__item-name">
                    Access to Gerocare mobile application
                  </span>

                  <span className="table__icon">
                    <Image
                      src={require("@/assets/img/check.svg")}
                      alt="Check Icon"
                    />
                  </span>
                </div> */}
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Health status Report/Feedback
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  {/* <div className="table__item">
                  <span className="table__item-name">
                    Provision prescribed medication - Chronic (15, 000 /
                    Quarter)
                  </span>

                  <span className="table__icon">
                    <Image
                      src={require("@/assets/img/close-icon.svg")}
                      alt="Check Icon"
                    />
                  </span>
                </div> */}
                </td>
              </tr>

              <tr>
                <td>
                  <div className="table__item">
                    <h6 className="table__item-name heading heading--6">
                      TELECONSULTATION
                    </h6>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/close-icon.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Prescription (If necessary)
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  {/* <div className="table__item">
                  <span className="table__item-name">
                    Provision prescribed medication - Chronic (15, 000 /
                    Quarter)
                  </span>

                  <span className="table__icon">
                    <Image
                      src={require("@/assets/img/close-icon.svg")}
                      alt="Check Icon"
                    />
                  </span>
                </div> */}
                </td>
              </tr>

              <tr>
                <td>
                  <div className="table__item">
                    <span className="table__item-name">Up to 8 times</span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  <div className="table__item">
                    <span className="table__item-name">
                      Referrals to Hospitals (If need be)
                    </span>

                    <span className="table__icon">
                      <Image
                        src={require("@/assets/img/check.svg")}
                        alt="Check Icon"
                      />
                    </span>
                  </div>
                </td>

                <td>
                  {/* <div className="table__item">
                  <span className="table__item-name">
                    Provision of basic investigation (Up to Limit)
                  </span>

                  <span className="table__icon">
                    <Image
                      src={require("@/assets/img/close-icon.svg")}
                      alt="Check Icon"
                    />
                  </span>
                </div> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="hmo__link">
          <Link
            href="/register"
            className="btn btn--main"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Get Started
          </Link>
        </div>
      </Section>
    </Root>
  );
};

export default HMOBasic;
