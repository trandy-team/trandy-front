import React from "react";
import RootModal from "../RootModal";

type Props = {
  onClose: (state: boolean) => void;
};

const ExplainModal = ({ onClose }: Props) => {
  return (
    <RootModal>
      <div className="modal-content p-2">카드 설명</div>
    </RootModal>
  );
};

export default ExplainModal;
