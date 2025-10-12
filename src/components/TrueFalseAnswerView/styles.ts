import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  optionContainer: {
    marginVertical: 8,
  },
  option: {
    minHeight: 70,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: designSystem.colors.background.primaryComponent,
    borderWidth: 2,
    borderColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  optionSelected: {
    backgroundColor: designSystem.colors.action.primary,
    borderColor: designSystem.colors.action.primary,
  },
  optionSelectedColorBlind: {
    backgroundColor: designSystem.colors.action.primaryColorBlind,
    borderColor: designSystem.colors.action.primaryColorBlind,
  },
  optionCorrect: {
    backgroundColor: designSystem.colors.action.primary,
    borderColor: designSystem.colors.action.primary,
  },
  optionCorrectColorBlind: {
    backgroundColor: designSystem.colors.action.primaryColorBlind,
    borderColor: designSystem.colors.action.primaryColorBlind,
  },
  optionIncorrect: {
    backgroundColor: designSystem.colors.action.tertiary,
    borderColor: designSystem.colors.action.tertiary,
  },
  optionIncorrectColorBlind: {
    backgroundColor: designSystem.colors.action.tertiaryColorBlind,
    borderColor: designSystem.colors.action.tertiaryColorBlind,
  },
  optionCorrectShow: {
    backgroundColor: designSystem.colors.action.primary,
    borderColor: designSystem.colors.action.primary,
    opacity: 0.8,
  },
  optionCorrectShowColorBlind: {
    backgroundColor: designSystem.colors.action.primaryColorBlind,
    borderColor: designSystem.colors.action.primaryColorBlind,
    opacity: 0.8,
  },
  optionText: {
    flex: 1,
    fontSize: 18,
    fontFamily: designSystem.fonts.primaryBold,
    color: designSystem.colors.text.secondary,
    textAlign: "center",
  },
  optionTextSelected: {
    color: designSystem.colors.text.primary,
  },
  feedbackIcon: {
    fontSize: 24,
    fontFamily: designSystem.fonts.primaryBold,
    marginLeft: 15,
    color: designSystem.colors.text.primary,
  },
  explicacao: {
    marginTop: 12,
    padding: 15,
    backgroundColor: designSystem.colors.background.secondaryComponent,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: designSystem.colors.action.primary,
  },
  explicacaoColorBlind: {
    borderLeftColor: designSystem.colors.action.primaryColorBlind,
  },
  explicacaoText: {
    fontSize: 15,
    lineHeight: 22,
    color: designSystem.colors.text.secondary,
    fontFamily: designSystem.fonts.primaryRegular,
  },
  lowVisionText: {
    fontSize: designSystem.fonts.lowVisionTextSize,
  },
  lowVisionOption: {
    minHeight: 80,
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
});
