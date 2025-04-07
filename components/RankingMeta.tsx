import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RankingMeta() {
    const handleFilterPress = () => {
        // 정렬 기준을 바꿀 수 있는 모달을 띄울 수 있음
        console.log("정렬 기준 필터 열기");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.updateText}>10분 전 업데이트</Text>
            <TouchableOpacity onPress={handleFilterPress}>
                <Text style={styles.filterText}>방금전 </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: "center",
    },
    updateText: {
        fontSize: 12,
        color: "#888",
    },
    filterText: {
        fontSize: 12,
        color: "#000",
        fontWeight: "500",
    },
});