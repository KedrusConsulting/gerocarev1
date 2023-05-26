import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSteps from "@/components/SimpleSteps";
import Image from "next/image";
import PriceCard from "@/components/PriceCard";
import Root from "@/Layout/Root";
import Header from "@/components/Header";
import SplitScreen from "@/Layout/SplitScreen";

export default function Contact() {
  return (
    <Root title={"Teleconsultation"}>
      <Header className={"teleconsultation"}>
        <SplitScreen>
          <div className="header__text">
            <h1
              className="heading heading--display"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Speak with a Doctor at your convenience
            </h1>

            <p data-aos="fade-up" data-aos-duration="2000">
              Avoid the long distance to hospitals, high consultation cost, long
              waiting period and hassles of appointment booking.
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
              src={require("@/assets/img/speak-with-a-doc.png")}
              alt="Speak with a doctor"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="50"
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
                  Committed to making access to health care convenient for the
                  elderly.
                </h2>

                <p data-aos="fade-up" data-aos-duration="2000">
                  No matter where you are in Nigeria, you can book a
                  consultation call with a certified medical doctor from the
                  comfort of your home.
                </p>

                <p data-aos="fade-up" data-aos-duration="2000">
                  Our teleconsultation service makes it easy for anyone to
                  consult with a doctor at their convenience and also get a
                  medical report afterwards.
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

                    <span>Instant access to doctor consultation.</span>
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

                    <span>Lower consultation fees.</span>
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

                    <span>Medical reports</span>
                  </li>
                </ul>

                <a
                  href="/register"
                  className="btn btn--main"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Get Started
                </a>
              </div>

              <div className="access__img">
                <Image
                  src={require("@/assets/img/senior-woman-meeting-with-male-doctor-cosmetic-surgeon.png")}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="50"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section--subscription">
          <div className="row">
            <div className="subscription__caption">
              <h2
                className="heading heading--display"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Subscription Plans
              </h2>

              <p data-aos="fade-up" data-aos-duration="2000">
                We also offer flexible subscription plans at affordable rates
              </p>
            </div>

            <div className="subscription__pricing">
              <div className="pricing__tele">
                <div className="pricing__tele-grp">
                  <PriceCard
                    title="Voice Calls"
                    description={
                      "Book a voice call with a doctor. Medical Report inclusive."
                    }
                    amt={2500}
                    label="Book Now"
                  />

                  <PriceCard
                    title="Voice Calls"
                    description={
                      "Book a voice call with a doctor. Medical Report inclusive."
                    }
                    amt={3500}
                    label="Book Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Root>
  );
}
