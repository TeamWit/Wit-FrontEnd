import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useKakaoLogin } from "@/app/services/auth/kakao";
import {makeRedirectUri} from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    const router = useRouter();
    const { promptAsync, response, isReady } = useKakaoLogin();

    useEffect(() => {
        const redirectUri = makeRedirectUri();
        console.log(redirectUri);

        if (response?.type === "success") {
            const { code } = response.params;
            console.log("인가 코드:", code);
            router.push("/onboarding/start");
        }
    }, [response]);

    return (
        <View style={styles.container}>
            <View style={styles.headerText}>
                <Text style={styles.headline1}>이제는 해외여행도</Text>
                <Text style={styles.headline2}>위트있게!</Text>
            </View>

            <Image
                source={require("../../assets/images/wit-logo.png")}
                style={styles.image}
                resizeMode="contain"
            />

            <View style={styles.footer}>
                <Text style={styles.subtext}>⚡ 간편 로그인으로 3초만에 가입하기</Text>

                <View style={styles.buttonGroup}>
                    <TouchableOpacity
                        style={[styles.button, styles.kakao]}
                        onPress={() => {
                            if (isReady) promptAsync();
                        }}
                    >
                        <View style={styles.buttonContent}>
                            <Image
                                source={require("../../assets/images/kakao-icon.png")}
                                style={styles.icon}
                                resizeMode="contain"
                            />
                            <Text style={styles.buttonText}>카카오로 시작하기</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFDF8",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        position: "absolute",
        top: 80,
        alignItems: "center",
    },
    headline1: {
        fontSize: 25,
        fontWeight: "500",
        color: "#282828",
        textAlign: "center",
    },
    headline2: {
        fontSize: 27,
        fontWeight: "bold",
        color: "#FF5100",
        textAlign: "center",
        marginTop: 4,
    },
    image: {
        width: 230,
        height: 240,
    },
    footer: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        paddingHorizontal: 24,
        alignItems: "center",
    },
    subtext: {
        fontSize: 14,
        color: "#999",
        marginBottom: 20,
    },
    buttonGroup: {
        width: "100%",
    },
    button: {
        height: 52,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    kakao: {
        backgroundColor: "#FEE500",
    },
    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    icon: {
        width: 20,
        height: 20,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
    },
});