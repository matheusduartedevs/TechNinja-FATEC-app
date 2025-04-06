import { StyleProp, TextStyle } from "react-native";

export interface TextViewProps {
  text: string;
  color: "primary" | "secondary";
  style?: StyleProp<TextStyle>;
}
