import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: "transparent",
  },
  title: {
    flex: 1,
    fontFamily: designSystem.fonts.primaryBold,
    color: designSystem.colors.text.primary,
    textAlign: "center",
    fontSize: 28,
  },
  lowVisionTitle: {
    fontSize: designSystem.fonts.lowVisionTitleSize,
  },
});

export const styleIcon = (color: "primary" | "secondary" = "secondary") => ({
  color: color === "primary" ? "#FFFFFF" : "#000000",
});
