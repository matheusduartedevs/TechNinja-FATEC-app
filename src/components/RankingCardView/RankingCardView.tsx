import { RankingCardViewProps } from "@/src/components/RankingCardView/props";
import { Image, View } from "react-native";
import { styles } from "@/src/components/RankingCardView/styles";
import TextView from "@/src/components/TextView/TextView";
import PointsView from "@/src/components/PointsView/PointsView";

export default function RankingCardView({
  position,
  icon,
  name,
  points,
  style,
}: RankingCardViewProps) {
  return (
    <View style={[styles.container, style]}>
      <TextView text={`${position}°`} style={styles.position} />
      <Image
        source={typeof icon === "string" ? { uri: icon } : icon}
        style={styles.icon}
      />
      <TextView text={name} style={styles.name} />
      <View style={styles.pointsContainer}>
        <PointsView points={points} />
      </View>
    </View>
  );
}
