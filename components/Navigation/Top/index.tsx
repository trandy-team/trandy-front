"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const TopNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="topNav">
      <Link href={"/"} className="topNav__title">
        Trandy
      </Link>
    </div>
  );
};

export default TopNavigation;
