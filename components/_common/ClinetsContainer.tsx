"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import store from "@/redux/store";
import ModalList from "./ModalList";

interface Props {
  children: ReactNode;
}

const ClinetsContainer = ({ children }: Props) => {
  return (
    <>
      <Provider store={store}>
        {children}
        <ModalList />
      </Provider>
    </>
  );
};

export default ClinetsContainer;
