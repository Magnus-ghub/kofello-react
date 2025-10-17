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
          <img src="/img/coffee-night.jpg" alt="Caramel Latte" />
          <h3>NEW! Caramel Latte</h3>
          <p>Sweet and creamy perfection — limited this season.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content">
          <img src="/img/coffee-night.jpg" alt="Vanilla Cold Brew" />
          <h3>NEW! Vanilla Cold Brew</h3>
          <p>Cool, smooth, and lightly sweet — perfect for autumn days.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide-content">
          <img src="/img/coffee-night.jpg" alt="Mocha Blend" />
          <h3>NEW! Mocha Blend</h3>
          <p>Rich cocoa flavor with espresso depth — a must-try.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
