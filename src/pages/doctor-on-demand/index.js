import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSteps from "@/components/SimpleSteps";
import Image from "next/image";
import Root from "@/Layout/Root";
import Header from "@/components/Header";
import SplitScreen from "@/Layout/SplitScreen";

export default function Contact() {
  return (
    <Root title={"Doctor on Demand"}>
      <Header className={"doc-on-demand"}>
        <SplitScreen>
          <div className="header__text">
            <h1
              className="heading heading--display"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Get access to Home doctor visit in Less than 24 hrs.
            </h1>

            <p data-aos="fade-up" data-aos-duration="2000">
              We understand that a person’s health can fail at any time and it
              is crucial that quality health care services are available to
              everyone whenever the need arises.
            </p>

            <a
              href="/register"
              className="btn btn--main"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Get Started
            </a>
          </div>

          <div className="header__img">
            <Image
              src={require("@/assets/img/access-to-home.png")}
              alt="Access to a home doctor"
              data-aos="fade-up"
              data-aos-duration="2000"
            />
          </div>
        </SplitScreen>
      </Header>

      <main>
        <SimpleSteps />

        <section className="section section--access">
          <div className="row">
            <div className="access__grid">
              <div className="access__content">
                <h2
                  className="heading heading--1"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Doctor on Demand service.
                </h2>

                <p data-aos="fade-up" data-aos-duration="2000">
                  With With our Doctor on Demand service, we make it possible
                  for anyone in Nigeria, no matter where you are located to get
                  access to a medical doctor right at your home within 24hrs.
                </p>

                <p data-aos="fade-up" data-aos-duration="2000">
                  We make this happen by matching your request to the closest
                  medical doctor in your location. And in not more than 24hrs, a
                  qualified medical doctor arrives at your home and attends to
                  you.
                </p>

                <ul className="access__list">
                  <li
                    className="access__item"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <Image
                      src={require("@/assets/img/circled-check-mark.svg")}
                      alt="Circled checked mark icon"
                    />

                    <span>
                      A qualified medical doctor visits you within 24hrs no
                      matter where you are in Nigeria.
                    </span>
                  </li>

                  <li
                    className="access__item"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <Image
                      src={require("@/assets/img/circled-check-mark.svg")}
                      alt="Circled checked mark icon"
                    />

                    <span>Transparent price.</span>
                  </li>

                  <li
                    className="access__item"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <Image
                      src={require("@/assets/img/circled-check-mark.svg")}
                      alt="Circled checked mark icon"
                    />

                    <span>Trusted, experienced, and licensed doctors.</span>
                  </li>
                </ul>
              </div>

              <div className="access__price">
                <div className="pricing__table">
                  <div
                    className={`pricing__plan`}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <h4 className="heading--4">On-Demand</h4>

                    <p>Starting from</p>

                    <div className="pricing__price">
                      <span className="pricing__amt">₦25,000</span>
                    </div>

                    <ul className="pricing__list">
                      <li className="pricing__item">
                        <span className="pricing__icon">&#x2713;</span>
                        <span className="pricing__ben">1 Person</span>
                      </li>

                      <li className="pricing__item">
                        <span className="pricing__icon">&#x2713;</span>
                        <span className="pricing__ben">
                          1 Address for a Single visit within 24 hours.
                        </span>
                      </li>

                      <li className="pricing__item">
                        <span className="pricing__icon">&#x2713;</span>
                        <span className="pricing__ben">Medical Reports</span>
                      </li>

                      <li className="pricing__item">
                        <span className="pricing__icon">&#x2713;</span>
                        <span className="pricing__ben">
                          Access to GeroCare App
                        </span>
                      </li>
                    </ul>

                    <a href="/register" className="btn btn--main">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Root>
  );
}
