import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Award from "../Award";
import Section from "@/Layout/Section";

const Awards = () => {
  return (
    <Section sectionName={"awards"}>
      <div className="row">
        <div className="awards__caption">
          <span className="awards__subtitle">Our Awards & accolades</span>
        </div>
      </div>
      <div className="row">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Award
              award_logo={require("@/assets/img/google-startup@2x.png").default}
              award_desc={"Google Awardees for StartUps selected across Africa"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Award
              award_logo={require("@/assets/img/who@2x.png").default}
              award_desc={"Top 30 African Healthcare Innovations 2019"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Award
              award_logo={require("@/assets/img/as@2x.png").default}
              award_desc={"Top 50 business innovations in Africa 2018"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Award
              award_logo={
                require("@/assets/img/business-heroes@2x.png").default
              }
              award_desc={
                "Top 20 Finalists African Business Heroes Competition 2021"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Award
              award_logo={require("@/assets/img/africarena@2x.png").default}
              award_desc={"Best of Nigerian Tech Echosystem"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Award
              award_logo={require("@/assets/img/google-startup@2x.png").default}
              award_desc={"Google Awardees for StartUps selected across Africa"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Award
              award_logo={require("@/assets/img/who@2x.png").default}
              award_desc={"Top 30 African Healthcare Innovations 2019"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Section>
  );
};

export default Awards;
