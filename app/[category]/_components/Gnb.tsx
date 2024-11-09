"use client";

import ArrowIcon from "@/public/icons/ArrowIcon";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {
  pathname: string;
};

const Gnb = ({ pathname }: Props) => {
  const router = useRouter();
  const [title, setTitle] = useState("카테고리");

  const onClickBack = () => {
    router.back();
  };

  useEffect(() => {
    console.log(pathname);
    switch (pathname) {
      case "/fashion":
        setTitle("이달의 패션");
        break;
      case "/idol":
        setTitle("이달의 아이돌");
        break;
      case "/music":
        setTitle("이달의 음악");
        break;
      case "/meme":
        setTitle("이달의 밈");
        break;

      default:
        setTitle("투표");
        break;
    }
  }, [pathname]);

  return (
    <nav className="grid grid-cols-7">
      {/* 뒤로가기 */}
      <button onClick={onClickBack} className="p-4">
        <ArrowIcon />
      </button>

      {/* 제목 */}
      <p className="text-center text-xl font-bold col-span-5 p-4">{title}</p>

      {/* 메뉴 */}
      <div></div>
    </nav>
  );
};

export default Gnb;
