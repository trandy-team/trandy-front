import React from "react";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return <section style={{ marginTop: 56 }}>{children}</section>;
};

export default Wrapper;
