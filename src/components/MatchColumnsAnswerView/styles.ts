import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
  instructions: {
    backgroundColor: designSystem.colors.background.secondaryComponent,
    padding: 8,
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
    fontSize: 15,
    marginBottom: 5,
  },
  progressText: {
    textAlign: "center",
    color: designSystem.colors.text.secondary,
    fontFamily: designSystem.fonts.primaryBold,
    fontSize: 14,
  },
  columnsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: designSystem.colors.background.primaryComponent,
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    gap: 15,
  },
  columnTitle: {
    fontSize: 18,
    fontFamily: designSystem.fonts.primaryBold,
    color: designSystem.colors.text.secondary,
    marginBottom: 15,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: designSystem.colors.action.primary,
    paddingBottom: 8,
  },
  columnTitleColorBlind: {
    borderBottomColor: designSystem.colors.action.primaryColorBlind,
  },
  column: {
    flex: 1,
  },
  item: {
    padding: 15,
    backgroundColor: designSystem.colors.background.tertiaryComponent,
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 12,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  leftItem: {
    backgroundColor: designSystem.colors.background.tertiaryComponent,
    borderColor: designSystem.colors.action.primary,
    opacity: 0.8,
  },
  leftItemColorBlind: {
    borderColor: designSystem.colors.action.primaryColorBlind,
  },
  itemSelected: {
    backgroundColor: designSystem.colors.action.primary,
    borderColor: designSystem.colors.action.primary,
    transform: [{ scale: 1.02 }],
  },
  itemSelectedColorBlind: {
    backgroundColor: designSystem.colors.action.primaryColorBlind,
    borderColor: designSystem.colors.action.primaryColorBlind,
  },
  itemAssociated: {
    backgroundColor: designSystem.colors.action.secondary,
    borderColor: designSystem.colors.action.secondary,
    opacity: 0.8,
  },
  itemAssociatedColorBlind: {
    backgroundColor: designSystem.colors.action.secondaryColorBlind,
    borderColor: designSystem.colors.action.secondaryColorBlind,
  },
  itemText: {
    textAlign: "center",
    fontFamily: designSystem.fonts.primaryBold,
    fontSize: 16,
    color: designSystem.colors.text.secondary,
  },
  itemTextSelected: {
    color: designSystem.colors.text.primary,
  },
  connectionLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: designSystem.colors.action.primary,
  },
  connectionLineColorBlind: {
    borderTopColor: designSystem.colors.action.primaryColorBlind,
  },
  connectedItem: {
    backgroundColor: designSystem.colors.background.secondaryComponent,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: designSystem.colors.action.primary,
  },
  connectedItemColorBlind: {
    borderColor: designSystem.colors.action.primaryColorBlind,
  },
  connectedItemText: {
    fontFamily: designSystem.fonts.primaryBold,
    fontSize: 13,
    color: designSystem.colors.action.primary,
  },
  connectedItemTextColorBlind: {
    color: designSystem.colors.action.primaryColorBlind,
  },
  itemCorrect: {
    backgroundColor: designSystem.colors.action.primary,
    borderColor: designSystem.colors.action.primaryHover,
  },
  itemCorrectColorBlind: {
    backgroundColor: designSystem.colors.action.primaryColorBlind,
    borderColor: designSystem.colors.action.primaryColorBlindHover,
  },
  itemIncorrect: {
    backgroundColor: designSystem.colors.action.tertiary,
    borderColor: designSystem.colors.action.tertiaryHover,
  },
  itemIncorrectColorBlind: {
    backgroundColor: designSystem.colors.action.tertiaryColorBlind,
    borderColor: designSystem.colors.action.tertiaryColorBlindHover,
  },
  feedbackIcon: {
    fontSize: 20,
    fontFamily: designSystem.fonts.primaryBold,
    textAlign: "center",
    marginTop: 5,
  },
  lowVisionText: {
    fontSize: designSystem.fonts.lowVisionTextSize,
  },
  lowVisionTitle: {
    fontSize: designSystem.fonts.lowVisionTitleSize,
  },
});
