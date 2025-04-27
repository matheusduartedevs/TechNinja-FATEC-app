import { LevelCardViewProps } from "@/src/components/LevelCardView/props";
import { styles } from "@/src/components/LevelCardView/styles";
import { TouchableOpacity } from "react-native";
import TitleView from "@/src/components/TitleView/TitleView";
import designSystem from "@/src/styles/theme"; // Supondo que seu designSystem esteja configurado dessa maneira

export default function LevelCardView({ level, style }: LevelCardViewProps) {
  const levelColors = {
    facil: {
      backgroundColor: designSystem.colors.action.primary,
      titleColor: designSystem.colors.action.primary,
    },
    medio: {
      backgroundColor: designSystem.colors.action.secondary,
      titleColor: designSystem.colors.action.secondary,
    },
    dificil: {
      backgroundColor: designSystem.colors.action.tertiary,
      titleColor: designSystem.colors.action.tertiary,
    },
  };

  const backgroundColor =
    levelColors[level]?.backgroundColor ||
    designSystem.colors.background.primary;

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }, style]}
      activeOpacity={0.8}
    >
      <TitleView title={level} color={"primary"} style={styles.title} />
    </TouchableOpacity>
  );
}
