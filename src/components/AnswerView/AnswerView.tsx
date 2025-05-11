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

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        style,
        {
          borderColor: isSelected
            ? designSystem.colors.action.primary
            : "transparent",
        },
        isCorrect && styles.correct,
        isWrong && styles.wrong,
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
