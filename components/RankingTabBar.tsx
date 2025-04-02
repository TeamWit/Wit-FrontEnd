import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";

const categories = ["전체", "식품", "뷰티", "의약품", "생활용품", "기타"];
const SCREEN_WIDTH = Dimensions.get("window").width;
const TAB_WIDTH = SCREEN_WIDTH / categories.length;

export default function RankingTabBar() {
    const [selected, setSelected] = useState("전체");

    return (
        <View style={styles.container}>
            {categories.map((category) => {
                const isSelected = selected === category;
                return (
                    <TouchableOpacity
                        key={category}
                        style={[styles.tab, { width: TAB_WIDTH }]}
                        onPress={() => setSelected(category)}
                    >
                        <Text style={[styles.tabText, isSelected && styles.tabTextActive]}>
                            {category}
                        </Text>
                        {isSelected && <View style={styles.underline} />}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomColor: "#eee",
        backgroundColor: "#fff",
    },
    tab: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
    },
    tabText: {
        fontSize: 14,
        color: "#A0A0A0",
    },
    tabTextActive: {
        color: "#000",
        fontWeight: "bold",
    },
    underline: {
        marginTop: 6,
        height: 2,
        backgroundColor: "#000",
        width: "60%",
    },
});