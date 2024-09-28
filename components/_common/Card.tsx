import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onClickCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-container min-w-[104px] h-[154px] rounded-md p-1" onClick={onClickCard}>
      <div className={`card ${isFlipped ? "flipped w-full h-full" : "w-full h-full"}`}>
        <div className="front w-full h-full text-center rounded-md shadow-md">
          <div className="voteEl">
            <div className="childrenEl">{children}</div>
          </div>
        </div>
        <div className="back w-full h-full relative p-2 rounded-md shadow-md">
          <div className="circle absolute left-2 top-2"></div>
          <div className="circle absolute right-2 top-2"></div>
          <p className="card-backText absolute font-semibold text-2xl text-[#C65F2D] top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2">
            Trandy
          </p>
          <p className="card-backText absolute font-semibold text-2xl text-[#275B63] top-1/2 left-[52%] transform -translate-x-1/2 -translate-y-1/2">
            Trandy
          </p>
          <p className="card-backText absolute font-semibold text-2xl text-white top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            Trandy
          </p>

          <div>
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
