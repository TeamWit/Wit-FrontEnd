import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

export default function LoginScreen() {
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
                    <TouchableOpacity style={[styles.button, styles.kakao]}>
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
        fontSize: 22,
        fontWeight: "500",
        color: "#FF4D00",
        textAlign: "center",
    },
    headline2: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FF4D00",
        textAlign: "center",
        marginTop: 4,
    },
    image: {
        width: 220,
        height: 220,
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