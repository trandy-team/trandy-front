"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Card from "../_common/Card";

const SwiperCards = () => {
  return (
    <div data-aos="fade-left" data-delay="300">
      <Swiper slidesPerView="auto" pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Card>패션</Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>아이돌</Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>음악</Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card>밈</Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCards;
