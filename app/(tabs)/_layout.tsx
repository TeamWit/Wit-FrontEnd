import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          switch (route.name) {
            case "index":
              iconSource = require("@/assets/images/home.png");
              break;
            case "category":
              iconSource = require("@/assets/images/category_search.png");
              break;
            case "community":
              iconSource = require("@/assets/images/tooltip_2.png");
              break;
            case "bookmark":
              iconSource = require("@/assets/images/bookmark.png");
              break;
            case "mypage":
              iconSource = require("@/assets/images/person.png");
              break;
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#FF6F61" : "#B0B0B0",
              }}
            />
          );
        },
        tabBarActiveTintColor: "#FF6F61",
        tabBarInactiveTintColor: "#B0B0B0",
        headerShown: false,
      })}
    >
      <Tabs.Screen name="index" options={{ tabBarLabel: "홈" }} />
      <Tabs.Screen name="category" options={{ tabBarLabel: "카테고리" }} />
      <Tabs.Screen name="community" options={{ tabBarLabel: "커뮤니티" }} />
      <Tabs.Screen name="bookmark" options={{ tabBarLabel: "스크랩" }} />
      <Tabs.Screen name="mypage" options={{ tabBarLabel: "마이페이지" }} />
    </Tabs>
  );
}
