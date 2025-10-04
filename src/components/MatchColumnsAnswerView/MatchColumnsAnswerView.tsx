import { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { MatchColumnsAnswerViewProps } from "./props";
import { styles } from "./styles";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

const COLUMN_TYPES = {
  LEFT: "left",
  RIGHT: "right",
};

export default function MatchColumnsAnswerView({
  pairs,
  questionIndex,
  userAnswers,
  onAnswerChange,
  showFeedback,
  style,
}: MatchColumnsAnswerViewProps) {
  const { settings } = useAccessibility();
  const [userPairs, setUserPairs] = useState<{ [key: string]: string }>(
    userAnswers[questionIndex] || {},
  );
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const leftItems = Object.keys(pairs);
  const rightItems = Object.values(pairs);

  const isAllAssociationsDone =
    Object.keys(userPairs).length === Object.keys(pairs).length;

  const clearSelection = () => {
    setSelectedItem(null);
    setSelectedType(null);
  };

  const selectItem = (item: string, type: string) => {
    setSelectedItem(item);
    setSelectedType(type);
  };

  const createAssociation = (leftItem: string, rightItem: string) => {
    const newPairs = { ...userPairs, [leftItem]: rightItem };
    setUserPairs(newPairs);
    onAnswerChange(questionIndex, newPairs);
    clearSelection();
  };

  const handleItemClick = (item: string, type: string) => {
    if (showFeedback) return;

    const isClickingSameItem = selectedItem === item && selectedType === type;
    const isClickingDifferentColumn = selectedType && selectedType !== type;
    const isFirstSelection = !selectedItem;

    if (isFirstSelection) {
      selectItem(item, type);
    } else if (isClickingSameItem) {
      clearSelection();
    } else if (isClickingDifferentColumn) {
      const leftItem =
        selectedType === COLUMN_TYPES.LEFT ? selectedItem! : item;
      const rightItem =
        selectedType === COLUMN_TYPES.RIGHT ? selectedItem! : item;
      createAssociation(leftItem, rightItem);
    } else {
      selectItem(item, type);
    }
  };

  const isCorrectMatch = (leftItem: string, rightItem: string) =>
    pairs[leftItem] === rightItem;

  const getItemStatus = (item: string, isLeftColumn = true) => {
    if (!showFeedback || !isAllAssociationsDone) return null;

    if (isLeftColumn) {
      const associatedItem = userPairs[item];
      if (!associatedItem) return null;
      return isCorrectMatch(item, associatedItem) ? "correct" : "incorrect";
    } else {
      const leftItem = Object.keys(userPairs).find(
        (key) => userPairs[key] === item,
      );
      if (!leftItem) return null;
      return isCorrectMatch(leftItem, item) ? "correct" : "incorrect";
    }
  };

  const renderLeftColumn = () => (
    <View style={styles.column}>
      <Text
        style={[
          styles.columnTitle,
          settings.colorBlindMode && styles.columnTitleColorBlind,
          settings.lowVisionMode && styles.lowVisionTitle,
        ]}
      >
        Relacione
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {leftItems.map((item) => {
          const isAssociated = item in userPairs;
          const isSelected =
            selectedItem === item && selectedType === COLUMN_TYPES.LEFT;
          const statusClass = getItemStatus(item, true);

          return (
            <TouchableOpacity
              key={`left-${item}`}
              style={[
                styles.item,
                styles.leftItem,
                settings.colorBlindMode && styles.leftItemColorBlind,
                isSelected && styles.itemSelected,
                isSelected &&
                  settings.colorBlindMode &&
                  styles.itemSelectedColorBlind,
                isAssociated && styles.itemAssociated,
                isAssociated &&
                  settings.colorBlindMode &&
                  styles.itemAssociatedColorBlind,
                statusClass === "correct" && styles.itemCorrect,
                statusClass === "correct" &&
                  settings.colorBlindMode &&
                  styles.itemCorrectColorBlind,
                statusClass === "incorrect" && styles.itemIncorrect,
                statusClass === "incorrect" &&
                  settings.colorBlindMode &&
                  styles.itemIncorrectColorBlind,
              ]}
              onPress={() => handleItemClick(item, COLUMN_TYPES.LEFT)}
              disabled={showFeedback}
            >
              <Text
                style={[
                  styles.itemText,
                  isSelected && styles.itemTextSelected,
                  settings.lowVisionMode && styles.lowVisionText,
                ]}
              >
                {item}
              </Text>

              {isAssociated && (
                <View
                  style={[
                    styles.connectionLine,
                    settings.colorBlindMode && styles.connectionLineColorBlind,
                  ]}
                >
                  <View
                    style={[
                      styles.connectedItem,
                      settings.colorBlindMode && styles.connectedItemColorBlind,
                    ]}
                  >
                    <Text
                      style={[
                        styles.connectedItemText,
                        settings.colorBlindMode &&
                          styles.connectedItemTextColorBlind,
                        settings.lowVisionMode && styles.lowVisionText,
                      ]}
                    >
                      {userPairs[item]}
                    </Text>
                  </View>
                </View>
              )}

              {showFeedback && isAllAssociationsDone && userPairs[item] && (
                <Text
                  style={[
                    styles.feedbackIcon,
                    statusClass === "correct"
                      ? {
                          color: settings.colorBlindMode
                            ? "#0000FF"
                            : "#52D845",
                        }
                      : {
                          color: settings.colorBlindMode
                            ? "#B00020"
                            : "#C83030",
                        },
                  ]}
                >
                  {statusClass === "correct" ? "✓" : "✗"}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );

  const renderRightColumn = () => (
    <View style={styles.column}>
      <Text
        style={[
          styles.columnTitle,
          settings.colorBlindMode && styles.columnTitleColorBlind,
          settings.lowVisionMode && styles.lowVisionTitle,
        ]}
      >
        Com
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {rightItems.map((item) => {
          const isAssociated = Object.values(userPairs).includes(item);
          const isSelected =
            selectedItem === item && selectedType === COLUMN_TYPES.RIGHT;
          const statusClass = getItemStatus(item, false);

          return (
            <TouchableOpacity
              key={`right-${item}`}
              style={[
                styles.item,
                isSelected && styles.itemSelected,
                isSelected &&
                  settings.colorBlindMode &&
                  styles.itemSelectedColorBlind,
                isAssociated && styles.itemAssociated,
                isAssociated &&
                  settings.colorBlindMode &&
                  styles.itemAssociatedColorBlind,
                statusClass === "correct" && styles.itemCorrect,
                statusClass === "correct" &&
                  settings.colorBlindMode &&
                  styles.itemCorrectColorBlind,
                statusClass === "incorrect" && styles.itemIncorrect,
                statusClass === "incorrect" &&
                  settings.colorBlindMode &&
                  styles.itemIncorrectColorBlind,
              ]}
              onPress={() => handleItemClick(item, COLUMN_TYPES.RIGHT)}
              disabled={showFeedback}
            >
              <Text
                style={[
                  styles.itemText,
                  isSelected && styles.itemTextSelected,
                  settings.lowVisionMode && styles.lowVisionText,
                ]}
              >
                {item}
              </Text>

              {showFeedback && isAllAssociationsDone && isAssociated && (
                <Text
                  style={[
                    styles.feedbackIcon,
                    statusClass === "correct"
                      ? {
                          color: settings.colorBlindMode
                            ? "#0000FF"
                            : "#52D845",
                        }
                      : {
                          color: settings.colorBlindMode
                            ? "#B00020"
                            : "#C83030",
                        },
                  ]}
                >
                  {statusClass === "correct" ? "✓" : "✗"}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );

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
          Clique em um item da esquerda e depois em um da direita para
          relacioná-los.
        </Text>
        <Text
          style={[
            styles.progressText,
            settings.lowVisionMode && styles.lowVisionText,
          ]}
        >
          Progresso: {Object.keys(userPairs).length} de{" "}
          {Object.keys(pairs).length} associações
        </Text>
      </View>

      <View style={styles.columnsWrapper}>
        {renderLeftColumn()}
        {renderRightColumn()}
      </View>
    </View>
  );
}
