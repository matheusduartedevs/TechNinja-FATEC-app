import { ViewStyle } from "react-native";

export interface SettingsOptionViewProps {
  option: string;
  option_two?: string;
  option_three?: string;
  showArrow_two?: boolean;
  showArrow_three?: boolean;
  onPressArrow?: () => void;
  onPressArrowTwo?: () => void;
  onPressArrowThree?: () => void;
  style?: ViewStyle;
}
