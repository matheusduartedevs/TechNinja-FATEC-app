import { ViewStyle } from "react-native";

export interface ButtonProps {
  text: string;
  color: "primary" | "primaryBackground";
  colorText?: "primary" | "secondary";
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
}
