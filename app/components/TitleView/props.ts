import { StyleProp, TextStyle } from "react-native";

export interface TitleViewProps {
  title: string;
  color: "primary" | "secondary";
  style?: StyleProp<TextStyle>;
}
