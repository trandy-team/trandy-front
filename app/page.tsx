"use client";

import Container from "@/components/Container";
import Skeleton from "@/components/Skeleton";
import Wrapper from "@/components/Wrapper";
import { handleFetch } from "@/utils/handleFetch";
import { useEffect, useState } from "react";

/**
 *  @url /페이지접속시 통신할 초기 API
 *  @description 페이지 접속 시 클라이언트와 통신할 API로, 투표 상태와 카테고리 정보를 반환합니다.
 *  @param {string} loginToken - 로그인 토큰, 사용자 인증에 사용됩니다. (어떤 형식인지 안정함)
 *  @returns {Object} Response 데이터
 *
 *  @property {boolean} isVote - 사용자가 현재 투표에 참여했는지 여부를 나타냅니다.
 *
 *  @property {Array<Object>} voteList - 투표 가능한 아이템 목록:
 *    - @property {string} voteList[].id - 투표 아이템의 고유 ID
 *    - @property {string} voteList[].name - 투표 아이템 이름
 *    - @property {number} voteList[].approvalCnt - 찬성표 수
 *    - @property {number} voteList[].disapprovalCnt - 반대표 수
 *    - @property {string} voteList[].imgSrc - 투표 아이템의 이미지 경로
 *
 *  @property {Array<Object>} category - 카테고리 리스트:
 *    - @property {string} category[].id - 카테고리 고유 ID
 *    - @property {string} category[].title - 카테고리 이름
 *    - @property {Array<string>} category[].imgSrcList - 해당 카테고리의 이미지 경로 리스트
 */

export default function Home(): unknown {
  const [initData, setInitData] = useState(null);
  const [loading, setLoading] = useState(true);

  const onLoadData = async () => {
    try {
      const result = await handleFetch({
        url: "/data/HomeData.json",
        datas: {},
        method: "GET",
        needLogin: false,
      });

      setInitData(result);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    onLoadData();
  }, []);
  console.log(initData);
  return (
    <Container>
      <Wrapper type="full">
        {loading ? <Skeleton width="100%" height="200px" /> : <p>투표 선정된 아이템 배너</p>}
      </Wrapper>

      <Wrapper type="gap">
        {loading ? <Skeleton width="100%" height="20px" /> : <p>투표 선정된 아이템 배너</p>}
      </Wrapper>
    </Container>
  );
}
