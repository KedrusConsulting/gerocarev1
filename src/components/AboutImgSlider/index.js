import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  { image_url: require("@/assets/img/slider-img-0.jpeg") },
  { image_url: require("@/assets/img/slider-img-1.jpeg") },
  { image_url: require("@/assets/img/slider-img-2.jpeg") },
  { image_url: require("@/assets/img/slider-img-3.jpeg") },
  { image_url: require("@/assets/img/slider-img-4.jpeg") },
  { image_url: require("@/assets/img/slider-img-5.jpeg") },
  { image_url: require("@/assets/img/slider-img-6.jpeg") },
];

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";
import Image from "next/image";

const AboutImgSlider = () => {
  return (
    <div className="about-us__slider">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide>
            <Image src={image.image_url} alt={"Swiper"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutImgSlider;
