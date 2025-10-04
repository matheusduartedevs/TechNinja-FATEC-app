import { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { CompleteAnswerViewProps } from "./props";
import { styles } from "./styles";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";
import ButtonView from "@/src/components/ButtonView/ButtonView";

export default function CompleteAnswerView({
  correctAnswer,
  questionIndex,
  userAnswers,
  onAnswerChange,
  showFeedback,
  style,
}: CompleteAnswerViewProps) {
  const { settings } = useAccessibility();
  const [answer, setAnswer] = useState(userAnswers[questionIndex] || "");
  const [isSubmitted, setIsSubmitted] = useState(!!userAnswers[questionIndex]);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (value: string) => {
    if (showFeedback) return;
    setAnswer(value);
  };

  const handleSubmit = () => {
    if (showFeedback || !answer.trim()) return;

    setIsSubmitted(true);
    onAnswerChange(questionIndex, answer.trim());
  };

  const isCorrect = () => {
    if (!showFeedback || !answer) return false;

    const normalizedAnswer = answer.toLowerCase().trim();
    return correctAnswer.some(
      (option) => option.toLowerCase() === normalizedAnswer,
    );
  };

  const getInputStyle = () => {
    const baseStyles = [
      styles.input,
      settings.lowVisionMode && styles.lowVisionText,
    ];

    if (showFeedback) {
      if (isCorrect()) {
        return [
          ...baseStyles,
          styles.inputCorrect,
          settings.colorBlindMode && styles.inputCorrectColorBlind,
          styles.inputDisabled,
        ];
      } else {
        return [
          ...baseStyles,
          styles.inputIncorrect,
          settings.colorBlindMode && styles.inputIncorrectColorBlind,
          styles.inputDisabled,
        ];
      }
    }

    if (isFocused) {
      return [
        ...baseStyles,
        styles.inputFocused,
        settings.colorBlindMode && styles.inputFocusedColorBlind,
      ];
    }

    return baseStyles;
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputArea}>
        <TextInput
          style={getInputStyle()}
          value={answer}
          onChangeText={handleInputChange}
          placeholder="Digite sua resposta..."
          placeholderTextColor="#999"
          editable={!showFeedback}
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onSubmitEditing={handleSubmit}
          returnKeyType="done"
        />

        {!showFeedback && !isSubmitted && (
          <ButtonView
            text="Enviar"
            color="primary"
            onPress={handleSubmit}
            style={styles.submitButton}
            disabled={!answer.trim()}
          />
        )}

        {showFeedback && (
          <View style={styles.inputFeedback}>
            <Text
              style={[
                styles.feedbackIcon,
                isCorrect()
                  ? [
                      styles.feedbackIconCorrect,
                      settings.colorBlindMode &&
                        styles.feedbackIconCorrectColorBlind,
                    ]
                  : [
                      styles.feedbackIconIncorrect,
                      settings.colorBlindMode &&
                        styles.feedbackIconIncorrectColorBlind,
                    ],
              ]}
            >
              {isCorrect() ? "✓" : "✗"}
            </Text>
          </View>
        )}
      </View>

      {showFeedback && (
        <View
          style={[
            styles.answerFeedback,
            isCorrect()
              ? [
                  styles.correctFeedback,
                  settings.colorBlindMode && styles.correctFeedbackColorBlind,
                ]
              : [
                  styles.incorrectFeedback,
                  settings.colorBlindMode && styles.incorrectFeedbackColorBlind,
                ],
          ]}
        >
          {isCorrect() ? (
            <>
              <Text
                style={[
                  styles.feedbackTitle,
                  styles.feedbackTitleCorrect,
                  settings.colorBlindMode &&
                    styles.feedbackTitleCorrectColorBlind,
                  settings.lowVisionMode && styles.lowVisionTitle,
                ]}
              >
                Correto!
              </Text>
              <Text
                style={[
                  styles.feedbackText,
                  settings.lowVisionMode && styles.lowVisionText,
                ]}
              >
                Sua resposta está certa:{" "}
                <Text
                  style={[
                    styles.feedbackTextBold,
                    styles.feedbackTextBoldCorrect,
                    settings.colorBlindMode &&
                      styles.feedbackTextBoldCorrectColorBlind,
                  ]}
                >
                  {answer}
                </Text>
              </Text>
            </>
          ) : (
            <>
              <Text
                style={[
                  styles.feedbackTitle,
                  styles.feedbackTitleIncorrect,
                  settings.colorBlindMode &&
                    styles.feedbackTitleIncorrectColorBlind,
                  settings.lowVisionMode && styles.lowVisionTitle,
                ]}
              >
                Resposta incorreta
              </Text>
              <Text
                style={[
                  styles.feedbackText,
                  settings.lowVisionMode && styles.lowVisionText,
                ]}
              >
                Sua resposta:{" "}
                <Text
                  style={[
                    styles.feedbackTextBold,
                    styles.feedbackTextBoldIncorrect,
                    settings.colorBlindMode &&
                      styles.feedbackTextBoldIncorrectColorBlind,
                  ]}
                >
                  {answer || "Nenhuma resposta"}
                </Text>
              </Text>
              <Text
                style={[
                  styles.feedbackText,
                  settings.lowVisionMode && styles.lowVisionText,
                ]}
              >
                Resposta{correctAnswer.length > 1 ? "s" : ""} correta
                {correctAnswer.length > 1 ? "s" : ""}:{" "}
                <Text
                  style={[
                    styles.feedbackTextBold,
                    styles.feedbackTextBoldCorrect,
                    settings.colorBlindMode &&
                      styles.feedbackTextBoldCorrectColorBlind,
                  ]}
                >
                  {correctAnswer.join(" ou ")}
                </Text>
              </Text>
            </>
          )}
        </View>
      )}
    </View>
  );
}
