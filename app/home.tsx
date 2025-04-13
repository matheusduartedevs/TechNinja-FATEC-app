import { ScrollView, StyleSheet, View } from "react-native";
import HomeHeaderView from "@/src/components/HomeHeaderView/HomeHeaderView";
import TextView from "@/src/components/TextView/TextView";
import designSystem from "@/src/styles/theme";
import ThemeView from "@/src/components/ThemeView/ThemeView";
import FooterView from "@/src/components/FooterView/FooterView";
import { jwtDecode } from "jwt-decode";

<<<<<<< HEAD
import IconLinguagemProgramacao from "@/assets/icons/icon-linguagem-de-programacao.png";
import IconSistemasOperacionais from "@/assets/icons/icon-sistemas-operacionais.png";
import IconModelagemDados from "@/assets/icons/icon-modelagem-de-dados.png";
export default function App() {
  const areas = [
    {
      name: "linguagem-programacao",
      title: "Linguagem de Programação",
      description:
        "Aprenda as bases e técnicas de programação para criar aplicações robustas e eficientes",
      icon: IconLinguagemProgramacao,
    },
    {
      name: "logica-programacao",
      title: "Lógica de Programação",
      description:
        "Desenvolva o raciocínio lógico essencial para resolver problemas complexos de forma estruturada",
      icon: IconSistemasOperacionais,
    },
    {
      name: "modelagem-dados",
      title: "Modelagem de Dados",
      description:
        "Entenda como organizar e representar dados de maneira eficiente e escalável para sistemas complexos",
      icon: IconModelagemDados,
    },
  ];
=======
import dbIcon from "@/assets/icons/banco_de_dados.png";
import { useEffect } from "react";
import { useAuth } from "@/src/hooks/AuthContext";
import {
  getSubThemes,
  getLevels,
  getCompletedQuizzes,
  getQuiz,
} from "@/src/services/quiz";

export default function App() {
  const { user, token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user || !token) {
          console.log("⚠️ Usuário ou token não disponível ainda.");
          return;
        }
        console.log("✅ Usuário logado:", user);

        const subthemes = await getSubThemes("linguagem-programacao");
        console.log("📚 Subtemas de frontend:", subthemes);

        const levels = await getLevels(
          "linguagem-programacao",
          subthemes[0] || "",
        );
        console.log("📈 Dificuldades do primeiro subtema:", levels);

        const completed = await getCompletedQuizzes(token);
        console.log("🎯 Quizzes concluídos pelo usuário:", completed);

        const quiz = await getQuiz(
          "linguagem-programacao",
          "lacos-de-repeticao",
          "facil",
        );
        console.log("🧠 Quiz carregado:", quiz);
      } catch (error) {
        console.error("❌ Erro ao buscar dados na home:", error);
      }
    };

    fetchData();
  }, []);
>>>>>>> 6cfe9fd (feat: service API calls and initial tests with mock data)

  return (
    <View style={styles.container}>
      <HomeHeaderView />

      <View style={styles.content}>
        <TextView
          text="Áreas de Conhecimento"
          color="primary"
          style={styles.text}
        />

        <View style={styles.themeWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {areas.map((theme, index) => (
              <View key={index} style={styles.themeItem}>
                <ThemeView
                  text={theme.description}
                  theme={theme.title}
                  icon={theme.icon}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <FooterView onClick={() => console.log("")} style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
    paddingTop: 48,
    paddingBottom: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "left",
    fontFamily: designSystem.fonts.primaryBold,
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 18,
  },
  themeWrapper: {
    alignItems: "center",
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  themeItem: {
    marginRight: 12,
  },
  footer: {
    alignSelf: "center",
  },
});
