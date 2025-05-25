import { StyleSheet, View, ScrollView } from "react-native";
import designSystem from "@/src/styles/theme";
import FooterView from "@/src/components/FooterView/FooterView";
import UserView from "@/src/components/UserView/UserView";
import PointsView from "@/src/components/PointsView/PointsView";
import AchievementsView from "@/src/components/AchievementsView/AchievementsView";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import TextView from "@/src/components/TextView/TextView";

import badge from "@/assets/badges/golden.png";
import badge1 from "@/assets/badges/firstplace.png";
import badge2 from "@/assets/badges/idk.png";
import badge3 from "@/assets/badges/perfil_foto.png";

import { useAuth } from "@/src/hooks/AuthContext";
import { router } from "expo-router";

export default function Profile() {
  const { user } = useAuth();
  const points = user?.pontuacao != null ? user.pontuacao.toString() : "0";

  return (
    <View style={styles.container}>
      <ActionHeaderView title="Perfil" />

      <View style={styles.content}>
        <View style={styles.inner}>
          <UserView
            icon={{ uri: user?.avatar }}
            name={user?.nome ?? ""}
            badge={badge}
            badgePosition="top"
            style={styles.user}
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
            achievements={[badge1, badge2, badge3]}
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
  user: {
    marginBottom: 48,
  },
  pointsTriangle: {
    alignItems: "center",
    marginBottom: 48,
  },
  topPoint: {
    marginBottom: 20,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomPoint: {
    marginHorizontal: 10,
  },
  text: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 10,
  },
});
