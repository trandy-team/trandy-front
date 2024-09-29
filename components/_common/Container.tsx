"use client";

import React, { useEffect } from "react";
import AOS from "aos";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <section className="px-4">{children}</section>;
};

export default Container;
