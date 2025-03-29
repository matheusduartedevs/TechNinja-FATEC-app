import { ImageSourcePropType, ViewStyle, StyleProp } from "react-native";

export interface ThemeViewProps {
  theme: string;
  text: string;
  icon: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
}
