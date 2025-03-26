import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: designSystem.fonts.titleSize,
    fontFamily: designSystem.fonts.brandFont,
    color: designSystem.colors.text.primary,
  },
});
