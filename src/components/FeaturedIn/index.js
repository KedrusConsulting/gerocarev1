import Section from "@/Layout/Section";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedIn = () => {
  return (
    <Section sectionName={"featured-in"}>
      <div className="featured-in">
        <span className="featured-in__caption">As Featured in</span>

        <div className="featured-in__logos">
          <Link href="https://www.vanguardngr.com/2022/08/gerocare-seeks-improved-care-for-elderly">
            <Image
              src={require("@/assets/img/vanguard@2x.png")}
              alt={"Vanguard Logo"}
            />
          </Link>

          <Link href="https://smepeaks.com/2018/05/21/gerocare-ais-rwanda">
            <Image
              src={require("@/assets/img/smepeaks@2x.png")}
              alt={"SME peaks logo"}
            />
          </Link>

          <Link href="https://accounteer.com/en/">
            <Image
              src={require("@/assets/img/accounteer@2x.png")}
              alt={"Accounteer logo"}
            />
          </Link>

          <Link href="https://smepeaks.com/2019/01/09/dofrey-ebi-gerocare-slush-gia-experience-feature">
            <Image
              src={require("@/assets/img/slush@2x.png")}
              alt={"Slush logo"}
            />
          </Link>

          <Link href="https://techpoint.africa/2017/06/12/gerocare-profile">
            <Image
              src={require("@/assets/img/techpoint@2x.png")}
              alt={"Techpoint logo"}
            />
          </Link>

          <Link href="https://www.bbc.com/news/av/business-52667793">
            <Image src={require("@/assets/img/bbc@2x.png")} alt={"BBC logo"} />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedIn;
