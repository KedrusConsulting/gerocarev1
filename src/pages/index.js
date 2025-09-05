import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import Header from "@/components/Header";
import FeaturedIn from "@/components/FeaturedIn";
import CTA from "@/components/CTA";
import GetStarted from "@/components/GetStarted";
import Benefits from "@/components/Benefits";
import Metrics from "@/components/Metrics";
import SplitScreen from "@/Layout/SplitScreen";
import Image from "next/image";
import Root from "@/Layout/Root";
import ServiceTag from "@/components/ServicesTag";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Autoplay } from "swiper";

// import "../styles/main.scss";

export default function Home() {
  return (
    <Root title={"Home"}>
      <Header className="home">
        <SplitScreen>
          <div className="header__text">
            <div
              className="header__text-sub"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <Image
                src={require("@/assets/img/check-icon.svg")}
                alt={"Check icon"}
              />

              <span>
                Trusted by over <strong>30,000</strong> families, top hospitals,
                and HMOs.
              </span>
            </div>

            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="heading heading--display"
            >
              Caring for aging parents from afar is hard{" "}
              <span className="heading heading--display">
                but neglect is worst.
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
              data-aos-offset="-100"
            >
              Gerocare connects licensed doctors to homes, sends you updates
              anywhere you are, and catches problems early.
            </p>

            <div
              className="header__cta"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-once="true"
              data-aos-offset="-100"
            >
              <a href="/register" className="btn btn--main">
                Start Care Plan Today
              </a>

              <a href="/register" className="btn btn--text">
                <span>Start care in 24hours. Peace of mind begins today.</span>
                <span className="btn--icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M7.5 15.8477L12.5 10.8477L7.5 5.84766"
                      stroke="#009855"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </a>

              {/* <a href="/login" className="btn btn--text">
                Start care in 24 hours. Peace of mind begins todays.
              </a> */}
            </div>
          </div>

          <div className="header__img header__img--1">
            <div className="header__img-swiper">
              <Swiper
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                loop={true}
                effect={"fade"}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  <div className="header__img--1">
                    <Image
                      src={require("@/assets/img/hero-image-03@4x.png")}
                      alt={"Hero img"}
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-once="true"
                    />

                    <ServiceTag
                      service={"Teleconsultation"}
                      href="/teleconsultation"
                    />
                    <ServiceTag
                      service={"Doctor Home Visits"}
                      href="/elderly-care"
                    />
                    <ServiceTag
                      service={"On-Demand Doctor"}
                      href="/doctor-on-demand"
                    />

                    <ServiceTag service={"Care Givers"} href="/care-giver" />

                    <ServiceTag service={"HMO Plans"} href="/hmo" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="header__img--1">
                    <Image
                      src={require("@/assets/img/hero-image-02@4x.png")}
                      alt={"Hero img"}
                      data-aos="fade-up"
                      data-aos-duration="2000"
                      data-aos-once="true"
                    />

                    <ServiceTag
                      service={"Teleconsultation"}
                      href="/teleconsultation"
                    />
                    <ServiceTag
                      service={"Doctor Home Visits"}
                      href="/elderly-care"
                    />
                    <ServiceTag
                      service={"On-Demand Doctor"}
                      href="/doctor-on-demand"
                    />

                    <ServiceTag service={"Care Givers"} href="/care-giver" />
                    <ServiceTag service={"HMO Plans"} href="/hmo" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </SplitScreen>
      </Header>

      <main>
        <Awards />

        <Testimonials />

        <GetStarted />

        <Services />

        <Solutions />

        <Benefits />

        <Metrics />

        <CTA />

        <FeaturedIn />
      </main>
    </Root>
  );
}
