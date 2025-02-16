"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BotNavigation = () => {
  const pathname = usePathname();

  const navList = [
    { title: "home", name: "메인", url: "/home", img: "nav_home.png", width: 36, height: 36 },
    { title: "vote", name: "투표", url: "/vote", img: "nav_likeHate.png", width: 36, height: 24 },
    {
      title: "playground",
      name: "커뮤니티",
      url: "/playground",
      img: "nav_community.png",
      width: 36,
      height: 36,
    },
    {
      title: "myPage",
      name: "마이페이지",
      url: "/myPage",
      img: "nav_myPage.png",
      width: 32,
      height: 36,
    },
    {
      title: "setting",
      name: "설정",
      url: "/setting",
      img: "nav_setting.png",
      width: 36,
      height: 36,
    },
  ];

  return (
    <div className="navigation">
      {navList.map((item) => {
        return (
          <div className="nav-btnBox" key={item.title}>
            <Link
              href={item.url}
              className={`nav__link ${pathname.includes(item.title) ? "active" : ""}`}
            >
              <Image src={`/img/nav/${item.img}`} alt="" width={item.width} height={item.height} />
            </Link>
            <p className="nav__title">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BotNavigation;
