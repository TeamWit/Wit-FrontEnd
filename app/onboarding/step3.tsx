import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@constants/colors";
import Typography from "@/constants/typography";

const Step3 = () => {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    "나에게 선물",
    "친구 선물",
    "가족 선물",
    "수집",
    "직장 선물",
    "주변인 부탁/구매대행",
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category))
        return prev.filter((item) => item !== category);
      if (prev.length < 3) return [...prev, category];
      return prev;
    });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.white }}
      edges={["top"]}
    >
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        {/* 뒤로 가기 버튼 */}
        <View
          style={{ height: 60, justifyContent: "center", marginHorizontal: 16 }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ width: 24, height: 24 }}
          >
            <Text style={{ fontSize: 24 }}>←</Text>
          </TouchableOpacity>
        </View>

        {/* 진행 상태 표시 */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
            backgroundColor: "#FFF1EB",
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 6,
            marginBottom: 20,
            marginHorizontal: 16,
          }}
        >
          <Text style={{ ...Typography.caption4, color: Colors.primary }}>
            3
          </Text>
          <Text style={{ ...Typography.caption4, color: "#FFA176" }}>/3</Text>
        </View>

        {/* 제목 */}
        <Text
          style={{
            ...Typography.subtitle1,
            color: Colors.gray600,
            marginBottom: 16,
            marginHorizontal: 16,
          }}
        >
          나는 이런 이유로 기념품을 사요
        </Text>

        {/*  설명 */}
        <Text
          style={{
            ...Typography.caption5,
            color: Colors.gray400,
            marginBottom: 30,
            marginHorizontal: 16,
          }}
        >
          최대 3개까지 선택할 수 있어요
        </Text>

        {/* 카테고리 버튼 */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginHorizontal: 16,
          }}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              onPress={() => toggleCategory(category)}
              style={{
                width: "48%",
                paddingVertical: 16,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
                borderWidth: 0.7,
                borderColor: selectedCategories.includes(category)
                  ? Colors.primary
                  : Colors.gray400,
                backgroundColor: selectedCategories.includes(category)
                  ? Colors.primary10
                  : Colors.white,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  ...Typography[
                    selectedCategories.includes(category)
                      ? "caption1"
                      : "caption2"
                  ], // ✅ 선택 여부에 따라 Caption2 또는 Caption1 적용
                  color: selectedCategories.includes(category)
                    ? Colors.primary
                    : Colors.gray400,
                }}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 완료 버튼  */}
        <TouchableOpacity
          onPress={() => router.push("/onboarding/start")}
          disabled={selectedCategories.length === 0}
          style={{
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            backgroundColor:
              selectedCategories.length > 0 ? Colors.primary : Colors.gray300,
            marginHorizontal: 26,
            position: "absolute",
            bottom: 60,
            left: 0,
            right: 0,
          }}
        >
          <Text
            style={{
              ...Typography.body1,
              color: Colors.white,
              fontWeight: "bold",
            }}
          >
            다음
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Step3;
