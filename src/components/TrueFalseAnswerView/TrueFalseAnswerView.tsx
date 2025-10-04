import { View, TouchableOpacity, Text } from "react-native";
import { TrueFalseAnswerViewProps } from "./props";
import { styles } from "./styles";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

export default function TrueFalseAnswerView({
  alternatives,
  questionIndex,
  userAnswers,
  onAnswerChange,
  showFeedback,
  correctAnswer,
  isCorrect,
  isWrong,
  style,
}: TrueFalseAnswerViewProps) {
  const { settings } = useAccessibility();

  return (
    <View style={[styles.container, style]}>
      {alternatives.map((alt, idx) => {
        const isSelected = userAnswers[questionIndex] === alt.opcao;
        const isCorrectAnswer = alt.opcao === correctAnswer;

        const getOptionStyle = () => {
          const baseStyles = [
            styles.option,
            settings.lowVisionMode && styles.lowVisionOption,
          ];

          if (showFeedback && isSelected) {
            if (isCorrect) {
              return [
                ...baseStyles,
                styles.optionCorrect,
                settings.colorBlindMode && styles.optionCorrectColorBlind,
              ];
            } else {
              return [
                ...baseStyles,
                styles.optionIncorrect,
                settings.colorBlindMode && styles.optionIncorrectColorBlind,
              ];
            }
          } else if (showFeedback && isWrong && isCorrectAnswer) {
            return [
              ...baseStyles,
              styles.optionCorrectShow,
              settings.colorBlindMode && styles.optionCorrectShowColorBlind,
            ];
          } else if (isSelected) {
            return [
              ...baseStyles,
              styles.optionSelected,
              settings.colorBlindMode && styles.optionSelectedColorBlind,
            ];
          }

          return baseStyles;
        };

        return (
          <View key={idx} style={styles.optionContainer}>
            <TouchableOpacity
              style={getOptionStyle()}
              onPress={() => onAnswerChange(questionIndex, alt.opcao)}
              disabled={showFeedback}
            >
              <Text
                style={[
                  styles.optionText,
                  isSelected && styles.optionTextSelected,
                  settings.lowVisionMode && styles.lowVisionText,
                ]}
              >
                {alt["texto-opcao"]}
              </Text>

              {showFeedback && isSelected && isCorrect && (
                <Text style={styles.feedbackIcon}>✓</Text>
              )}
              {showFeedback && isSelected && isWrong && (
                <Text style={styles.feedbackIcon}>✗</Text>
              )}
              {showFeedback && isWrong && isCorrectAnswer && !isSelected && (
                <Text style={styles.feedbackIcon}>✓</Text>
              )}
            </TouchableOpacity>

            {showFeedback && isSelected && alt.explicacao && (
              <View
                style={[
                  styles.explicacao,
                  settings.colorBlindMode && styles.explicacaoColorBlind,
                ]}
              >
                <Text
                  style={[
                    styles.explicacaoText,
                    settings.lowVisionMode && styles.lowVisionText,
                  ]}
                >
                  {alt.explicacao}
                </Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}
