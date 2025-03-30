import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 347,
    backgroundColor: designSystem.colors.background.primaryComponent,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  question: {
    fontFamily: designSystem.fonts.primaryBold,
  },
});
