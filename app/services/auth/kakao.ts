import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

// ✅ 백엔드에서 Kakao 로그인 흐름 시작
const BACKEND_KAKAO_LOGIN_URL = 'https://your-backend.com/oauth/kakao/login';

export default function useKakaoLogin() {
    const login = async () => {
        try {
            await WebBrowser.openBrowserAsync(BACKEND_KAKAO_LOGIN_URL);
        } catch (error) {
            console.error('Kakao 로그인 실패:', error);
        }
    };

    return {
        login,
    };
}