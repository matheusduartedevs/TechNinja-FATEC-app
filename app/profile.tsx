import { StyleSheet, View, ScrollView } from "react-native";
import designSystem from "@/src/styles/theme";
import FooterView from "@/src/components/FooterView/FooterView";
import UserView from "@/src/components/UserView/UserView";
import PointsView from "@/src/components/PointsView/PointsView";
import AchievementsView from "@/src/components/AchievementsView/AchievementsView";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";

import icon from "@/assets/icons/icon.png";
import badge from "@/assets/icons/golden-badge.png";
import badge1 from "@/assets/icons/badge1.png";
import badge2 from "@/assets/icons/badge2.png";
import badge3 from "@/assets/icons/badge3.png";
import TextView from "@/src/components/TextView/TextView";
import { useAuth } from "@/src/hooks/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <ActionHeaderView title="Perfil" style={styles.header} />

      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.inner}>
            <UserView
              icon={{ uri: user?.avatar }}
              name={user?.nome ?? ""}
              position="1°"
              badge={badge}
              badgePosition="top"
              style={styles.user}
            />

            <View style={styles.pointsTriangle}>
              <PointsView
                points={user?.pontuacao.toString() ?? "0"}
                background="primary"
                style={styles.topPoint}
              />

              <View style={styles.bottomRow}>
                <PointsView
                  points={user?.pontuacao.toString() ?? "0"}
                  background="primary"
                  style={styles.bottomPoint}
                />
                <PointsView
                  points={user?.pontuacao.toString() ?? "0"}
                  background="primary"
                  style={styles.bottomPoint}
                />
              </View>
            </View>

            <TextView text="Conquistas" color="primary" style={styles.text} />
            <AchievementsView
              achievements={[badge1, badge2, badge3]}
              style={styles.achievements}
            />
          </View>
        </ScrollView>
      </View>

      <FooterView style={styles.footer} />
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
  header: {
    marginBottom: 60,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 16,
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
  achievements: {
    marginBottom: 48,
  },
  footer: {
    alignSelf: "center",
  },
});
