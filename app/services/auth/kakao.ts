import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

const API_BASE_URL = Constants.expoConfig?.extra?.API_BASE_URL;

export default function useKakaoLogin() {
    const login = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/kakao`);
            const json = await res.json();

            if (json.result?.redirectUrl) {
                await WebBrowser.openBrowserAsync(json.result.redirectUrl);
            } else {
                console.warn('카카오 리디렉트 URL이 없습니다.');
            }
        } catch (error) {
            console.error('카카오 로그인 실패:', error);
        }
    };

    return { login };
}