import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Blockquote from "../Blockquote";
import Section from "@/Layout/Section";

const Testimonials = () => {
  return (
    <Section sectionName={"testimonials"}>
      <div
        className="testimonial__caption"
        data-aos="fade-up"
        data-aos-duration="2000"
        // data-aos-once="true"
      >
        <h2 className="heading heading--1">Don’t take our word for it...</h2>
        <p>Hear what Nigerians like you have to say about our services</p>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 30,
          },

          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <Blockquote
            description={
              "We were nervous at first. But now, I sleep better knowing a doctor is always there for my mum."
            }
            image_url={require("@/assets/img/margeret_ojo.png").default}
            author_name={"Margaret Ojo"}
            author_location={"Lagos"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blockquote
            description={
              "I was worried about caring for my aging parents at home. Now my dad lights up every time the GeroCare doctor visits."
            }
            image_url={require("@/assets/img/icon_user_avatar.svg").default}
            author_name={"Tolulope Jeje"}
            author_location={"Lagos"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Blockquote
            description={
              "The paperwork and calls used to stress me out. Now everything with Dad's healthcare runs so smoothly."
            }
            image_url={require("@/assets/img/tega_samuel.png").default}
            author_name={"Tega Samuel"}
            author_location={"Lagos"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Blockquote
            description={
              "I nearly lost my dad to a wrong prescription, but your team stepped in and saved him. You’re the real MVP—thank you!"
            }
            image_url={require("@/assets/img/uka_eje.png").default}
            author_name={"Uka Eje"}
            author_location={"Lagos"}
          />
        </SwiperSlide>

        {/* <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> */}
      </Swiper>
    </Section>
  );
};

export default Testimonials;
