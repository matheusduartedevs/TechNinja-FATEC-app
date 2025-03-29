import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 190,
    backgroundColor: designSystem.colors.background.secondaryComponent,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  position: {
    position: "absolute",
    top: -45,
    right: 86,
    fontFamily: designSystem.fonts.primaryBold,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    position: "absolute",
    bottom: -35,
    color: designSystem.colors.text.primary,
  },
  badge: {
    position: "absolute",
    width: 30,
    height: 30,
  },
  badgeTop: {
    top: -32,
    right: -33,
  },
  badgeBottom: {
    bottom: -70,
    alignSelf: "center",
  },
});
