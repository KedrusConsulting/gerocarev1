import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <section className="section section--our-services">
      <div className="row">
        <div className="our-services">
          <div className="our-services__caption">
            <h2 className="heading heading--display">
              Our Elderly Care Services
            </h2>
          </div>

          <div className="our-services__grid">
            <div className="our-services__card">
              <Image
                src={require("@/assets/img/home-visits.svg")}
                alt="Home visits"
              />

              <p>Regular home visits by Doctors</p>
            </div>

            <div className="our-services__card">
              <Image
                src={require("@/assets/img/personal-health.svg")}
                alt="Personal Health"
              />

              <p>Personalised health records</p>
            </div>

            <div className="our-services__card">
              <Image
                src={require("@/assets/img/medicine-home.svg")}
                alt="Medicine Home"
              />

              <p>Medicine Home delivery</p>
            </div>

            <div className="our-services__card">
              <Image
                src={require("@/assets/img/labs-investations.svg")}
                alt="Labs Investation"
              />

              <p>Lab investigations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
