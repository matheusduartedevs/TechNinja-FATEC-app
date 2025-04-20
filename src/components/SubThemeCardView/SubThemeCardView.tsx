import {
  Image,
  View,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { styles } from "@/src/components/SubThemeCardView/styles";
import TextView from "@/src/components/TextView/TextView";
import PointsView from "@/src/components/PointsView/PointsView";
import { SubThemeCardViewProps } from "@/src/components/SubThemeCardView/props";

export default function SubThemeCardView({
  icon,
  title,
  points,
  onPress,
  style,
}: SubThemeCardViewProps) {
  const imageSource: ImageSourcePropType =
    typeof icon === "string" ? { uri: icon } : icon;

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.iconContainer}>
          <Image source={imageSource} style={styles.icon} />
        </View>
        <TextView text={title} style={styles.title} color={"secondary"} />
        <PointsView
          points={points}
          background="secondary"
          style={styles.points}
        />
      </TouchableOpacity>
    </View>
  );
}
