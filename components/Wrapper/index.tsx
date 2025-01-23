import React from "react";

type Props = {
  children: React.ReactNode;
  type: "full" | "gap";
};

const Wrapper = ({ children, type = "gap" }: Props) => {
  switch (type) {
    case "full":
      return <div>{children}</div>;
    default:
      return <div className="px-4">{children}</div>;
  }
};

export default Wrapper;
