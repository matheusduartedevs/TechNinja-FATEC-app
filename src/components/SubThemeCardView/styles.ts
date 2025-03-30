import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 380,
    height: 180,
    position: "relative",
    backgroundColor: designSystem.colors.background.secondaryComponent,
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
  },
  iconContainer: {
    width: 140,
    height: "100%",
    backgroundColor: designSystem.colors.action.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 80,
  },
  title: {
    position: "absolute",
    top: 10,
    left: 150,
    fontFamily: designSystem.fonts.primaryRegular,
    fontSize: designSystem.fonts.textSize,
    width: 220,
    flexWrap: "wrap",
    textAlign: "left",
  },
  points: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
