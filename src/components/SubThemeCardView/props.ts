import { ImageSourcePropType, ViewStyle } from "react-native";

export interface SubThemeCardViewProps {
  icon: ImageSourcePropType;
  title: string;
  points: string;
  style?: ViewStyle;
}
