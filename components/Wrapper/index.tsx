import React from "react";

type Props = {
  children: React.ReactNode;
  type: "full" | "gap";
};

const Wrapper = ({ children, type = "gap" }: Props) => {
  switch (type) {
    case "full":
      return <div className="wrapper">{children}</div>;
    default:
      return <div className="wrapper">{children}</div>;
  }
};

export default Wrapper;
