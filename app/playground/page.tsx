"use client";

import TopNavigation from "@/components/Navigation/Top";
import Wrapper from "@/components/Wrapper";
import React from "react";
import ChatBox from "./_components/ChatBox";

const Playground = () => {
  const testChat = [
    {
      no: 12,
      tag: "동수칸",
      comment: "구우웃",
    },
  ];
  return (
    <Wrapper>
      <ChatBox datas={testChat} />
    </Wrapper>
  );
};

export default Playground;
