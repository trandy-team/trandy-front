"use client";

import Catchphrase from "@/components/_common/Catchphrase";
import Container from "@/components/_common/Container";
import SwiperCards from "@/components/main/SwiperCards";
import { modalList } from "@/constants/modalIdList";
import { closeModal, openModal } from "@/redux/stores/ModalStatus";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const [enter, setEnter] = useState(false);

  const handleOpenModal = () => {
    dispatch(openModal(modalList.login));
  };

  const handleCloseModal = () => {
    dispatch(closeModal(modalList.login));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setEnter(true);
      }, 2000);
    }
  }, []);

  return (
    <>
      <h1 className="invisible hidden">메인페이지</h1>
      <div className="main">
        <Container>
          <button type="button" onClick={handleOpenModal}>
            로그인
          </button>
        </Container>

        {/* Hot Things */}
        <Container>
          <h2 className="text-center my-2 eng-title text-[32px]">Hot Things</h2>
          <SwiperCards />
        </Container>

        {/* Still Things */}
        <Container>
          <h2 className="text-center my-2 eng-title text-[32px]">Still Things</h2>
          <SwiperCards />
        </Container>

        {/* Category */}
        <Container>
          <h2 className="text-center my-2 eng-title text-[32px]">Category</h2>

          {/* Category 리스트 */}
          <div className="grid grid-cols-4 grid-rows-2 gap-4">
            <div className="border border-gray-50 rounded-md shadow-md">
              <Link
                href="/fashion"
                className="w-full h-[50px] flex justify-center items-center bg-slate-300 rounded-md"
              >
                패션
              </Link>
            </div>
            <div className="border border-gray-50 rounded-md shadow-md">
              <Link
                href="/idol"
                className="w-full h-[50px] flex justify-center items-center bg-slate-300 rounded-md"
              >
                아이돌
              </Link>
            </div>
            <div className="border border-gray-50 rounded-md shadow-md">
              <Link
                href="/music"
                className="w-full h-[50px] flex justify-center items-center bg-slate-300 rounded-md"
              >
                음악
              </Link>
            </div>
            <div className="border border-gray-50 rounded-md shadow-md">
              <Link
                href="/meme"
                className="w-full h-[50px] flex justify-center items-center bg-slate-300 rounded-md"
              >
                밈
              </Link>
            </div>
            <div className="border border-gray-50 rounded-md shadow-md">
              <Link
                href="/"
                className="w-full h-[50px] flex justify-center items-center bg-slate-300 rounded-md text-sm cursor-none"
                onClick={(e) => e.preventDefault()}
              >
                🚧준비🚧
              </Link>
            </div>
            <div className="border border-gray-50 rounded-md shadow-md">
              <Link
                href="/"
                className="w-full h-[50px] flex justify-center items-center bg-slate-300 rounded-md text-sm cursor-none"
                onClick={(e) => e.preventDefault()}
              >
                🚧준비🚧
              </Link>
            </div>
            <div className="border border-gray-50 rounded-md shadow-md">
              <Link
                href="/"
                className="w-full h-[50px] flex justify-center items-center bg-slate-300 rounded-md text-sm cursor-none"
                onClick={(e) => e.preventDefault()}
              >
                🚧준비🚧
              </Link>
            </div>
            <div className="border border-gray-50 rounded-md shadow-md">
              <Link
                href="/"
                className="w-full h-[50px] flex justify-center items-center bg-slate-300 rounded-md text-sm cursor-none"
                onClick={(e) => e.preventDefault()}
              >
                🚧준비🚧
              </Link>
            </div>
          </div>
        </Container>
      </div>
      {/* 
      <RootModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </>
  );
}
