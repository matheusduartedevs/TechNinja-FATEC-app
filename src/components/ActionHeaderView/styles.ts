import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    left: 20,
  },
  title: {
    fontFamily: designSystem.fonts.primaryBold,
    textAlign: "center",
  },
});
