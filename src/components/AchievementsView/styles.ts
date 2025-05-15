import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: 362,
    height: 137,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: designSystem.colors.background.secondaryComponent,
    borderRadius: 20,
    marginBottom: 80,
    paddingVertical: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    maxHeight: 80,
    minHeight: 80,
    width: 80,
    aspectRatio: 1,
    margin: 15,
  },
});
