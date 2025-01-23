import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="w-full max-w-[675px] mx-auto overflow-hidden">{children}</div>;
};

export default Container;
