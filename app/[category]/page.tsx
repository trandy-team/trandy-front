"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import Gnb from "./_components/Gnb";
import ThumbsUp from "@/public/icons/ThumbsUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const CategoryPage = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <section>
      <Gnb pathname={pathname} />

      <div className="px-4 grid grid-cols-2 gap-x-2 gap-y-4">
        {/* 카드 */}
        <div className="bg-zinc-100 rounded-lg shadow-sm p-4 overflow-hidden">
          <div className="text-center relative">
            <div className="">
              <p className="text-[12px]">유행메이커</p>
              <p className="text-[14px] font-medium">나도관윤두준</p>
            </div>
            <div className="absolute w-full h-10 bg-sky-900 opacity-30 top-0 rounded-t-lg"></div>
          </div>

          <div className="my-10 flex flex-col items-center gap-2 ">
            <Swiper
              slidesPerView={"auto"}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={2000}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <p className="text-[12px]">#여자아이돌</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#요즘대세</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#노래좋음</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#여자아이돌</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#요즘대세</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#노래좋음</p>
              </SwiperSlide>
            </Swiper>
            <p className="text-[24px] font-bold my-2">뉴진스</p>
            <p className="text-[16px] text-center">
              투표마감까지 <br /> 00:00:00
            </p>
            <p className="text-[14px]">
              투표수: <span className="font-semibold">40000</span>
            </p>
            <div className="">
              <button className="p-2">
                <ThumbsUp />
              </button>
              <button className="p-2 rotate-180">
                <ThumbsUp />
              </button>
            </div>
          </div>

          <p className="text-[14px] font-medium text-center flex gap-2 justify-center">
            <span>작성일자</span>
            <span>20xx.xx.xx</span>
          </p>
        </div>

        <div className="bg-zinc-100 rounded-lg shadow-sm p-4 overflow-hidden">
          <div className="text-center relative">
            <div className="">
              <p className="text-[12px]">유행메이커</p>
              <p className="text-[14px] font-medium">나도관윤두준</p>
            </div>
            <div className="absolute w-full h-10 bg-sky-900 opacity-30 top-0 rounded-t-lg"></div>
          </div>

          <div className="my-10 flex flex-col items-center gap-2 ">
            <Swiper
              slidesPerView={"auto"}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={2000}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <p className="text-[12px]">#여자아이돌</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#요즘대세</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#노래좋음</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#여자아이돌</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#요즘대세</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#노래좋음</p>
              </SwiperSlide>
            </Swiper>
            <p className="text-[24px] font-bold my-2">뉴진스</p>
            <p className="text-[16px] text-center">
              투표마감까지 <br /> 00:00:00
            </p>
            <p className="text-[14px]">
              투표수: <span className="font-semibold">40000</span>
            </p>
            <div className="">
              <button className="p-2">
                <ThumbsUp />
              </button>
              <button className="p-2 rotate-180">
                <ThumbsUp />
              </button>
            </div>
          </div>

          <p className="text-[14px] font-medium text-center flex gap-2 justify-center">
            <span>작성일자</span>
            <span>20xx.xx.xx</span>
          </p>
        </div>

        <div className="bg-zinc-100 rounded-lg shadow-sm p-4 overflow-hidden">
          <div className="text-center relative">
            <div className="">
              <p className="text-[12px]">유행메이커</p>
              <p className="text-[14px] font-medium">나도관윤두준</p>
            </div>
            <div className="absolute w-full h-10 bg-sky-900 opacity-30 top-0 rounded-t-lg"></div>
          </div>

          <div className="my-10 flex flex-col items-center gap-2 ">
            <Swiper
              slidesPerView={"auto"}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={2000}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <p className="text-[12px]">#여자아이돌</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#요즘대세</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#노래좋음</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#여자아이돌</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#요즘대세</p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-[12px]">#노래좋음</p>
              </SwiperSlide>
            </Swiper>
            <p className="text-[24px] font-bold my-2">뉴진스</p>
            <p className="text-[16px] text-center">
              투표마감까지 <br /> 00:00:00
            </p>
            <p className="text-[14px]">
              투표수: <span className="font-semibold">40000</span>
            </p>
            <div className="">
              <button className="p-2">
                <ThumbsUp />
              </button>
              <button className="p-2 rotate-180">
                <ThumbsUp />
              </button>
            </div>
          </div>

          <p className="text-[14px] font-medium text-center flex gap-2 justify-center">
            <span>작성일자</span>
            <span>20xx.xx.xx</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
