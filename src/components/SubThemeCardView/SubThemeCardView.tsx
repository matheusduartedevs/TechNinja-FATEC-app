import { Image, View, ImageSourcePropType } from "react-native";
import { styles } from "@/src/components/SubThemeCardView/styles";
import TextView from "@/src/components/TextView/TextView";
import PointsView from "@/src/components/PointsView/PointsView";
import { SubThemeCardViewProps } from "@/src/components/SubThemeCardView/props";

export default function SubThemeCardView({
  icon,
  title,
  points,
  style,
}: SubThemeCardViewProps) {
  const imageSource: ImageSourcePropType =
    typeof icon === "string" ? { uri: icon } : icon;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        <Image source={imageSource} style={styles.icon} />
      </View>
      <TextView text={title} style={styles.title} />
      <PointsView
        points={points}
        background="secondary"
        style={styles.points}
      />
    </View>
  );
}
