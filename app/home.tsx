import { ScrollView, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "@/src/hooks/AuthContext";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import HomeHeaderView from "@/src/components/HomeHeaderView/HomeHeaderView";
import TextView from "@/src/components/TextView/TextView";
import ThemeView from "@/src/components/ThemeView/ThemeView";
import FooterView from "@/src/components/FooterView/FooterView";

import designSystem from "@/src/styles/theme";

import IconLinguagemProgramacao from "@/assets/icons/icon-linguagem-de-programacao.png";
import IconSistemasOperacionais from "@/assets/icons/icon-sistemas-operacionais.png";
import IconModelagemDados from "@/assets/icons/icon-modelagem-de-dados.png";

export default function App() {
  const router = useRouter();
  const { loadSession, user } = useAuth();

  const { settings } = useAccessibility();

  const navigateToSubthemes = (name: string, title: string) => {
    router.push(`/subthemes/${name}?title=${encodeURIComponent(title)}`);
  };

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

  useEffect(() => {
    loadSession();
  }, []);

  useEffect(() => {
    const checkForNewBadges = async () => {
      if (!user?.badges) return;

      try {
        const key = `@badges_${user.email}`;
        const stored = await AsyncStorage.getItem(key);
        const previousBadges: string[] = stored ? JSON.parse(stored) : [];

        const newBadges = user.badges.filter(
          (badge: string) => !previousBadges.includes(badge),
        );

        if (newBadges.length > 0) {
          Toast.show({
            type: "success",
            text1: "🎉 Nova conquista desbloqueada!",
            text2: "Acesse seu perfil para ver a nova badge!",
          });

          await AsyncStorage.setItem(key, JSON.stringify(user.badges));
        }
      } catch (error) {
        console.error("Erro ao verificar badges:", error);
      }
    };

    checkForNewBadges();
  }, [user?.badges]);

  return (
    <View style={styles.container}>
      <HomeHeaderView />

      <View style={styles.content}>
        <TextView
          text="Áreas de Conhecimento"
          color="primary"
          style={[
            styles.text,
            settings.lowVisionMode && {
              fontSize: designSystem.fonts.lowVisionTitleSize,
            },
          ]}
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
                  onPress={() => navigateToSubthemes(theme.name, theme.title)}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <FooterView />
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
});
