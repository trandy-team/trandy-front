import React from "react";

type Props = {
  width: string;
  height: string;
};

const Skeleton = ({ width, height }: Props) => {
  return (
    <div
      style={{
        width: width || "100%",
        height: height || "20px",
        backgroundColor: "#e0e0e0",
        borderRadius: "4px",
        animation: "skeleton-loading 1.5s infinite ease-in-out",
      }}
    ></div>
  );
};

export default Skeleton;
