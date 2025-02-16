export const swrFetcher = (url: string) => fetch(url).then((res) => res.json());

// /**
//  * 공통으로 사용할 fetch 함수
//  *
//  * @param {string} url - API 주소
//  * @param {Object} datas - 요청에 사용할 데이터 객체
//  *   - 'GET'일 경우 URL 뒤에 쿼리스트링으로 추가
//  *   - 'POST'일 경우 Body로 전달
//  * @param {'GET' | 'POST'} method - 요청 메서드 ('GET' 또는 'POST')
//  * @param {boolean} needLogin - 로그인이 필요한 경우 Authorization 헤더에 토큰 추가
//  * @returns {Promise<any>} - API 응답 데이터
//  */

// type Props = {
//   url: string;
//   datas?: {
//     [key: string]: string;
//   };
//   method?: "GET" | "POST";
//   needLogin?: boolean;
// };

// export const handleFetch = async ({
//   url,
//   datas = {},
//   method = "GET",
//   needLogin = false,
// }: Props) => {
//   try {
//     const headers = new Headers();
//     headers.set("Content-Type", "application/json");

//     if (needLogin) {
//       const token = localStorage.getItem("loginToken");
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       } else {
//         throw new Error("로그인 토큰이 필요합니다.");
//       }
//     }

//     if (method === "GET" && Object.keys(datas).length > 0) {
//       const queryString = new URLSearchParams(datas).toString();
//       url += `?${queryString}`;
//     }

//     const options: RequestInit = {
//       method,
//       headers,
//     };

//     if (method === "POST") {
//       options.body = JSON.stringify(datas);
//     }

//     const response = await fetch(url, options);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error("Fetch Error");
//     throw error;
//   }
// };
