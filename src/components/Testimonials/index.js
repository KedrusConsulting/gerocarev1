import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
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
        <h2 className="heading heading--display">
          Don’t take our word for it...
        </h2>
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
              "“So we started using Gerocare to manage our elderly mum's medical problems and while we approached this tentatively at first, we were really impressed at the level of support, care and professionalism displayed. Gerocare has gone above and beyond to ensure that my mum has received top notch care - Her Doctor has engaged in such a manner that has given us confidence and peace of mind, he has been very supportive and responsive to all her needs and ours. The other stakeholders have also performed up to ”"
            }
            image_url={require("@/assets/img/margeret_ojo.png").default}
            author_name={"Margaret Ojo"}
            author_location={"Lagos"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blockquote
            description={
              "“I registered my Dad to benefit from the services of Gerocare in 2020. I have to testify that the ease of subscribing, making payment, contacting and receiving response from staff within the organisation has been excellent. My family is very happy with the level of service, the respect and dignity shown to my Dad, the prompt production of reports and the extra services provided such as undertaking investigations at home. We are so happy and can see the positive difference in my Daddy's healthcare...”"
            }
            image_url={require("@/assets/img/icon_user_avatar.svg").default}
            author_name={"Tolulope Jeje"}
            author_location={"Lagos"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Blockquote
            description={
              "“Thank u Gerocare for building a platform so wonderful as this to be able to care for our aged parents and love ones. I had a beautiful experience the first time a doctor from Gerocare came to visit with my parents especially my Dad, I felt proud been able to care for my parents at home, My dad was so happy his son sent a doctor over to the house to check on his health status. It was really a beautiful experience for them, and I do hope I keep caring for them continuously with the help of Gerocare, thank u Gerocare.”"
            }
            image_url={require("@/assets/img/icon_user_avatar.svg").default}
            author_name={"Tega Samuel"}
            author_location={"Lagos"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Blockquote
            description={
              "“I nearly lost my dad to a heart failure because of a wrong prescription from the hospital he was admitted in. Thankfully your team came in at the right time and reviewed his treatment and prescribed a better approach. Your guys are the real MVP. Thank you!”"
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
