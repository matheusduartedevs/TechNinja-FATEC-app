import { ViewStyle } from "react-native";

type Alternativa = {
  _id?: string;
  opcao: string;
  "texto-opcao": string;
  explicacao?: string;
};

export interface TrueFalseAnswerViewProps {
  alternatives: Alternativa[];
  questionIndex: number;
  userAnswers: { [key: number]: string };
  onAnswerChange: (index: number, answer: string) => void;
  showFeedback: boolean;
  correctAnswer: string;
  isCorrect: boolean;
  isWrong: boolean;
  style?: ViewStyle;
}
