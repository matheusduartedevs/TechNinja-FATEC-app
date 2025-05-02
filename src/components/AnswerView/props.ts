import { ViewStyle } from "react-native";

export interface AnswerViewProps {
  answer: string;
  style?: ViewStyle;
  isSelected?: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
  onPress?: () => void;
}
