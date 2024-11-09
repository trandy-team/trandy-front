"use client";

import React from "react";
import { modalList } from "@/constants/modalIdList";
import KakaoModal from "../modal/modals/LoginModal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";

const ModalList = () => {
  const isLoginModalOpen = useSelector((state: RootState) => state.modalStatus[modalList.login]);

  return (
    <>
      {/* 로그인 */}
      {isLoginModalOpen && <KakaoModal />}
    </>
  );
};

export default ModalList;
