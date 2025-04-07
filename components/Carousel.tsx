import { useEffect, useRef, useState } from "react";
import { ScrollView, View, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const banners = [
  { id: 1, image: "https://example.com/banner1.jpg" },
  { id: 2, image: "https://example.com/banner2.jpg" },
  { id: 3, image: "https://example.com/banner3.jpg" },
];

export default function Carousel() {
  const scrollRef = useRef<ScrollView>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (current + 1) % banners.length;
      scrollRef.current?.scrollTo({ x: nextIndex * width, animated: true });
      setCurrent(nextIndex);
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      ref={scrollRef}
      style={{ marginBottom: 16 }}
    >
      {banners.map((banner) => (
        <Image
          key={banner.id}
          source={{ uri: banner.image }}
          style={{ width, height: width, resizeMode: "cover" }}
        />
      ))}
    </ScrollView>
  );
}
