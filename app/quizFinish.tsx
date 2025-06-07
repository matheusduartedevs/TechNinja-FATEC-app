import { StyleSheet, View, Image } from "react-native";
import designSystem from "@/src/styles/theme";
import TextView from "@/src/components/TextView/TextView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import PointsView from "@/src/components/PointsView/PointsView";
import logo from "@/assets/icons/logo.png";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

export default function QuizFinishScreen() {
  const router = useRouter();
  const { correctCount, totalQuestions, points } = useLocalSearchParams();
  const { settings } = useAccessibility();

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <TextView
        text="Mandou bem! Você finalizou o quiz com sucesso!"
        color="primary"
        style={[
          styles.text,
          settings.lowVisionMode && {
            fontSize: designSystem.fonts.lowVisionTextSize,
          },
        ]}
      />

      <PointsView
        points={`+${points}`}
        background="secondary"
        style={styles.points}
      />

      <TextView
        text={`Você acertou ${correctCount}/${totalQuestions}`}
        color="primary"
        style={[
          styles.text,
          settings.lowVisionMode && {
            fontSize: designSystem.fonts.lowVisionTextSize,
          },
        ]}
      />

      <ButtonView
        text="Ir para o início"
        color="primary"
        onPress={() => router.push("/home")}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    fontFamily: designSystem.fonts.primaryRegular,
    color: designSystem.colors.text.primary,
    fontSize: designSystem.fonts.textSize,
    textAlign: "center",
    paddingHorizontal: 30,
  },
  logo: {
    resizeMode: "contain",
    marginBottom: 80,
  },
  points: {
    backgroundColor: designSystem.colors.action.primary,
    marginTop: 40,
  },
  button: {
    marginTop: 70,
  },
});
