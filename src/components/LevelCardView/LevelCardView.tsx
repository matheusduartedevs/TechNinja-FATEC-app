import { LevelCardViewProps } from "@/src/components/LevelCardView/props";
import { styles } from "@/src/components/LevelCardView/styles";
import { TouchableOpacity } from "react-native";
import TitleView from "@/src/components/TitleView/TitleView";
import designSystem from "@/src/styles/theme";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

export default function LevelCardView({
  level,
  style,
  onPress,
}: LevelCardViewProps) {
  const { settings } = useAccessibility();

  const levelColors = {
    Fácil: {
      backgroundColor: settings.colorBlindMode
        ? designSystem.colors.action.primaryColorBlind
        : designSystem.colors.action.primary,
      titleColor: settings.colorBlindMode
        ? designSystem.colors.action.primaryColorBlind
        : designSystem.colors.action.primary,
    },
    Médio: {
      backgroundColor: settings.colorBlindMode
        ? designSystem.colors.action.secondaryColorBlind
        : designSystem.colors.action.secondary,
      titleColor: settings.colorBlindMode
        ? designSystem.colors.action.secondaryColorBlind
        : designSystem.colors.action.secondary,
    },
    Difícil: {
      backgroundColor: settings.colorBlindMode
        ? designSystem.colors.action.tertiaryColorBlind
        : designSystem.colors.action.tertiary,
      titleColor: settings.colorBlindMode
        ? designSystem.colors.action.tertiaryColorBlind
        : designSystem.colors.action.tertiary,
    },
  };

  const backgroundColor =
    levelColors[level]?.backgroundColor ||
    designSystem.colors.background.primary;

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }, style]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <TitleView
        title={level}
        color={"primary"}
        style={[
          styles.title,
          settings.lowVisionMode && {
            fontSize: designSystem.fonts.lowVisionTitleSize,
          },
        ]}
      />
    </TouchableOpacity>
  );
}
