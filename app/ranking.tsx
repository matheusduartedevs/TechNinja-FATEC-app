import React from "react";
import { StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import UserView from "@/src/components/UserView/UserView";
import RankingCardView from "@/src/components/RankingCardView/RankingCardView";
import icon from "@//assets/icons/icon.png";
import goldenBadge from "../assets/icons/golden-badge.png";
import FooterView from "@/src/components/FooterView/FooterView";

export default function App() {
  return (
    <View style={styles.container}>
      <ActionHeaderView title={"Ranking"} />

      <View style={styles.pageContent}>
        <View style={styles.usersRow}>
          <View>
            <UserView
              icon={icon}
              name="Lucas"
              position="2°"
              badge={goldenBadge}
              badgePosition="top"
              size={"small"}
            />
          </View>
          <View style={{ marginBottom: 45 }}>
            <UserView
              icon={icon}
              name="Isabela"
              position="1°"
              badge={goldenBadge}
              badgePosition="top"
              size={"medium"}
            />
          </View>
          <View>
            <UserView
              icon={icon}
              name="Mariana"
              position="3°"
              badge={goldenBadge}
              badgePosition="top"
              size={"small"}
            />
          </View>
        </View>
        <RankingCardView
          position={4}
          icon={icon}
          name={"francis"}
          points={"1400"}
        ></RankingCardView>

        <RankingCardView
          position={5}
          icon={icon}
          name={"Paula"}
          points={"1120"}
        ></RankingCardView>

        <RankingCardView
          position={6}
          icon={icon}
          name={"Giulia"}
          points={"850"}
        ></RankingCardView>

        <RankingCardView
          position={7}
          icon={icon}
          name={"Diogo"}
          points={"600"}
        ></RankingCardView>

        <FooterView />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
  pageContent: {
    flex: 1,
    alignItems: "center",
  },
  usersRow: {
    flexDirection: "row", // Alinha os componentes UserView lado a lado
    marginTop: 20,
    marginBottom: 50,
    alignItems: "flex-end",
  },
});
