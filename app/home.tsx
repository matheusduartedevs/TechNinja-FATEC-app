import { StyleSheet, View } from "react-native";
import HomeHeaderView from "@/src/components/HomeHeaderView/HomeHeaderView";
import TextView from "@/src/components/TextView/TextView";
import designSystem from "@/src/styles/theme";
import ThemeView from "@/src/components/ThemeView/ThemeView";
import FooterView from "@/src/components/FooterView/FooterView";
import { jwtDecode } from "jwt-decode";

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

  return (
    <View style={styles.container}>
      <HomeHeaderView style={{ marginTop: -100 }} />

      <TextView
        text={"Áreas de Conhecimento"}
        color={"primary"}
        style={{
          ...styles.text,
          marginTop: 16,
          marginLeft: -80,
          marginRight: 16,
          marginBottom: 30,
          fontSize: 24,
        }}
      />
      <ThemeView
        text="Texto explicativo sobre a área de conhecimento"
        theme="Banco de Dados"
        icon={dbIcon}
        style={{ marginHorizontal: 16, marginBottom: 100, marginRight: 500 }}
      />
      <FooterView
        onClick={() => console.log("")}
        style={{ marginLeft: 10, marginBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  header: {
    marginTop: 22,
  },
  headerAction: {
    marginTop: 22,
  },
  user: {
    marginTop: 40,
  },
  title: {
    textAlign: "center",
    fontFamily: designSystem.fonts.brandFont,
  },
  text: {
    textAlign: "center",
    fontFamily: designSystem.fonts.primaryBold,
  },
});
