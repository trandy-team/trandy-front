"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";

type Props = {
  children: React.ReactNode;
};

const RootModal = ({ children }: Props) => {
  return (
    <>
      {/* dimmed */}
      <div className=" w-full h-screen overflow-hidden absolute top-0 bg-slate-500 z-40 opacity-50"></div>

      {/* modal */}
      <div className="w-[200px] h-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-300 z-50">
        {children}
      </div>
    </>
  );
};

export default RootModal;
