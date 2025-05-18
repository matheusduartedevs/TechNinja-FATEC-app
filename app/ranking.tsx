import React from "react";
import { StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import UserView from "@/src/components/UserView/UserView";
import icon from "@//assets/icons/icon.png";
import goldenBadge from "../assets/icons/golden-badge.png";

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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
  pageContent: {
    flex: 1,
    alignItems: "center",
  },
  usersRow: {
    flexDirection: "row", // Alinha os componentes UserView lado a lado
    marginTop: 20,
    alignItems: "flex-end",
  },
});
