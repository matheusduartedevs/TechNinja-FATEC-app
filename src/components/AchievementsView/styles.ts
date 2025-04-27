import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: 362,
    height: 137,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: designSystem.colors.background.secondaryComponent,
    borderRadius: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginLeft: 20,
    marginBottom: 20,
    maxHeight: 80,
    minHeight: 80,
    marginRight: 10,
    width: 80,
  },
  flatlistContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
