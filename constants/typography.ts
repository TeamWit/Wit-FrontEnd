import { TextStyle } from "react-native";

const Typography: Record<string, TextStyle> = {
  display1: { fontSize: 24, lineHeight: 35, fontWeight: "bold" },
  headline1: { fontSize: 20, lineHeight: 28, fontWeight: "bold" },
  subtitle1: { fontSize: 18, lineHeight: 26, fontWeight: "600" },

  body1: { fontSize: 16, lineHeight: 16, fontWeight: "400" },
  body2: { fontSize: 16, lineHeight: 16, fontWeight: "500" },

  caption1: { fontSize: 14, lineHeight: 22, fontWeight: "400" },
  caption2: { fontSize: 14, lineHeight: 22, fontWeight: "500" },
  caption3: { fontSize: 14, lineHeight: 22, fontWeight: "600" },
  caption4: { fontSize: 12, lineHeight: 16, fontWeight: "400" },
  caption5: { fontSize: 12, lineHeight: 16, fontWeight: "500" },
  caption: { fontSize: 10, lineHeight: 16, fontWeight: "400" },
} as const;

export default Typography;
