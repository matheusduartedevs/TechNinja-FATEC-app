import { ViewStyle } from "react-native";

export interface DragDropAnswerViewProps {
  question: string;
  itemsToRearrange: string[];
  correctAnswer: string[];
  questionIndex: number;
  userAnswers: { [key: number]: string[] };
  onAnswerChange: (index: number, answer: string[]) => void;
  showFeedback: boolean;
  style?: ViewStyle;
}
