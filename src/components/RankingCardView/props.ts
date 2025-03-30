import { ViewStyle } from "react-native";

export interface RankingCardViewProps {
  position: number;
  icon: string;
  name: string;
  points: string;
  style?: ViewStyle;
}
