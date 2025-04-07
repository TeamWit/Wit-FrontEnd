import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/colors";
import Typography from "@/constants/typography";

const items = {
  "1": {
    category: "생활용품",
    name: "고바야시 쇼슈겐 2개입",
    price: "약 12,530원",
    image: "https://example.com/image1.jpg",
    description: "일본 인기 탈취제, 냄새 제거 효과!",
  },
  "2": {
    category: "화장품",
    name: "캔메이크 일루미네이팅 피니쉬 파우더",
    price: "약 7,530원",
    image: "https://example.com/image2.jpg",
    description: "화사한 피부 표현을 위한 파우더",
  },
  "3": {
    category: "의약품",
    name: "다이소 구내염 패치",
    price: "약 8,530원",
    image: "https://example.com/image3.jpg",
    description: "구내염 완화를 위한 특수 패치",
  },
};

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const product = items[id as keyof typeof items];

  if (!product) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ ...Typography.headline1, color: Colors.gray600 }}>
          상품을 찾을 수 없습니다.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 16 }}>
      <Image
        source={{ uri: product.image }}
        style={{ width: "100%", height: 200, borderRadius: 10 }}
      />
      <Text
        style={{
          ...Typography.headline1,
          color: Colors.gray600,
          marginTop: 20,
        }}
      >
        {product.name}
      </Text>
      <Text
        style={{
          ...Typography.body2,
          color: Colors.gray400,
          marginVertical: 10,
        }}
      >
        {product.category} | {product.price}
      </Text>
      <Text style={{ ...Typography.body1, color: Colors.gray500 }}>
        {product.description}
      </Text>
    </SafeAreaView>
  );
};

export default ProductDetail;
