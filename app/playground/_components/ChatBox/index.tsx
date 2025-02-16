import React from "react";

type Props = {
  datas: ChatData[];
};

const ChatBox = ({ datas }: Props) => {
  return (
    <>
      {datas.map((el) => {
        return (
          <div className="chatbox-container" key={el.no}>
            <div className="cb__info">
              <p className="info__and">&</p>
              <div className="info__tag">
                <p>{el.tag}</p>
              </div>
            </div>
            <p className="cb__comment">{el.comment}</p>
          </div>
        );
      })}
    </>
  );
};

export default ChatBox;
