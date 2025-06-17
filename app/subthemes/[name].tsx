import { ScrollView, StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import FooterView from "@/src/components/FooterView/FooterView";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import SubThemeCardView from "@/src/components/SubThemeCardView/SubThemeCardView";
import TextView from "@/src/components/TextView/TextView";
import banco_de_dados from "@/assets/icons/banco_de_dados.png";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { getSubThemes } from "@/src/services/quiz";
import { formatText } from "@/src/utils/formatNames";

export default function Name() {
  const [subThemes, setSubThemes] = useState<
    { name: string; pontos: number }[]
  >([]);

  const router = useRouter();
  const { name, title } = useLocalSearchParams();

  const navigateToLevels = (subtheme: string) => {
    router.push(
      `/levels/${name}/${subtheme}?title=${encodeURIComponent(title as string)}`,
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nameString = Array.isArray(name) ? name[0] : name;
        const subthemes = await getSubThemes(nameString);
        setSubThemes(subthemes);
      } catch (error) {
        console.error(`Erro ao buscar dados do subtheme ${name}: ${error}`);
      }
    };
    fetchData();
  }, [name]);

  return (
    <View style={styles.container}>
      <ActionHeaderView title={String(title ?? "")} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inner}>
          <View style={styles.cardWrapper}>
            {subThemes.length > 0 ? (
              subThemes.map((subtheme, index) => (
                <SubThemeCardView
                  key={index}
                  style={styles.card}
                  icon={banco_de_dados}
                  title={formatText(subtheme.name) || "Título não disponível"}
                  points={String(subtheme.pontos)}
                  onPress={() => navigateToLevels(subtheme.name)}
                />
              ))
            ) : (
              <TextView
                text="Não existem quizzes para esse tema"
                color="primary"
              />
            )}
          </View>
        </View>
      </ScrollView>
      <FooterView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  inner: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 20,
    alignItems: "center",
  },
  cardWrapper: {
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 25,
  },
});
