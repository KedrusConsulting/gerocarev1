import Section from "@/Layout/Section";
import SplitScreen from "@/Layout/SplitScreen";
import Image from "next/image";
import React from "react";

const details = [
  {
    icon: require("@/assets/img/doctor-nationwide.svg"),
    name: "Doctor Nationwide",
    stat: "750+",
  },

  {
    icon: require("@/assets/img/cities-covered.svg"),
    name: "Cities Covered",
    stat: "45+",
  },

  {
    icon: require("@/assets/img/phamacies-labs.svg"),
    name: "Pharmacies & Labs",
    stat: "800+",
  },

  {
    icon: require("@/assets/img/regional-office.svg"),
    name: "Regional Office",
    stat: "3+",
  },
];

const Vision = () => {
  return (
    <Section sectionName={"vision"}>
      <div className="vision">
        <SplitScreen>
          <div className="vision__statement">
            <div>
              <h5
                className="heading heading--5"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Our Mission
              </h5>
              <p data-aos="fade-up" data-aos-duration="2000">
                Our Mission is to pioneer medical inclusion by leveraging
                technology to provide access to medical care to underserved
                segments of people across Africa.
              </p>
            </div>

            <div>
              <h5
                className="heading heading--5"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Our Vision
              </h5>
              <p data-aos="fade-up" data-aos-duration="2000">
                To be the most loved, used, sustainable and easily accessible
                home medical service
              </p>
            </div>
          </div>

          <div className="vision__about">
            {details.map((detail) => (
              <div
                className="vision__grp"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <Image src={detail.icon} alt={detail.name} />

                <div>
                  <span className="heading--3">{detail.stat}</span>
                  <span>{detail.name}</span>
                </div>
              </div>
            ))}
          </div>
        </SplitScreen>
      </div>
    </Section>
  );
};

export default Vision;
