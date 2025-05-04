import { Alert, ScrollView, StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import LevelCardView from "@/src/components/LevelCardView/LevelCardView";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import FooterView from "@/src/components/FooterView/FooterView";
import { useEffect, useState } from "react";
import { getLevels } from "@/src/services/quiz";
import { router, useLocalSearchParams } from "expo-router";
import TextView from "@/src/components/TextView/TextView";
import { formatText } from "@/src/utils/formatNames";
import { useAuth } from "@/src/hooks/AuthContext";

export default function LevelsPage() {
  const { name, subtheme, title } = useLocalSearchParams();
  const [levels, setLevels] = useState<any[]>([]);

  const { user } = useAuth();

  const navigateToQuiz = (level: string) => {
    const quizPath = `${name}-${subtheme}-${level}`;
    const quizCompleted = user?.quizzesCompletados?.includes(quizPath);
    console.log(quizPath);
    console.log(quizCompleted);

    if (quizCompleted) {
      Alert.alert(
        "Quiz já feito",
        "Você já completou esse quiz. Deseja refazer?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Refazer",
            onPress: () => router.push(`/quiz/${name}/${subtheme}/${level}`),
          },
        ],
        { cancelable: true },
      );
    } else {
      router.push(`/quiz/${name}/${subtheme}/${level}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const levels = await getLevels(name as string, subtheme as string);

        const orderedLevels = levels.sort((a, b) => {
          const order = ["facil", "medio", "dificil"];
          return order.indexOf(a) - order.indexOf(b);
        });

        setLevels(orderedLevels);
      } catch (error) {
        console.error("❌ Erro ao buscar dados na levels:", error);
      }
    };

    fetchData();
  }, [name, subtheme]);

  return (
    <View style={styles.container}>
      <ActionHeaderView title={String(title ?? "")} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inner}>
          <View style={styles.cardWrapper}>
            {levels.length > 0 ? (
              levels.map((level, index) => (
                <LevelCardView
                  key={index}
                  level={formatText(level)}
                  style={styles.card}
                  onPress={() => navigateToQuiz(level)}
                />
              ))
            ) : (
              <TextView
                text={"Não há dificuldades para esse subtema"}
                color={"primary"}
              />
            )}
          </View>

          <FooterView style={styles.footer} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
    paddingBottom: 40,
    alignItems: "center",
  },
  scrollContent: {
    flexGrow: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 30,
  },
  cardWrapper: {
    alignItems: "center",
    gap: 25,
  },
  card: {
    width: 360,
  },
  footer: {
    alignSelf: "center",
    marginTop: 20,
  },
});
