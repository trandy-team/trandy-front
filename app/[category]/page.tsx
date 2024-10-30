"use client";

import { useParams } from "next/navigation";
import React from "react";

const CategoryPage = () => {
  const params = useParams();

  switch (params.category) {
    case "fashion":
      return (
        <section>
          <header className="w-full text-center">
            <h2 className=" text-[40px] font-bold text-[#121212]">패션</h2>
          </header>
        </section>
      );

    case "idol":
      return (
        <section>
          <header className="w-full text-center">
            <h2 className=" text-[40px] font-bold text-[#121212]">아이돌</h2>
          </header>
        </section>
      );

    case "music":
      return (
        <section>
          <header className="w-full text-center">
            <h2 className=" text-[40px] font-bold text-[#121212]">음악</h2>
          </header>
        </section>
      );

    case "meme":
      return (
        <section>
          <header className="w-full text-center">
            <h2 className=" text-[40px] font-bold text-[#121212]">밈</h2>
          </header>
        </section>
      );

    default:
      return (
        <div>
          <p>Error 페이지</p>
        </div>
      );
  }
};

export default CategoryPage;
