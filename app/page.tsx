"use client";

import Catchphrase from "@/components/_common/Catchphrase";
import Container from "@/components/_common/Container";
import SwiperCards from "@/components/main/SwiperCards";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [enter, setEnter] = useState(false);

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
      {enter ? (
        <div className="main">
          <Container>
            <button></button>
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
                <Link href={"/"} className="w-full h-[50px] flex justify-center items-center">
                  패션
                </Link>
              </div>
              <div className="border border-gray-50 rounded-md shadow-md">
                <Link href={"/"} className="w-full h-[50px] flex justify-center items-center">
                  아이돌
                </Link>
              </div>
              <div className="border border-gray-50 rounded-md shadow-md">
                <Link href={"/"} className="w-full h-[50px] flex justify-center items-center">
                  음악
                </Link>
              </div>
              <div className="border border-gray-50 rounded-md shadow-md">
                <Link href={"/"} className="w-full h-[50px] flex justify-center items-center">
                  밈
                </Link>
              </div>
              <div className="border border-gray-50 rounded-md shadow-md">
                <Link
                  href={"/"}
                  className="w-full h-[50px] flex justify-center items-center text-sm cursor-none"
                  onClick={(e) => e.preventDefault()}
                >
                  🚧준비🚧
                </Link>
              </div>
              <div className="border border-gray-50 rounded-md shadow-md">
                <Link
                  href={"/"}
                  className="w-full h-[50px] flex justify-center items-center text-sm cursor-none"
                  onClick={(e) => e.preventDefault()}
                >
                  🚧준비🚧
                </Link>
              </div>
              <div className="border border-gray-50 rounded-md shadow-md">
                <Link
                  href={"/"}
                  className="w-full h-[50px] flex justify-center items-center text-sm cursor-none"
                  onClick={(e) => e.preventDefault()}
                >
                  🚧준비🚧
                </Link>
              </div>
              <div className="border border-gray-50 rounded-md shadow-md">
                <Link
                  href={"/"}
                  className="w-full h-[50px] flex justify-center items-center text-sm cursor-none"
                  onClick={(e) => e.preventDefault()}
                >
                  🚧준비🚧
                </Link>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <Catchphrase />
      )}
    </>
  );
}
