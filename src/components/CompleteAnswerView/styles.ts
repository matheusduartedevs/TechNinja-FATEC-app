import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  inputArea: {
    backgroundColor: designSystem.colors.background.primaryComponent,
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 12,
    backgroundColor: designSystem.colors.background.secondaryComponent,
    fontSize: 16,
    fontFamily: designSystem.fonts.primaryBold,
    color: designSystem.colors.text.secondary,
  },
  inputFocused: {
    borderColor: designSystem.colors.action.primary,
    backgroundColor: designSystem.colors.background.tertiaryComponent,
  },
  inputFocusedColorBlind: {
    borderColor: designSystem.colors.action.primaryColorBlind,
  },
  inputCorrect: {
    borderColor: designSystem.colors.action.primary,
    backgroundColor: "rgba(82, 216, 69, 0.1)",
  },
  inputCorrectColorBlind: {
    borderColor: designSystem.colors.action.primaryColorBlind,
    backgroundColor: "rgba(0, 0, 255, 0.1)",
  },
  inputIncorrect: {
    borderColor: designSystem.colors.action.tertiary,
    backgroundColor: "rgba(200, 48, 48, 0.1)",
  },
  inputIncorrectColorBlind: {
    borderColor: designSystem.colors.action.tertiaryColorBlind,
    backgroundColor: "rgba(176, 0, 32, 0.1)",
  },
  inputDisabled: {
    opacity: 0.8,
  },
  submitButton: {
    marginTop: 15,
    alignSelf: "center",
  },
  inputFeedback: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  feedbackIcon: {
    fontSize: 24,
    fontFamily: designSystem.fonts.primaryBold,
  },
  feedbackIconCorrect: {
    color: designSystem.colors.action.primary,
  },
  feedbackIconCorrectColorBlind: {
    color: designSystem.colors.action.primaryColorBlind,
  },
  feedbackIconIncorrect: {
    color: designSystem.colors.action.tertiary,
  },
  feedbackIconIncorrectColorBlind: {
    color: designSystem.colors.action.tertiaryColorBlind,
  },
  answerFeedback: {
    backgroundColor: designSystem.colors.background.primaryComponent,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  correctFeedback: {
    borderLeftWidth: 4,
    borderLeftColor: designSystem.colors.action.primary,
    paddingLeft: 15,
  },
  correctFeedbackColorBlind: {
    borderLeftColor: designSystem.colors.action.primaryColorBlind,
  },
  incorrectFeedback: {
    borderLeftWidth: 4,
    borderLeftColor: designSystem.colors.action.tertiary,
    paddingLeft: 15,
  },
  incorrectFeedbackColorBlind: {
    borderLeftColor: designSystem.colors.action.tertiaryColorBlind,
  },
  feedbackTitle: {
    fontSize: 18,
    fontFamily: designSystem.fonts.primaryBold,
    marginBottom: 12,
  },
  feedbackTitleCorrect: {
    color: designSystem.colors.action.primary,
  },
  feedbackTitleCorrectColorBlind: {
    color: designSystem.colors.action.primaryColorBlind,
  },
  feedbackTitleIncorrect: {
    color: designSystem.colors.action.tertiary,
  },
  feedbackTitleIncorrectColorBlind: {
    color: designSystem.colors.action.tertiaryColorBlind,
  },
  feedbackText: {
    fontSize: 15,
    lineHeight: 22,
    color: designSystem.colors.text.secondary,
    fontFamily: designSystem.fonts.primaryRegular,
    marginVertical: 6,
  },
  feedbackTextBold: {
    fontFamily: designSystem.fonts.primaryBold,
  },
  feedbackTextBoldCorrect: {
    color: designSystem.colors.action.primary,
  },
  feedbackTextBoldCorrectColorBlind: {
    color: designSystem.colors.action.primaryColorBlind,
  },
  feedbackTextBoldIncorrect: {
    color: designSystem.colors.action.tertiary,
  },
  feedbackTextBoldIncorrectColorBlind: {
    color: designSystem.colors.action.tertiaryColorBlind,
  },
  lowVisionText: {
    fontSize: designSystem.fonts.lowVisionTextSize,
  },
  lowVisionTitle: {
    fontSize: designSystem.fonts.lowVisionTitleSize,
  },
});
