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
import { useAccessibility } from "@/src/hooks/AccessibilityContext";
import designSystem from "@/src/styles/theme";

export default function SubThemeCardView({
  icon,
  title,
  points,
  onPress,
  style,
}: SubThemeCardViewProps) {
  const { settings } = useAccessibility();

  const imageSource: ImageSourcePropType =
    typeof icon === "string" ? { uri: icon } : icon;

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.iconContainer,
            settings.colorBlindMode && {
              backgroundColor: designSystem.colors.action.primaryColorBlind,
            },
          ]}
        >
          <Image source={imageSource} style={styles.icon} />
        </View>
        <TextView
          text={title}
          style={[
            styles.title,
            settings.lowVisionMode && {
              fontSize: designSystem.fonts.lowVisionTextSize,
            },
          ]}
          color={"secondary"}
        />
        <PointsView
          points={points}
          background="secondary"
          style={styles.points}
        />
      </TouchableOpacity>
    </View>
  );
}
