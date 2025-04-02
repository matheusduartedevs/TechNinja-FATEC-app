import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: designSystem.colors.background.secondary,
    width: 362,
    height: 49,
    borderRadius: 20,
    alignContent: "center",
    alignItems: "center",
    padding: 10,
  },
  option: {
    color: designSystem.colors.text.primary,
  },
});
