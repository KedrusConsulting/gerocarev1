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
      <div className="testimonial__caption">
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
      >
        <SwiperSlide>
          <Blockquote
            description={
              "“So we started using Gerocare to manage our elderly mum's medical problems and while we approached this tentatively at first, we were really impressed at the level of support, care and professionalism displayed. Gerocare has gone above and beyond to ensure that my mum has received top notch care - Her Doctor has engaged in such a manner that has given us confidence and peace of mind, he has been very supportive and responsive to all her needs and ours. The other stakeholders have also performed up to ”"
            }
            image_url={require("@/assets/img/avatar.png").default}
            author_name={"Margaret Ojo"}
            author_location={"Lagos"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blockquote
            description={
              "“So we started using Gerocare to manage our elderly mum's medical problems and while we approached this tentatively at first, we were really impressed at the level of support, care and professionalism displayed. Gerocare has gone above and beyond to ensure that my mum has received top notch care - Her Doctor has engaged in such a manner that has given us confidence and peace of mind, he has been very supportive and responsive to all her needs and ours. The other stakeholders have also performed up to ”"
            }
            image_url={require("@/assets/img/avatar.png").default}
            author_name={"Margaret Ojo"}
            author_location={"Lagos"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blockquote
            description={
              "“So we started using Gerocare to manage our elderly mum's medical problems and while we approached this tentatively at first, we were really impressed at the level of support, care and professionalism displayed. Gerocare has gone above and beyond to ensure that my mum has received top notch care - Her Doctor has engaged in such a manner that has given us confidence and peace of mind, he has been very supportive and responsive to all her needs and ours. The other stakeholders have also performed up to ”"
            }
            image_url={require("@/assets/img/avatar.png").default}
            author_name={"Margaret Ojo"}
            author_location={"Lagos"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Blockquote
            description={
              "“So we started using Gerocare to manage our elderly mum's medical problems and while we approached this tentatively at first, we were really impressed at the level of support, care and professionalism displayed. Gerocare has gone above and beyond to ensure that my mum has received top notch care - Her Doctor has engaged in such a manner that has given us confidence and peace of mind, he has been very supportive and responsive to all her needs and ours. The other stakeholders have also performed up to ”"
            }
            image_url={require("@/assets/img/avatar.png").default}
            author_name={"Margaret Ojo"}
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
