import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  instructions: {
    backgroundColor: designSystem.colors.background.secondaryComponent,
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: designSystem.colors.action.primary,
  },
  instructionsColorBlind: {
    borderColor: designSystem.colors.action.primaryColorBlind,
  },
  instructionText: {
    textAlign: "center",
    color: designSystem.colors.text.secondary,
    fontFamily: designSystem.fonts.primaryRegular,
    fontSize: 14,
    marginBottom: 8,
  },
  progressText: {
    textAlign: "center",
    color: designSystem.colors.text.secondary,
    fontFamily: designSystem.fonts.primaryBold,
    fontSize: 13,
    marginTop: 4,
  },
  selectionHint: {
    textAlign: "center",
    color: designSystem.colors.action.primary,
    fontFamily: designSystem.fonts.primaryBold,
    fontSize: 14,
    marginTop: 8,
  },
  selectionHintColorBlind: {
    color: designSystem.colors.action.primaryColorBlind,
  },
  dropSpacesContainer: {
    backgroundColor: designSystem.colors.background.primaryComponent,
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  dropSpacesTitle: {
    fontSize: 16,
    fontFamily: designSystem.fonts.primaryBold,
    color: designSystem.colors.text.secondary,
    marginBottom: 15,
    textAlign: "center",
  },
  spacesGrid: {
    gap: 12,
  },
  spaceItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  spaceLabel: {
    fontFamily: designSystem.fonts.primaryBold,
    fontSize: 14,
    color: designSystem.colors.text.secondary,
    minWidth: 80,
  },
  dropSpace: {
    flex: 1,
    minHeight: 50,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: designSystem.colors.action.primary,
    borderRadius: 8,
    backgroundColor: designSystem.colors.background.secondaryComponent,
    justifyContent: "center",
    alignItems: "center",
  },
  dropSpaceColorBlind: {
    borderColor: designSystem.colors.action.primaryColorBlind,
  },
  dropSpaceAvailable: {
    borderStyle: "solid",
    backgroundColor: "rgba(82, 216, 69, 0.1)",
  },
  dropSpaceAvailableColorBlind: {
    backgroundColor: "rgba(0, 0, 255, 0.1)",
  },
  dropSpaceCorrect: {
    backgroundColor: "rgba(82, 216, 69, 0.2)",
    borderColor: designSystem.colors.action.primary,
    borderStyle: "solid",
  },
  dropSpaceCorrectColorBlind: {
    backgroundColor: "rgba(0, 0, 255, 0.2)",
    borderColor: designSystem.colors.action.primaryColorBlind,
  },
  dropSpaceIncorrect: {
    backgroundColor: "rgba(200, 48, 48, 0.2)",
    borderColor: designSystem.colors.action.tertiary,
    borderStyle: "solid",
  },
  dropSpaceIncorrectColorBlind: {
    backgroundColor: "rgba(176, 0, 32, 0.2)",
    borderColor: designSystem.colors.action.tertiaryColorBlind,
  },
  droppedItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  droppedItemText: {
    fontFamily: designSystem.fonts.primaryBold,
    fontSize: 15,
    color: designSystem.colors.text.secondary,
  },
  placeholderText: {
    fontSize: 13,
    color: "#999",
    fontFamily: designSystem.fonts.primaryRegular,
    fontStyle: "italic",
  },
  removeIcon: {
    fontSize: 20,
    color: "#999",
    fontFamily: designSystem.fonts.primaryBold,
  },
  feedbackIcon: {
    fontSize: 18,
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
  draggableItems: {
    backgroundColor: designSystem.colors.background.primaryComponent,
    padding: 15,
    borderRadius: 16,
    marginBottom: 20,
  },
  itemsTitle: {
    fontSize: 16,
    fontFamily: designSystem.fonts.primaryBold,
    color: designSystem.colors.text.secondary,
    marginBottom: 15,
    textAlign: "center",
  },
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  draggableItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: designSystem.colors.action.primary,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  draggableItemColorBlind: {
    backgroundColor: designSystem.colors.action.primaryColorBlind,
  },
  draggableItemText: {
    color: designSystem.colors.text.primary,
    fontFamily: designSystem.fonts.primaryBold,
    fontSize: 15,
  },
  draggableItemSelected: {
    backgroundColor: "#000000",
    transform: [{ scale: 1.05 }],
    elevation: 4,
  },
  draggableItemUsed: {
    backgroundColor: "#e8f5e8",
  },
  draggableItemUsedText: {
    color: "#333",
  },
  draggableItemDisabled: {
    opacity: 0.5,
  },
  usedIndicator: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: designSystem.colors.action.primary,
    color: designSystem.colors.text.primary,
    borderRadius: 9,
    width: 18,
    height: 18,
    fontSize: 12,
    fontFamily: designSystem.fonts.primaryBold,
    textAlign: "center",
    lineHeight: 18,
  },
  usedIndicatorColorBlind: {
    backgroundColor: designSystem.colors.action.primaryColorBlind,
  },
  correctAnswerDisplay: {
    backgroundColor: designSystem.colors.background.primaryComponent,
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: designSystem.colors.action.primary,
  },
  correctAnswerDisplayColorBlind: {
    borderLeftColor: designSystem.colors.action.primaryColorBlind,
  },
  correctAnswerTitle: {
    fontSize: 16,
    fontFamily: designSystem.fonts.primaryBold,
    color: designSystem.colors.text.secondary,
    marginBottom: 12,
    textAlign: "center",
  },
  correctWordsList: {
    gap: 10,
  },
  correctWordItem: {
    backgroundColor: designSystem.colors.background.secondary,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: designSystem.colors.action.primary,
    alignSelf: "center",
  },
  correctWordItemColorBlind: {
    borderColor: designSystem.colors.action.primaryColorBlind,
  },
  correctWordItemText: {
    fontSize: 14,
    fontFamily: designSystem.fonts.primaryRegular,
    color: designSystem.colors.text.primary,
  },
  correctWordItemTextBold: {
    color: designSystem.colors.action.primary,
    fontFamily: designSystem.fonts.primaryBold,
  },
  correctWordItemTextBoldColorBlind: {
    color: designSystem.colors.action.primaryColorBlind,
  },
  lowVisionText: {
    fontSize: designSystem.fonts.lowVisionTextSize,
  },
  lowVisionTitle: {
    fontSize: designSystem.fonts.lowVisionTitleSize,
  },
});
