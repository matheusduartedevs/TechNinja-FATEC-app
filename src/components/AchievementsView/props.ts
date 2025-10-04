import { ImageSourcePropType, ViewStyle } from "react-native";
export interface AchievementsViewProps {
  achievements: ImageSourcePropType[];
  style?: ViewStyle;
  onPress?: () => void;
}
