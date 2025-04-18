import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: 370,
    height: 360,
    backgroundColor: designSystem.colors.action.primary,
    borderRadius: 20,
    padding: 15,
  },
  imageWrapper: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  image: {
    width: 130,
    height: 130,
    alignSelf: "center",
  },
  title: {
    fontFamily: designSystem.fonts.primaryBold,
  },
  text: {
    color: designSystem.colors.text.primary,
  },
});
