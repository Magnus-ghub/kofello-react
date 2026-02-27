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
      slidesPerView={1}            
      navigation                   
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="ads-restaurant-frame"
    >
      <SwiperSlide>
        <div className="slide-content">
          <img src="/img/coffee-banner.jpg" alt="Vanilla Cold Brew" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content">
          <img src="/img/banner2.jpg" alt="Vanilla Cold Brew" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content">
          <img src="/img/banner3.jpg" alt="Mocha Blend" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
