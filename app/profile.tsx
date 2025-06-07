import { ImageSourcePropType, StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import FooterView from "@/src/components/FooterView/FooterView";
import UserView from "@/src/components/UserView/UserView";
import PointsView from "@/src/components/PointsView/PointsView";
import AchievementsView from "@/src/components/AchievementsView/AchievementsView";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import TextView from "@/src/components/TextView/TextView";

import primeiroQuizLinguagemProgramacao from "@/assets/badges/primeiro_quiz_linguagem-programacao.png";
import primeiroQuizLogicaProgramacao from "@/assets/badges/primeiro_quiz_logica-programacao.png";
import quizPerfeito from "@/assets/badges/quiz_perfeito.png";
import perfilFoto from "@/assets/badges/perfil_foto.png";
import goldenBadge from "@/assets/badges/golden.png";

import { useAuth } from "@/src/hooks/AuthContext";
import { router } from "expo-router";

export default function Profile() {
  const { user } = useAuth();

  const points = user?.pontuacao != null ? user.pontuacao.toString() : "0";
  const userBadges = user?.badges ?? [];
  const badgeImages: Record<string, ImageSourcePropType> = {
    ["primeiro_quiz_linguagem-programacao"]: primeiroQuizLinguagemProgramacao,
    ["primeiro_quiz_logica-programacao"]: primeiroQuizLogicaProgramacao,
    ["quiz_perfeito"]: quizPerfeito,
    ["perfil_foto"]: perfilFoto,
  };
  const achievements = userBadges
    .slice(0, 3)
    .map((badge) => badgeImages[badge])
    .filter((img): img is ImageSourcePropType => !!img);

  return (
    <View style={styles.container}>
      <ActionHeaderView title="Perfil" />

      <View style={styles.content}>
        <View style={styles.inner}>
          <UserView
            icon={{ uri: user?.avatar }}
            name={user?.nome ?? ""}
            badge={goldenBadge}
            badgePosition="top"
          />

          <View style={styles.pointsTriangle}>
            <PointsView
              points={points}
              background="primary"
              style={styles.topPoint}
            />

            <View style={styles.bottomRow}>
              <PointsView
                points={points}
                background="primary"
                style={styles.bottomPoint}
              />
              <PointsView
                points={points}
                background="primary"
                style={styles.bottomPoint}
              />
            </View>
          </View>

          <TextView text="Conquistas" color="primary" style={styles.text} />
          <AchievementsView
            achievements={achievements}
            onPress={() => router.push("/profileBadge")}
          />
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
    paddingBottom: 100,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  inner: {
    alignItems: "center",
  },
  pointsTriangle: {
    alignItems: "center",
    marginBottom: 75,
    marginTop: 20,
  },
  topPoint: {
    marginBottom: 20,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomPoint: {
    marginHorizontal: 20,
  },
  text: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 10,
  },
});
