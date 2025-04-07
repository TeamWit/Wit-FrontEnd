import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import BackIcon from "@/assets/icons/back-icon.svg";
import SearchIcon from "@/assets/icons/search-icon.svg";
import FilterIcon from "@/assets/icons/filter-icon.svg";

export default function RankingHeader() {
    const onPressBack = () => {
        // 추후 뒤로가기 로직 연결
    };

    const onPressSearch = () => {
        // 검색 기능 연결 예정
    };

    const onPressFilter = () => {
        // 필터 기능 연결 예정
    };

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onPressBack}>
                <BackIcon width={24} height={24} />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>위트 랭킹</Text>

            <View style={styles.rightIcons}>
                <TouchableOpacity onPress={onPressSearch} style={styles.iconButton}>
                    <SearchIcon width={24} height={24} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressFilter} style={styles.iconButton}>
                    <FilterIcon width={24} height={24} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 10,
        marginVertical: 12,
        justifyContent: "space-between",
        backgroundColor: "#fff",
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        flex: 1,
        textAlign: "left",
        paddingLeft: 16,
    },
    rightIcons: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButton: {
        marginHorizontal: 12,
    },
});