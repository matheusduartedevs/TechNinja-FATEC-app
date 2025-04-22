import { StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import QuestionView from "@/src/components/QuestionView/QuestionView";
import AnswerView from "@/src/components/AnswerView/AnswerView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import { router } from "expo-router";

export default function QuizScreen() {
  return (
    <View style={styles.container}>
      <ActionHeaderView style={styles.headerAction} title="" />

      <QuestionView
        question={"Quem fundou a Groenlândia?"}
        style={styles.question}
      />

      <AnswerView style={styles.answer} answer={"Vikins"} />
      <AnswerView style={styles.answer} answer={"Erik"} />
      <AnswerView style={styles.answer} answer={"Noruegueses"} />
      <AnswerView style={styles.answer} answer={"Islandeses"} />

      <ButtonView
        text={"Próximo"}
        color={"primary"}
        onPress={() => router.push("/quizFinish")}
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
