"use client";

import Wrapper from "@/components/Wrapper";
import ChatBox from "./_components/ChatBox";
import { useEffect, useState } from "react";

const Playground = () => {
  const [chatData, setChatData] = useState<ChatItem[]>([]);
  const loadData = async () => {
    try {
      const res = await fetch("/data/PlaygroundData.json");
      const data = await res.json();
      setChatData(data);
    } catch (err) {
      console.error("데이터 로드 실패:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Wrapper>
      <div className="playground-container">
        {chatData.map((chat) => (
          <ChatBox key={chat.id} data={chat} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Playground;
