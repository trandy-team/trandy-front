import React, { useState } from "react";

const ChatBox = ({ data }: { data: ChatItem }) => {
  const [hiddenAct, setHiddenAct] = useState(false);
  const onClickShowInfo = () => {
    setHiddenAct(!hiddenAct);
  };

  return (
    <div className="chatBox" role="button" onClick={onClickShowInfo}>
      {/* 앤드 태킹 */}
      <div className="cb__and-box">
        <p className="cb__andTag">&</p>
        <p className="cb__nameTag">{data.nameTag}</p>
      </div>

      {/* 코멘트 */}
      <p className="cb__comment">{data.comment}</p>

      {/* 글쓴이 / 글 적은 날짜 */}
      <div className="cb__info-box" style={{ visibility: hiddenAct ? "visible" : "hidden" }}>
        <p className="cb__writer">{data.writer}</p>
        <p className="cb__date">{data.date}</p>
      </div>
    </div>
  );
};

export default ChatBox;
