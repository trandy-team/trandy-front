import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["trandy.site"],
  },
  pwa: {
    dest: "public", // PWA 관련 파일들이 저장될 폴더를 설정 (public 폴더 사용)
    register: true, // 서비스 워커 자동 등록
    skipWaiting: true, // 페이지 새로고침 없이 새로운 서비스 워커를 활성화
    disable: process.env.NODE_ENV === "development", // 개발 환경에서는 PWA 비활성화
  },
  env: {
    SITE_URL: "https://trandy.site", // 사이트 URL을 환경 변수로 설정
  },
};

export default withPWA(nextConfig);
