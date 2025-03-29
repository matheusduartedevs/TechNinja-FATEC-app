import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    width: 370,
    height: 360,
    backgroundColor: designSystem.colors.action.primary,
    borderRadius: 20,
    padding: 15,
  },
  image: {
    width: 130,
    height: 130,
    marginTop: 60,
    alignSelf: "center",
  },
});
