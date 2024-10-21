import Image from "next/image";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onClickCard = () => {
    setIsFlipped(!isFlipped);
  };

  /**
   * 투표
   * @param id id === 1 찬성 / id === 2 반대
   */
  const onClickVote = (id: string) => {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log(id);
    }
  };

  return (
    <div
      className="flip-container min-w-[104px] h-[154px] rounded-md p-1"
      onClick={onClickCard}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClickCard();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className={`card ${isFlipped ? "flipped w-full h-full" : "w-full h-full"}`}>
        <div className="front w-full h-full text-center rounded-md shadow-md dark:bg-[#383838]">
          <div className="voteEl">
            <div className="childrenEl">{children}</div>
          </div>
        </div>
        <div className="back w-full h-full relative p-2 rounded-md shadow-md flex items-end">
          <div className="circle absolute left-2 top-2 bg-[#C65F2D]" />
          <div className="circle absolute right-2 top-2 bg-[#C65F2D]" />
          <p className="card-backText absolute font-semibold text-2xl text-[#C65F2D] top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2">
            Trandy
          </p>
          <p className="card-backText absolute font-semibold text-2xl text-[#275B63] top-1/2 left-[52%] transform -translate-x-1/2 -translate-y-1/2">
            Trandy
          </p>
          <p className="card-backText absolute font-semibold text-2xl text-white top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            Trandy
          </p>

          <div className=" w-full grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => onClickVote("1")}
              className="flex justify-center border border-white rounded-md py-1"
            >
              <Image src="./img/vote_yes.svg" alt="찬성버튼" width={24} height={24} />
            </button>
            <button
              type="button"
              onClick={() => onClickVote("2")}
              className="flex justify-center border border-white rounded-md py-1"
            >
              <Image src="./img/vote_no.svg" alt="반대버튼" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
