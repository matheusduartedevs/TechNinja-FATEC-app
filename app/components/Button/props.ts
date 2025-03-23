import { ViewStyle } from "react-native";

export interface ButtonProps {
  text: string;
  color: "primary" | "primaryBackground" | "secondary" | "tertiary";
  colorText?: "primary" | "secondary";
  onPress: () => void;
  style?: ViewStyle;
}
