import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface RankingItemProps {
    rank: number;
    name: string;
    category: string;
    price: number;
    image: any;
}

export default function RankingItem({ rank, name, category, price, image }: RankingItemProps) {
    const [isSaved, setIsSaved] = useState(false);

    const toggleSave = () => {
        setIsSaved((prev) => !prev);
        // 🔧 여기서 저장/삭제 API 연동할 예정
    };

    return (
        <View style={styles.container}>
            {/* 제품 이미지 + 순위 박스 */}
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
                <View style={styles.rankBox}>
                    <Text style={styles.rankText}>{rank}</Text>
                </View>
            </View>

            {/* 텍스트 정보 */}
            <View style={styles.info}>
                <Text style={styles.category}>{category}</Text>
                <Text style={styles.name} numberOfLines={1}>{name}</Text>
                <Text style={styles.price}>{price.toLocaleString()}원</Text>
            </View>

            {/* 저장 아이콘 */}
            <TouchableOpacity onPress={toggleSave}>
                <Ionicons
                    name={isSaved ? "bookmark" : "bookmark-outline"}
                    size={24}
                    color="#555"
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        alignItems: "center",
    },
    imageContainer: {
        position: "relative",
        marginRight: 12,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        resizeMode: "cover",
    },
    rankBox: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#FF8C00", // 주황색
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    rankText: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
    },
    info: {
        flex: 1,
        justifyContent: "center",
    },
    category: {
        fontSize: 12,
        color: "#555",
        marginBottom: 4,
    },
    name: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 4,
    },
    price: {
        fontSize: 14,
        color: "#000",
    },
});