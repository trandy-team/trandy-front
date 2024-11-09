"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import store from "@/redux/store";

interface Props {
  children: ReactNode;
}

const ClinetsContainer = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClinetsContainer;
