import TopNavigation from "@/components/Navigation/Top";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <>
      <TopNavigation />
      {children}
    </>
  );
};

export default layout;
