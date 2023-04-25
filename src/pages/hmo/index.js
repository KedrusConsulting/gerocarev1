import Root from "@/Layout/Root";
import React from "react";
import Header from "@/components/Header";
import HeroCentered from "@/components/HeroCentered";
import Image from "next/image";

const HMO = () => {
  return (
    <Root title={"HMO"}>
      <Header className={"hmo"}>
        <HeroCentered>
          <h1 className="heading heading--display">
            Get a HMO plan for your elderly ones.
          </h1>

          <p>
            Our plans offer your elderly loved ones access to annual medical
            care and support services at an affordable rate.
          </p>

          <a href="/register" className="btn btn--main">
            Get Started
          </a>
        </HeroCentered>
      </Header>

      <section className="section section--full-width-img">
        <Image
          src={require("@/assets/img/hmo-img.png")}
          alt="Happy Man and his wife with sitting in the living room"
        />
      </section>
    </Root>
  );
};

export default HMO;
