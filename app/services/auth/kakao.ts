import * as Linking from 'expo-linking';

// ✅ Kakao REST API 키 (프론트에 노출되어도 무방)
const KAKAO_REST_API_KEY = '921724e7a382d7cd627ef3c63c531a40';

// ✅ 백엔드에서 Kakao 인가 코드를 처리할 Redirect URI (Spring Boot 서버 주소)
const REDIRECT_URI = 'http://localhost:8080/oauth/kakao/callback'; // 배포 시 주소 변경

// ✅ 최종 Kakao 인증 URL
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
)}`;

export default function useKakaoLogin() {
    const login = async () => {
        try {
            await Linking.openURL(KAKAO_AUTH_URL); // 브라우저로 Kakao 로그인 페이지 열기
        } catch (error) {
            console.error('Kakao 로그인 실패:', error);
        }
    };

    return {
        login, // 로그인 함수 (버튼에 연결할 것)
        kakaoAuthUrl: KAKAO_AUTH_URL, // 디버깅용 또는 필요 시 노출
    };
}