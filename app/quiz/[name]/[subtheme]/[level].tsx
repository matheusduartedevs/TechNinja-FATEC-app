import { StyleSheet, View, Alert, ScrollView } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import QuestionView from "@/src/components/QuestionView/QuestionView";
import AnswerView from "@/src/components/AnswerView/AnswerView";
import MatchColumnsAnswerView from "@/src/components/MatchColumnsAnswerView/MatchColumnsAnswerView";
import TrueFalseAnswerView from "@/src/components/TrueFalseAnswerView/TrueFalseAnswerView";
import DragDropAnswerView from "@/src/components/DragDropAnswerView/DragDropAnswerView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
// import { getQuiz } from "@/src/services/quiz"; // Comentado enquanto usa mock
import { useAuth } from "@/src/hooks/AuthContext";
import mockData from "@/assets/palmeiras.json";

type Alternativa = {
  _id?: string;
  opcao: string;
  "texto-opcao": string;
  explicacao?: string;
};

type Question = {
  pergunta: string;
  categoria?: string;
  alternativas?: Alternativa[];
  resposta: string;
  pares?: { [key: string]: string };
  itensParaArrastar?: string[];
  respostaCorreta?: string[];
};

export default function QuizScreen() {
  const { name, subtheme, level } = useLocalSearchParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<{
    [key: number]: { [key: string]: string } | string | string[];
  }>({});
  const [correctCount, setCorrectCount] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentIndex];
  const { updateScoreAndMarkCompleted } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Usando mock para testar novos tipos de perguntas
        setQuestions(mockData as Question[]);

        // Código original (descomentar quando as perguntas estiverem no banco)
        // const data = await getQuiz(
        //   name as string,
        //   subtheme as string,
        //   level as string,
        // );
        // setQuestions(data);
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

    const selectedOption = currentQuestion.alternativas![index].opcao;
    if (selectedOption === currentQuestion.resposta) {
      const points = calculatePoints(level as string);
      setCorrectCount((prev) => prev + points);
    }
  };

  const handleMatchColumnsAnswer = (
    index: number,
    answer: { [key: string]: string },
  ) => {
    setUserAnswers((prev) => ({
      ...prev,
      [index]: answer,
    }));

    const pergunta = currentQuestion;

    if (pergunta.categoria === "relacionar-colunas") {
      const todasAssociacoes =
        answer &&
        typeof answer === "object" &&
        Object.keys(answer).length === Object.keys(pergunta.pares!).length;

      if (todasAssociacoes) {
        setIsAnswered(true);

        // Verificar se está correto
        const paresCorretos = Object.keys(pergunta.pares!).every(
          (chave) => answer[chave] === pergunta.pares![chave],
        );

        if (paresCorretos) {
          const points = calculatePoints(level as string);
          setCorrectCount((prev) => prev + points);
        }
      }
    }
  };

  const handleTrueFalseAnswer = (index: number, answer: string) => {
    if (isAnswered) return;

    setUserAnswers((prev) => ({
      ...prev,
      [index]: answer,
    }));
    setIsAnswered(true);

    if (answer === currentQuestion.resposta) {
      const points = calculatePoints(level as string);
      setCorrectCount((prev) => prev + points);
    }
  };

  const handleDragDropAnswer = (index: number, answer: string[]) => {
    setUserAnswers((prev) => ({
      ...prev,
      [index]: answer,
    }));

    const pergunta = currentQuestion;

    if (pergunta.categoria === "drag-drop") {
      const todosPreenchidos =
        Array.isArray(answer) &&
        answer.length === pergunta.respostaCorreta!.length &&
        answer.every((item) => item !== null && item !== undefined);

      if (todosPreenchidos) {
        setIsAnswered(true);

        // Verificar se está correto
        const dragDropCorreto = pergunta.respostaCorreta!.every(
          (resposta, idx) => answer[idx] === resposta,
        );

        if (dragDropCorreto) {
          const points = calculatePoints(level as string);
          setCorrectCount((prev) => prev + points);
        }
      }
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
      setUserAnswers({});
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

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <QuestionView
          question={currentQuestion.pergunta}
          style={styles.question}
        />

        {(!currentQuestion.categoria ||
          currentQuestion.categoria === "multipla-escolha") &&
          currentQuestion.alternativas && (
            <>
              {currentQuestion.alternativas.map((alt, index) => {
                const isUserSelected = selectedIndex === index;
                const isCorrectOption = alt.opcao === currentQuestion.resposta;
                const isCorrect = isAnswered && isCorrectOption;
                const isWrong =
                  isAnswered && isUserSelected && !isCorrectOption;

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
            </>
          )}

        {currentQuestion.categoria === "relacionar-colunas" &&
          currentQuestion.pares && (
            <MatchColumnsAnswerView
              pairs={currentQuestion.pares}
              questionIndex={currentIndex}
              userAnswers={
                userAnswers as { [key: number]: { [key: string]: string } }
              }
              onAnswerChange={handleMatchColumnsAnswer}
              showFeedback={isAnswered}
            />
          )}

        {currentQuestion.categoria === "verdadeiro-falso" &&
          currentQuestion.alternativas && (
            <TrueFalseAnswerView
              alternatives={currentQuestion.alternativas}
              questionIndex={currentIndex}
              userAnswers={userAnswers as { [key: number]: string }}
              onAnswerChange={handleTrueFalseAnswer}
              showFeedback={isAnswered}
              correctAnswer={currentQuestion.resposta}
              isCorrect={userAnswers[currentIndex] === currentQuestion.resposta}
              isWrong={
                isAnswered &&
                userAnswers[currentIndex] !== currentQuestion.resposta
              }
            />
          )}

        {currentQuestion.categoria === "drag-drop" &&
          currentQuestion.itensParaArrastar &&
          currentQuestion.respostaCorreta && (
            <DragDropAnswerView
              question={currentQuestion.pergunta}
              itemsToRearrange={currentQuestion.itensParaArrastar}
              correctAnswer={currentQuestion.respostaCorreta}
              questionIndex={currentIndex}
              userAnswers={userAnswers as { [key: number]: string[] }}
              onAnswerChange={handleDragDropAnswer}
              showFeedback={isAnswered}
            />
          )}

        <ButtonView
          text={currentIndex + 1 === questions.length ? "Finalizar" : "Próximo"}
          color={"primary"}
          onPress={handleNext}
          style={styles.button}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
  headerAction: {
    position: "absolute",
    zIndex: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 80,
    paddingBottom: 40,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  question: {
    marginBottom: 20,
  },
  answer: {
    alignSelf: "center",
    margin: 8,
    padding: 5,
  },
});
