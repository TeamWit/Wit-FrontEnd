import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/colors";
import Typography from "@/constants/typography";

const Start = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFFDF8" }}
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

        {/* 메인 텍스트 */}
        <Text
          style={{
            ...Typography.display1,
            color: Colors.gray600,
            marginHorizontal: 16,
          }}
        >
          위트 있는 해외 선물,
        </Text>
        <Text
          style={{
            ...Typography.display1,
            color: Colors.gray600,
            marginHorizontal: 16,
          }}
        >
          위트에서 찾아보세요
        </Text>

        {/*  시작하기 버튼 */}
        <TouchableOpacity
          onPress={() => router.push("/onboarding/step1")}
          style={{
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6,
            backgroundColor: Colors.primary,
            marginHorizontal: 26,
            position: "absolute",
            bottom: 60,
            left: 0,
            right: 0,
          }}
        >
          <Text style={{ color: Colors.white, fontWeight: "bold" }}>
            시작하기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Start;
