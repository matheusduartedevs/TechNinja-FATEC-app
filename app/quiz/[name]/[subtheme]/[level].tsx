import { StyleSheet, View, Alert } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import QuestionView from "@/src/components/QuestionView/QuestionView";
import AnswerView from "@/src/components/AnswerView/AnswerView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getQuiz } from "@/src/services/quiz";
import { useAuth } from "@/src/hooks/AuthContext";

type Alternativa = {
  opcao: string;
  "texto-opcao": string;
};

type Question = {
  pergunta: string;
  alternativas: Alternativa[];
  resposta: string;
};

export default function QuizScreen() {
  const { name, subtheme, level } = useLocalSearchParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentIndex];
  const { updateScoreAndMarkCompleted } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQuiz(
          name as string,
          subtheme as string,
          level as string,
        );
        setQuestions(data);
      } catch (error) {
        console.error("❌ Erro ao buscar quiz:", error);
      }
    };

    fetchData();
  }, [name, subtheme, level]);

  const calculatePoints = (level: string): number => {
    switch (level) {
      case "facil":
        return 1;
      case "medio":
        return 5;
      case "dificil":
        return 10;
      default:
        return 0;
    }
  };

  const handleAnswer = (index: number) => {
    if (isAnswered) return;

    setSelectedIndex(index);
    setIsAnswered(true);

    const selectedOption = currentQuestion.alternativas[index].opcao;
    if (selectedOption === currentQuestion.resposta) {
      const points = calculatePoints(level as string);
      setCorrectCount((prev) => prev + points);
    }
  };

  const handleNext = async () => {
    const totalQuestions = questions.length;
    const pointsByQuestion = calculatePoints(level as string);
    const maxPoints = totalQuestions * pointsByQuestion;
    const isPerfect = correctCount === maxPoints;

    if (!isAnswered) {
      Alert.alert("Selecione uma alternativa antes de prosseguir.");
      return;
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedIndex(null);
      setIsAnswered(false);
    } else {
      const totalPoints = correctCount;

      try {
        await updateScoreAndMarkCompleted(
          totalPoints,
          name as string,
          subtheme as string,
          level as string,
          isPerfect,
        );
        router.push({
          pathname: "/quizFinish",
          params: {
            correctCount: (
              correctCount / calculatePoints(level as string)
            ).toString(),
            totalQuestions: questions.length.toString(),
            points: correctCount.toString(),
          },
        });
      } catch (error) {
        console.error("Erro ao finalizar quiz:", error);
      }
    }
  };
  if (!currentQuestion) return null;

  return (
    <View style={styles.container}>
      <ActionHeaderView
        style={styles.headerAction}
        title=""
        color={"secondary"}
      />

      <QuestionView
        question={currentQuestion.pergunta}
        style={styles.question}
      />

      {currentQuestion.alternativas.map((alt, index) => {
        const isUserSelected = selectedIndex === index;
        const isCorrectOption = alt.opcao === currentQuestion.resposta;

        const isCorrect = isAnswered && isCorrectOption;
        const isWrong = isAnswered && isUserSelected && !isCorrectOption;

        return (
          <AnswerView
            key={index}
            answer={`${alt.opcao}) ${alt["texto-opcao"]}`}
            isSelected={isUserSelected}
            isCorrect={isCorrect}
            isWrong={isWrong}
            onPress={() => handleAnswer(index)}
            style={styles.answer}
          />
        );
      })}

      <ButtonView
        text={currentIndex + 1 === questions.length ? "Finalizar" : "Próximo"}
        color={"primary"}
        onPress={handleNext}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
    paddingTop: 30,
  },
  headerAction: {
    position: "absolute",
    zIndex: 10,
    marginTop: 0,
  },
  button: {
    marginTop: 20,
    alignSelf: "center",
  },
  question: {
    marginBottom: 20,
    position: "relative",
  },
  answer: {
    alignSelf: "center",
    margin: 8,
    padding: 5,
  },
});
