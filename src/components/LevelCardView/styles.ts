import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 380,
    height: 104,
    borderRadius: 20,
    justifyContent: "center",
  },
  title: {
    marginLeft: 34,
    fontFamily: designSystem.fonts.primaryBold,
  },
});
