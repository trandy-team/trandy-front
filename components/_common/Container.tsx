"use client";

import React, { useEffect } from "react";
import AOS from "aos";

type Props = {
  children: React.ReactNode;
  classnames?: string;
};

const Container = ({ children, classnames }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <section className={`px-4 ${classnames}`}>{children}</section>;
};

export default Container;
