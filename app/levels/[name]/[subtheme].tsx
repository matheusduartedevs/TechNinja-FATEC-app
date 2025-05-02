import { ScrollView, StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import LevelCardView from "@/src/components/LevelCardView/LevelCardView";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import FooterView from "@/src/components/FooterView/FooterView";
import { useEffect, useState } from "react";
import { getLevels } from "@/src/services/quiz";
import { router, useLocalSearchParams } from "expo-router";
import TextView from "@/src/components/TextView/TextView";
import { formatText } from "@/src/utils/formatNames";

export default function LevelsPage() {
  const { name, subtheme, title } = useLocalSearchParams();
  const [levels, setLevels] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const levels = await getLevels(name as string, subtheme as string);
        setLevels(levels);
      } catch (error) {
        console.error("❌ Erro ao buscar dados na levels:", error);
      }
    };

    fetchData();
  }, [name, subtheme]);

  return (
    <View style={styles.container}>
      <ActionHeaderView
        style={styles.headerAction}
        title={String(title ?? "")}
      />

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
                  onPress={() =>
                    router.push(`/quiz/${name}/${subtheme}/${level}`)
                  }
                />
              ))
            ) : (
              <TextView
                text={"Não há levels para essa dificuldade"}
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
    paddingTop: 48,
    paddingBottom: 40,
    alignItems: "center",
  },
  headerAction: {
    marginBottom: 60,
  },
  scrollContent: {
    flexGrow: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "space-between",
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
