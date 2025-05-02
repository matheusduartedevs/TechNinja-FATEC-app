import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 380,
    height: 70,
    borderRadius: 20,
    backgroundColor: designSystem.colors.background.primaryComponent,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "transparent",
    alignContent: "center",
    justifyContent: "center",
  },
  answer: {
    marginLeft: 5,
    fontFamily: designSystem.fonts.primaryRegular,
  },
  correct: {
    backgroundColor: designSystem.colors.action.primary,
    borderColor: designSystem.colors.action.primaryHover,
  },
  wrong: {
    backgroundColor: designSystem.colors.action.tertiary,
    borderColor: designSystem.colors.action.tertiaryHover,
  },
});
