import React from "react";
import RootModal from "../RootModal";
import { closeModal } from "@/redux/stores/ModalStatus";
import { useDispatch } from "react-redux";

const LoginModal = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closeModal("login"));
  };

  return (
    <RootModal>
      <div className="modal-content p-2">
        <div className="flex justify-end">
          <button
            type="button"
            className="w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-yellow-300"
            onClick={onClose}
          >
            x
          </button>
        </div>
        카카오로 로그인하기
      </div>
    </RootModal>
  );
};

export default LoginModal;
