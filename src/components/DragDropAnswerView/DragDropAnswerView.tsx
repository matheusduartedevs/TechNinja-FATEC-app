import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { DragDropAnswerViewProps } from "./props";
import { styles } from "./styles";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

export default function DragDropAnswerView({
  question,
  itemsToRearrange,
  correctAnswer,
  questionIndex,
  userAnswers,
  onAnswerChange,
  showFeedback,
  style,
}: DragDropAnswerViewProps) {
  const { settings } = useAccessibility();

  const textParts = question.split("____");
  const numberOfSpaces = textParts.length - 1;

  const [localUserAnswers, setLocalUserAnswers] = useState<(string | null)[]>(
    () => {
      const existingAnswers = userAnswers[questionIndex];
      if (Array.isArray(existingAnswers)) {
        return existingAnswers;
      }
      return new Array(numberOfSpaces).fill(null);
    },
  );

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    if (showFeedback) return;

    if (selectedItem === item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  const handleSpaceClick = (spaceIndex: number) => {
    if (showFeedback) return;

    if (localUserAnswers[spaceIndex]) {
      const newAnswers = [...localUserAnswers];
      newAnswers[spaceIndex] = null;
      setLocalUserAnswers(newAnswers);
      onAnswerChange(questionIndex, newAnswers as string[]);
    } else if (selectedItem) {
      const newAnswers = [...localUserAnswers];
      const previousIndex = newAnswers.indexOf(selectedItem);
      if (previousIndex !== -1) {
        newAnswers[previousIndex] = null;
      }
      newAnswers[spaceIndex] = selectedItem;
      setLocalUserAnswers(newAnswers);
      onAnswerChange(questionIndex, newAnswers as string[]);
      setSelectedItem(null);
    }
  };

  const isCorrectPlacement = (spaceIndex: number, item: string | null) => {
    if (!item) return false;
    return correctAnswer[spaceIndex] === item;
  };

  const allSpacesFilled = localUserAnswers.every((item) => item !== null);

  const getSpaceStatus = (spaceIndex: number) => {
    if (!showFeedback || !allSpacesFilled) return null;
    const item = localUserAnswers[spaceIndex];
    if (!item) return null;
    return isCorrectPlacement(spaceIndex, item) ? "correct" : "incorrect";
  };

  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.instructions,
          settings.colorBlindMode && styles.instructionsColorBlind,
        ]}
      >
        <Text
          style={[
            styles.instructionText,
            settings.lowVisionMode && styles.lowVisionText,
          ]}
        >
          Clique em uma palavra para selecioná-la, depois clique no espaço onde
          deseja colocá-la.
        </Text>
        <Text
          style={[
            styles.progressText,
            settings.lowVisionMode && styles.lowVisionText,
          ]}
        >
          Progresso: {localUserAnswers.filter(Boolean).length} de{" "}
          {numberOfSpaces} espaços preenchidos
        </Text>
        {selectedItem && (
          <Text
            style={[
              styles.selectionHint,
              settings.colorBlindMode && styles.selectionHintColorBlind,
              settings.lowVisionMode && styles.lowVisionText,
            ]}
          >
            Selecionada: {selectedItem}
          </Text>
        )}
      </View>

      <View style={styles.dropSpacesContainer}>
        <Text
          style={[
            styles.dropSpacesTitle,
            settings.lowVisionMode && styles.lowVisionTitle,
          ]}
        >
          Complete os espaços:
        </Text>
        <View style={styles.spacesGrid}>
          {Array.from({ length: numberOfSpaces }, (_, index) => {
            const spaceStatus = getSpaceStatus(index);
            const hasItem = localUserAnswers[index];

            return (
              <View key={index} style={styles.spaceItem}>
                <Text
                  style={[
                    styles.spaceLabel,
                    settings.lowVisionMode && styles.lowVisionText,
                  ]}
                >
                  Espaço {index + 1}:
                </Text>
                <TouchableOpacity
                  style={[
                    styles.dropSpace,
                    settings.colorBlindMode && styles.dropSpaceColorBlind,
                    selectedItem && !hasItem && styles.dropSpaceAvailable,
                    selectedItem &&
                      !hasItem &&
                      settings.colorBlindMode &&
                      styles.dropSpaceAvailableColorBlind,
                    spaceStatus === "correct" && styles.dropSpaceCorrect,
                    spaceStatus === "correct" &&
                      settings.colorBlindMode &&
                      styles.dropSpaceCorrectColorBlind,
                    spaceStatus === "incorrect" && styles.dropSpaceIncorrect,
                    spaceStatus === "incorrect" &&
                      settings.colorBlindMode &&
                      styles.dropSpaceIncorrectColorBlind,
                  ]}
                  onPress={() => handleSpaceClick(index)}
                  disabled={showFeedback}
                >
                  {localUserAnswers[index] ? (
                    <View style={styles.droppedItemContainer}>
                      <Text
                        style={[
                          styles.droppedItemText,
                          settings.lowVisionMode && styles.lowVisionText,
                        ]}
                      >
                        {localUserAnswers[index]}
                      </Text>
                      {!showFeedback && (
                        <Text style={styles.removeIcon}>×</Text>
                      )}
                      {showFeedback && allSpacesFilled && (
                        <Text
                          style={[
                            styles.feedbackIcon,
                            spaceStatus === "correct" &&
                              styles.feedbackIconCorrect,
                            spaceStatus === "correct" &&
                              settings.colorBlindMode &&
                              styles.feedbackIconCorrectColorBlind,
                            spaceStatus === "incorrect" &&
                              styles.feedbackIconIncorrect,
                            spaceStatus === "incorrect" &&
                              settings.colorBlindMode &&
                              styles.feedbackIconIncorrectColorBlind,
                          ]}
                        >
                          {spaceStatus === "correct" ? "✓" : "✗"}
                        </Text>
                      )}
                    </View>
                  ) : (
                    <Text
                      style={[
                        styles.placeholderText,
                        settings.lowVisionMode && styles.lowVisionText,
                      ]}
                    >
                      {selectedItem
                        ? "Clique para colocar aqui"
                        : "Selecione uma palavra"}
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.draggableItems}>
        <Text
          style={[
            styles.itemsTitle,
            settings.lowVisionMode && styles.lowVisionTitle,
          ]}
        >
          Palavras disponíveis:
        </Text>
        <View style={styles.itemsContainer}>
          {itemsToRearrange.map((item, index) => {
            const isSelected = selectedItem === item;
            const isUsed = localUserAnswers.includes(item);
            const isDisabled = showFeedback;

            return (
              <View key={`${item}-${index}`} style={{ position: "relative" }}>
                <TouchableOpacity
                  style={[
                    styles.draggableItem,
                    settings.colorBlindMode && styles.draggableItemColorBlind,
                    isSelected && styles.draggableItemSelected,
                    isUsed && styles.draggableItemUsed,
                    isDisabled && styles.draggableItemDisabled,
                  ]}
                  onPress={() => handleItemClick(item)}
                  disabled={isDisabled}
                >
                  <Text
                    style={[
                      styles.draggableItemText,
                      isUsed && styles.draggableItemUsedText,
                      settings.lowVisionMode && styles.lowVisionText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
                {isUsed && (
                  <View
                    style={[
                      styles.usedIndicator,
                      settings.colorBlindMode && styles.usedIndicatorColorBlind,
                    ]}
                  >
                    <Text style={{ color: "#fff", fontSize: 12 }}>✓</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>

      {showFeedback && allSpacesFilled && (
        <View
          style={[
            styles.correctAnswerDisplay,
            settings.colorBlindMode && styles.correctAnswerDisplayColorBlind,
          ]}
        >
          <Text
            style={[
              styles.correctAnswerTitle,
              settings.lowVisionMode && styles.lowVisionTitle,
            ]}
          >
            Palavras corretas:
          </Text>
          <View style={styles.correctWordsList}>
            {correctAnswer.map((word, index) => (
              <View
                key={index}
                style={[
                  styles.correctWordItem,
                  settings.colorBlindMode && styles.correctWordItemColorBlind,
                ]}
              >
                <Text
                  style={[
                    styles.correctWordItemText,
                    settings.lowVisionMode && styles.lowVisionText,
                  ]}
                >
                  Espaço {index + 1}:{" "}
                  <Text
                    style={[
                      styles.correctWordItemTextBold,
                      settings.colorBlindMode &&
                        styles.correctWordItemTextBoldColorBlind,
                    ]}
                  >
                    {word}
                  </Text>
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
