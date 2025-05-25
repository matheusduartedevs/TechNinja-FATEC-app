import React from "react";
import { StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import AchievementsView from "@/src/components/AchievementsView/AchievementsView";
import FooterView from "@/src/components/FooterView/FooterView";
import { useAuth } from "@/src/hooks/AuthContext";

import primeiroQuizLinguagemProgramacao from "@/assets/badges/primeiro_quiz_linguagem-programacao.png";
import primeiroQuizLogicaProgramacao from "@/assets/badges/primeiro_quiz_logica-programacao.png";
import quizPerfeito from "@/assets/badges/quiz_perfeito.png";
import perfilFoto from "@/assets/badges/perfil_foto.png";

export default function App() {
  const { user } = useAuth();

  const badgeImages: Record<string, any> = {
    ["primeiro_quiz_linguagem-programacao"]: primeiroQuizLinguagemProgramacao,
    ["primeiro_quiz_logica-programacao"]: primeiroQuizLogicaProgramacao,
    ["quiz_perfeito"]: quizPerfeito,
    ["perfil_foto"]: perfilFoto,
  };

  const achievements =
    user?.badges
      ?.map((badge) => badgeImages[badge])
      .filter((img): img is NonNullable<typeof img> => !!img) ?? [];

  return (
    <View style={styles.container}>
      <ActionHeaderView title="Conquistas" />
      <AchievementsView achievements={achievements} />
      <FooterView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: designSystem.colors.action.primaryBackground,
    paddingBottom: 100,
    gap: 20,
  },
});
