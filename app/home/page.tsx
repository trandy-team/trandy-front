"use client";

import TopNavigation from "@/components/Navigation/Top";
import Wrapper from "@/components/Wrapper";
import { swrFetcher } from "@/utils/handleFetch";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import TopSection from "./_components/Top";

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

type CategoryItem = {
  id: string;
  imgSrcList: string[];
  title: string;
};

type VoteItem = {
  approvalCnt: number;
  disapprovalCnt: number;
  id: string;
  imgSrc: string;
  name: string;
};

type DataTypes = {
  category: CategoryItem[];
  isVote: boolean;
  voteList: VoteItem[];
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  const { data, error, isLoading }: { data: DataTypes; error: unknown; isLoading: boolean } =
    useSWR("/data/HomeData.json", swrFetcher);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setLoading(false), 500);
    }
  }, [isLoading]);

  if (error) return <p>에러 발생!</p>;
  if (loading) return <p>로딩 중...</p>;

  console.log(data);
  return (
    <>
      <TopNavigation />

      <Wrapper>
        <TopSection data={data} />
      </Wrapper>

      {/* <Wrapper>
      <Slider {...settings}>
      {data.category?.map((item: any) => {
        return (
          <div>

          </div>
        );
      })}
    </Slider>
      </Wrapper> */}
    </>
  );
};

export default Home;
