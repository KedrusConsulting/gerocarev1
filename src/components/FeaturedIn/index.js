import Section from "@/Layout/Section";
import Image from "next/image";
import React from "react";

const FeaturedIn = () => {
  return (
    <Section sectionName={"featured-in"}>
      <div className="featured-in">
        <span className="featured-in__caption">As Featured in</span>

        <div className="featured-in__logos">
          <Image
            src={require("@/assets/img/vanguard@2x.png")}
            alt={"Vanguard Logo"}
          />
          <Image
            src={require("@/assets/img/accounteer@2x.png")}
            alt={"Accounteer logo"}
          />
          <Image
            src={require("@/assets/img/smepeaks@2x.png")}
            alt={"SME peaks logo"}
          />
          <Image
            src={require("@/assets/img/slush@2x.png")}
            alt={"Slush logo"}
          />
          <Image
            src={require("@/assets/img/techpoint@2x.png")}
            alt={"Techpoint logo"}
          />
          <Image src={require("@/assets/img/bbc@2x.png")} alt={"BBC logo"} />
        </div>
      </div>
    </Section>
  );
};

export default FeaturedIn;
