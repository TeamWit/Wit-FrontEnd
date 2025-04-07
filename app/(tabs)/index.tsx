import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Colors from "@/constants/colors";
import Typography from "@/constants/typography";
import { Ionicons } from "@expo/vector-icons";

const items = [
  {
    id: "1",
    rank: 1,
    category: "생활용품",
    name: "고바야시 쇼슈겐 2개입",
    price: "약 12,530원",
    image: "https://example.com/image1.jpg",
  },
  {
    id: "2",
    rank: 2,
    category: "화장품",
    name: "캔메이크 일루미네이팅 피니쉬 파우더",
    price: "약 7,530원",
    image: "https://example.com/image2.jpg",
  },
  {
    id: "3",
    rank: 3,
    category: "의약품",
    name: "다이소 구내염 패치",
    price: "약 8,530원",
    image: "https://example.com/image3.jpg",
  },
];

const HomeScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      {/* 🔹 네비게이션 바 */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          height: 50,
        }}
      >
        {/* 왼쪽: 국가 선택 */}
        <Text style={{ ...Typography.body1, fontWeight: "bold" }}>일본</Text>

        {/* 오른쪽: 검색 & 알림 아이콘 */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => console.log("검색")}>
            <Ionicons
              name="search"
              size={24}
              color="black"
              style={{ marginRight: 16 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("알림")}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 🔹 상단 배너 */}
      <View style={{ marginHorizontal: 16, marginBottom: 16 }}>
        <Image
          source={{ uri: "https://example.com/banner.jpg" }}
          style={{ width: "100%", height: 160, borderRadius: 10 }}
        />
      </View>

      {/* 🔹 위트 랭킹 */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 16,
          marginBottom: 10,
        }}
      >
        <Text style={{ ...Typography.subtitle1, fontWeight: "bold" }}>
          👑 위트 랭킹
        </Text>
        <TouchableOpacity onPress={() => console.log("더보기 클릭")}>
          <Text style={{ ...Typography.body2, color: Colors.gray600 }}>
            더보기 ＞
          </Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 상품 목록 (FlatList) */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log("상품 ID:", item.id); // 디버깅 로그 추가
              router.push(`./tabs/product/${item.id}`);
            }}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 10,
              borderBottomWidth: 0.5,
              borderBottomColor: Colors.gray300,
            }}
          >
            <Text
              style={{
                ...Typography.body2,
                fontWeight: "bold",
                marginRight: 8,
              }}
            >
              {item.rank}
            </Text>
            <Image
              source={{ uri: item.image }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 6,
                marginRight: 10,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ ...Typography.caption3, color: Colors.gray500 }}>
                {item.category}
              </Text>
              <Text style={{ ...Typography.body2, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text style={{ ...Typography.caption3, color: Colors.primary }}>
                {item.price}
              </Text>
            </View>
            <TouchableOpacity onPress={() => console.log("찜하기")}>
              <Ionicons name="bookmark-outline" size={20} color="black" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      {/* 🔹 하단 네비게이션 바 */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: 60,
          borderTopWidth: 1,
          borderTopColor: Colors.gray300,
        }}
      >
        <TouchableOpacity onPress={() => console.log("카테고리")}>
          <Ionicons name="grid-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("커뮤니티")}>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("홈")}>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("스크랩")}>
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("마이페이지")}>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
