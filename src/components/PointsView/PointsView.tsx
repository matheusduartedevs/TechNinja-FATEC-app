import { Image, View } from "react-native";
import { styles } from "@/src/components/PointsView/syles";
import pointsIcon from "@/assets/icons/points.png";
import TextView from "@/src/components/TextView/TextView";
import { PointsViewProps } from "@/src/components/PointsView/props";
import designSystem from "@/src/styles/theme";

export default function PointsView({
  points,
  background,
  style,
}: PointsViewProps) {
  const backgroundColor =
    background === "primary"
      ? designSystem.colors.background.secondaryComponent
      : designSystem.colors.background.primaryComponent;

  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <Image source={pointsIcon} style={styles.icon} />
      <TextView text={points} style={styles.points} />
    </View>
  );
}
