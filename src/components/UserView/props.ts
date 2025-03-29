import { ImageSourcePropType, ViewStyle } from "react-native";

export interface UserViewProps {
  icon: ImageSourcePropType;
  name: string;
  position?: "1°" | "2°" | "3°";
  badge?: ImageSourcePropType;
  badgePosition?: "top" | "bottom";
  style?: ViewStyle;
}
