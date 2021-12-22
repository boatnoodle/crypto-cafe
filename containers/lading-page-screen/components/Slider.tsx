import Image from "next/image";
import React from "react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        spaceBetween={30}
        loop
        navigation
        autoplay
        centeredSlides
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image
            quality="100"
            src="/images/cafe/1.jpeg"
            width="500"
            height="500"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            quality="100"
            src="/images/cafe/2.jpeg"
            width="500"
            height="500"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Image
            quality="100"
            src="/images/cafe/3.jpeg"
            width="500"
            height="500"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Image
            quality="100"
            src="/images/cafe/4.jpeg"
            width="500"
            height="500"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Image
            quality="100"
            src="/images/cafe/5.jpeg"
            width="500"
            height="500"
          />
        </SwiperSlide>{" "}
      </Swiper>
    </div>
  );
};
