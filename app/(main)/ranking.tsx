import { View, Text, StyleSheet, ScrollView } from "react-native";
import RankingHeader from "../../components/RankingHeader";
import RankingTabBar from "../../components/RankingTabBar";
import RankingList from "../../components/RankingList";
import RankingMeta from "@/components/RankingMeta";

export default function RankingScreen() {
    return (
        <View style={styles.container}>
            <RankingHeader />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <RankingTabBar />
                <RankingMeta />
                <RankingList />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    contentContainer: {
        paddingBottom: 24,
    },
});
