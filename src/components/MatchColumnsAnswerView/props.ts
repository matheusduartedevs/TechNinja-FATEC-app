import { ViewStyle } from "react-native";

export interface MatchColumnsAnswerViewProps {
  pairs: { [key: string]: string };
  questionIndex: number;
  userAnswers: { [key: number]: { [key: string]: string } };
  onAnswerChange: (index: number, answer: { [key: string]: string }) => void;
  showFeedback: boolean;
  style?: ViewStyle;
}
