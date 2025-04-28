import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 20,
    backgroundColor: designSystem.colors.background.secondary,
    width: 330,
    height: 150,
    borderRadius: 20,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    paddingTop: 15,
  },
  option: {
    flexDirection: "row",
    color: designSystem.colors.text.primary,
    justifyContent: "space-between",
    width: "90%",
  },
});
