import { View } from "react-native";
import { styles } from "@/src/components/HomeHeaderView/styles";
import PointsView from "@/src/components/PointsView/PointsView";
import { HomeHeaderViewProps } from "@/src/components/HomeHeaderView/props";
import { useAuth } from "@/src/hooks/AuthContext";
import TitleView from "@/src/components/TitleView/TitleView";
import designSystem from "@/src/styles/theme";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

export default function HomeHeaderView({ style }: HomeHeaderViewProps) {
  const { user } = useAuth();
  const { settings } = useAccessibility();
  const points = user?.pontuacao != null ? user.pontuacao.toString() : "0";

  return (
    <View style={[styles.container, style]}>
      <TitleView
        color={"primary"}
        title={"TechNinja"}
        style={[
          styles.title,
          settings.lowVisionMode && {
            fontSize: designSystem.fonts.lowVisionTitleSize,
          },
        ]}
      />
      <PointsView points={points} background={"primary"} />
    </View>
  );
}
