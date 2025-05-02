import { StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import QuestionView from "@/src/components/QuestionView/QuestionView";
import AnswerView from "@/src/components/AnswerView/AnswerView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getQuiz } from "@/src/services/quiz";

export default function QuizScreen() {
  const { name, subtheme, level } = useLocalSearchParams();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentQuestion = questions[currentIndex];

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

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedIndex(null); // limpa a seleção para a próxima pergunta
    } else {
      router.push("/quizFinish");
    }
  };

  if (!currentQuestion) return null;

  return (
    <View style={styles.container}>
      <ActionHeaderView style={styles.headerAction} title="" />
      <QuestionView
        question={currentQuestion.pergunta}
        style={styles.question}
      />
      {currentQuestion.alternativas.map((alt, index) => (
        <AnswerView
          key={index}
          answer={`${alt.opcao}) ${alt["texto-opcao"]}`}
          isSelected={selectedIndex === index}
          onPress={() =>
            setSelectedIndex((prevIndex) =>
              prevIndex === index ? null : index,
            )
          }
          style={styles.answer}
        />
      ))}
      a
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
    justifyContent: "flex-start",
  },
  headerAction: {
    marginTop: 48,
    position: "absolute",
    zIndex: 10,
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
