import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-fade";
import { EffectFade } from "swiper";

const Header = () => {
  return (
    <header className="header">
      <div className="row header--grid">
        <div className="header__text">
          <div className="header__text-sub">
            <Image
              src={require("@/assets/img/check-icon.svg")}
              alt={"Check icon"}
            />
            <span>Highly Preferred by over +30,009 Customers</span>
          </div>

          <h1 className="heading heading--display">
            Give your Parents the gift of a Healthy, Long Life.
          </h1>

          <p>
            Subscribe them for regular doctor home visits for under $25 per
            month
          </p>

          <div className="header__cta">
            <a href="/register" className="btn btn--main">
              Get Started
            </a>
            <a href="/login" className="btn btn--sec">
              Log In
            </a>
          </div>
        </div>

        <div className="header__img">
          <Image
            src={require("@/assets/img/hero-image-01@4x.png")}
            alt={"Hero img"}
          />

          {/* <Image
            src={require("@/assets/img/hero-image-02@4x.png")}
            alt={"Hero img"}
          /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
