import { AnswerViewProps } from "@/src/components/AnswerView/props";
import { TouchableOpacity } from "react-native";
import { styles } from "@/src/components/AnswerView/styles";
import TextView from "@/src/components/TextView/TextView";
import designSystem from "@/src/styles/theme";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

export default function AnswerView({
  answer,
  style,
  isSelected,
  isCorrect,
  isWrong,
  onPress,
}: AnswerViewProps) {
  const { settings } = useAccessibility();

  const borderColor = isSelected
    ? settings.colorBlindMode
      ? designSystem.colors.action.primaryColorBlind
      : designSystem.colors.action.primary
    : "transparent";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        style,
        { borderColor },
        isCorrect &&
          (settings.colorBlindMode ? styles.correctColorBlind : styles.correct),
        isWrong &&
          (settings.colorBlindMode ? styles.wrongColorBlind : styles.wrong),
      ]}
    >
      <TextView
        color={"secondary"}
        text={answer}
        style={[
          styles.answer,
          settings.lowVisionMode && {
            fontSize: designSystem.fonts.lowVisionTextSize,
          },
        ]}
      />
    </TouchableOpacity>
  );
}
