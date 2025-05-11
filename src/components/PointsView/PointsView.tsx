import { Image, View } from "react-native";
import { styles } from "@/src/components/PointsView/syles";
import pointsIcon from "@/assets/icons/points.png";
import TextView from "@/src/components/TextView/TextView";
import { PointsViewProps } from "@/src/components/PointsView/props";
import designSystem from "@/src/styles/theme";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

export default function PointsView({
  points,
  background,
  style,
}: PointsViewProps) {
  const { settings } = useAccessibility();
  const backgroundColor =
    background === "primary"
      ? designSystem.colors.background.secondaryComponent
      : designSystem.colors.background.primaryComponent;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor },
        settings.lowVisionMode && {
          width: 150,
          height: 60,
        },
        style,
      ]}
    >
      <Image
        source={pointsIcon}
        style={[
          styles.icon,
          settings.lowVisionMode && {
            width: 30,
            height: 30,
          },
        ]}
      />
      <TextView
        text={points}
        color={"secondary"}
        style={[
          styles.points,
          settings.lowVisionMode && {
            fontSize: designSystem.fonts.lowVisionTitleSize,
          },
        ]}
      />
    </View>
  );
}
