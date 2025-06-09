import { ViewStyle } from "react-native";
import { ImageSourcePropType } from "react-native";

export interface RankingCardViewProps {
  position: number;
  icon: ImageSourcePropType;
  name: string;
  points: string;
  style?: ViewStyle;
}
