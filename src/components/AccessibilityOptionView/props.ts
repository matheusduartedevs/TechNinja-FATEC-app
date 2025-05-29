import { ViewStyle } from "react-native";

export interface AccessibilityOptionViewProps {
  option: string;
  style?: ViewStyle;
  value?: boolean;
  onChange?: (newValue: boolean) => void;
}
