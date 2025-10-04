import { ViewStyle } from "react-native";

export interface CompleteAnswerViewProps {
  correctAnswer: string[];
  questionIndex: number;
  userAnswers: { [key: number]: string };
  onAnswerChange: (index: number, answer: string) => void;
  showFeedback: boolean;
  style?: ViewStyle;
}
