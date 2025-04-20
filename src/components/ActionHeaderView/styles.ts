import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    flex: 1,
    fontFamily: designSystem.fonts.primaryBold,
    textAlign: "center",
  },
});
