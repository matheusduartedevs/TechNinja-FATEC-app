import { Image, View } from "react-native";
import { styles } from "@/src/components/PointsView/syles";
import pointsIcon from "@/assets/icons/points.png";
import TextView from "@/src/components/TextView/TextView";
import { PointsViewProps } from "@/src/components/PointsView/props";

export default function PointsView({ points }: PointsViewProps) {
  return (
    <View style={styles.container}>
      <Image source={pointsIcon} style={styles.icon} />
      <TextView text={points} style={styles.points} />
    </View>
  );
}
