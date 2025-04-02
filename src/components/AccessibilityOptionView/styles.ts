import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 354,
    height: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  option: {
    color: designSystem.colors.text.primary,
    flex: 1,
  },
  toggleContainer: {
    width: 40,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    padding: 2,
  },
  toggleCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: designSystem.colors.background.secondaryComponent,
    position: "absolute",
    top: 2,
  },
});
