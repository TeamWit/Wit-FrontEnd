import {
    makeRedirectUri,
    useAuthRequest,
    ResponseType,
} from "expo-auth-session";

const discovery = {
    authorizationEndpoint: "https://kauth.kakao.com/oauth/authorize",
};

const clientId = "921724e7a382d7cd627ef3c63c531a40";    // REST API키

export function useKakaoLogin() {
    const redirectUri = makeRedirectUri(); // 기본: https://auth.expo.io/@username/app-slug

    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId,
            redirectUri,
            responseType: ResponseType.Code,
        },
        discovery
    );

    return {
        promptAsync,     // 로그인 창 열기
        response,        // 응답 객체
        isReady: !!request,
    };
}