import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Advertisement() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}            // 🔹 faqat 1 ta slide ko‘rsatadi
      navigation                   // 🔹 “Next” va “Prev” tugmalarini yoqadi
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="ads-restaurant-frame"
    >
      <SwiperSlide>
        <div className="slide-content">
          <img src="/img/adv-kofello.jpg" alt="Vanilla Cold Brew" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content">
          <img src="/img/fruit-juice.png" alt="Vanilla Cold Brew" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content">
          <img src="/img/adv-cake.jpg" alt="Mocha Blend" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
