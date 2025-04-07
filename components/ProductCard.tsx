import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Colors from "@/constants/colors";
import Typography from "@/constants/typography";

type Product = {
  id: string;
  rank: number;
  category: string;
  name: string;
  price: string;
  image: string;
  isScrapped: boolean;
};

type Props = {
  item: Product;
};

export default function ProductCard({ item }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`/product/${item.id}`)}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.gray300,
      }}
    >
      <Text style={{ ...Typography.body2, fontWeight: "bold", marginRight: 8 }}>
        {item.rank}
      </Text>
      <Image
        source={{ uri: item.image }}
        style={{ width: 50, height: 50, borderRadius: 6, marginRight: 10 }}
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
      <TouchableOpacity onPress={() => console.log("스크랩 토글")}>
        <Ionicons
          name={item.isScrapped ? "bookmark" : "bookmark-outline"}
          size={20}
          color={item.isScrapped ? Colors.primary : "black"}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
