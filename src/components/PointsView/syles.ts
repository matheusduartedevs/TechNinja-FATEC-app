import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 40,
    backgroundColor: designSystem.colors.background.secondaryComponent,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    gap: 20,
  },
  icon: {
    resizeMode: "contain",
    marginRight: 5,
  },
  points: {
    fontSize: designSystem.fonts.textSize,
    fontFamily: designSystem.fonts.primaryBold,
    color: designSystem.colors.text.secondary,
    textAlign: "center",
  },
});
