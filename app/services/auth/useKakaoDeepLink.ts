import { useEffect } from 'react';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/store/slices/auth';
import { Alert } from 'react-native';

export default function useKakaoDeepLink(onSuccess?: () => void) {
    const router = useRouter();
    const setToken = useAuthStore((state) => state.setToken);

    const handleDeepLink = (url: string) => {
        const match = url.match(/token=([^&]+)/);
        const token = match?.[1];

        if (token) {
            setToken(token);
            onSuccess?.(); // 애니메이션 등 성공 후 동작
        } else {
            Alert.alert('로그인 실패', '토큰이 전달되지 않았습니다.');
        }
    };

    useEffect(() => {
        const subscription = Linking.addEventListener('url', ({ url }) => {
            handleDeepLink(url);
        });

        Linking.getInitialURL().then((url) => {
            if (url) handleDeepLink(url);
        });

        return () => {
            subscription.remove();
        };
    }, []);
}