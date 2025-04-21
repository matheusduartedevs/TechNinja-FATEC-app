import { ViewStyle, ImageSourcePropType } from "react-native";

export interface InputViewProps {
  title?: string;
  logo?: ImageSourcePropType;
  placeholder: string;
  value: string;
  underline?: boolean;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
  secureTextEntry?: boolean;
}
