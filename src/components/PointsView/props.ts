import { ViewStyle } from "react-native";

export interface PointsViewProps {
  points: string;
  background: "primary" | "secondary";
  style?: ViewStyle;
}
