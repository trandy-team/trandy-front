import React from "react";

type Props = {
  isOpen: boolean;
  onClose: (state: boolean) => void;
};

const RootModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <>
      {/* dimmed */}
      <div className=" w-full h-screen overflow-hidden absolute top-0 bg-slate-500 z-40 opacity-50"></div>

      {/* modal */}
      <div className="w-[200px] h-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-300 z-50">
        <div className="modal-content p-2">
          <div className="flex justify-end">
            <button
              type="button"
              className="w-5 h-5 rounded-full bg-red-500 flex justify-center items-center text-yellow-300"
              onClick={() => onClose(false)}
            >
              x
            </button>
          </div>
          카카오로 로그인하기
        </div>
      </div>
    </>
  );
};

export default RootModal;
