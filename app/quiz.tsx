import { StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import QuestionView from "@/src/components/QuestionView/QuestionView";
import AnswerView from "@/src/components/AnswerView/AnswerView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import { router } from "expo-router";
import { useState } from "react";

const answers = ["Vikings", "Erik", "Noruegueses", "Islandeses"];

export default function QuizScreen() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <ActionHeaderView style={styles.headerAction} title="" />

      <QuestionView
        question={"Quem fundou a Groenlândia?"}
        style={styles.question}
      />

      {answers.map((answer, index) => (
        <AnswerView
          key={index}
          answer={answer}
          isSelected={selectedIndex === index}
          onPress={() =>
            setSelectedIndex((prevIndex) =>
              prevIndex === index ? null : index,
            )
          }
          style={styles.answer}
        />
      ))}

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
