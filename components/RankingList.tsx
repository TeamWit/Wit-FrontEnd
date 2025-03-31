import { View } from "react-native";
import RankingItem from "./RankingItem";

const mockData = [
    {
        rank: 1,
        name: "비타민C 1000mg",
        category: "의약품",
        price: 12900,
        image: require("../assets/images/product-1.png"),
    },
    {
        rank: 2,
        name: "촉촉한 클렌징 폼",
        category: "뷰티",
        price: 8900,
        image: require("../assets/images/product-2.png"),
    },
    {
        rank: 3,
        name: "건강한 아몬드 스낵",
        category: "식품",
        price: 5900,
        image: require("../assets/images/product-3.png"),
    },
    {
        rank: 4,
        name: "건강한 아몬드 스낵",
        category: "식품",
        price: 5900,
        image: require("../assets/images/product-3.png"),
    },
    {
        rank: 5,
        name: "건강한 아몬드 스낵",
        category: "식품",
        price: 5900,
        image: require("../assets/images/product-3.png"),
    },
    {
        rank: 6,
        name: "건강한 아몬드 스낵",
        category: "식품",
        price: 5900,
        image: require("../assets/images/product-3.png"),
    },
    {
        rank: 7,
        name: "건강한 아몬드 스낵",
        category: "식품",
        price: 5900,
        image: require("../assets/images/product-3.png"),
    },

];

export default function RankingList() {
    return (
        <View>
            {mockData.map((item) => (
                <RankingItem key={item.rank} {...item} />
            ))}
        </View>
    );
}