import {
    makeRedirectUri,
    useAuthRequest,
    ResponseType,
} from "expo-auth-session";

const discovery = {
    authorizationEndpoint: "https://kauth.kakao.com/oauth/authorize",
    tokenEndpoint: "https://kauth.kakao.com/oauth/token", // 나중에 백엔드에서 사용
};

const clientId = "921724e7a382d7cd627ef3c63c531a40"; // 너의 Kakao REST API 키

export function useKakaoLogin() {

    const redirectUri = makeRedirectUri({
        useProxy: true,
    } as any);

    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId,
            redirectUri,
            responseType: ResponseType.Code,
        },
        discovery
    );

    return {
        promptAsync,
        response,
        isReady: !!request,
        redirectUri, // 로그나 디버깅 시 출력할 수 있게 같이 반환
    };
}