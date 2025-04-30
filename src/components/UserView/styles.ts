import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 190,
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

  iconWrapper: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  iconCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
  },

  icon: {
    width: "100%",
    height: "100%",
  },

  name: {
    position: "absolute",
    bottom: -35,
  },

  badge: {
    position: "absolute",
    width: 30,
    height: 30,
  },

  badgeTop: {
    top: -5,
    right: 20,
  },

  badgeBottom: {
    bottom: -10,
    alignSelf: "center",
  },
});
