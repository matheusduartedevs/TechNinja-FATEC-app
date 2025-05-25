import React from "react";
import { StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import AchievementsView from "@/src/components/AchievementsView/AchievementsView";
import FooterView from "@/src/components/FooterView/FooterView";

import badge1 from "@/assets/badges/firstplace.png";
import badge2 from "@/assets/badges/idk.png";
import badge3 from "@/assets/badges/perfil_foto.png";

export default function App() {
  return (
    <View style={styles.container}>
      <ActionHeaderView title="Conquistas" />
      <AchievementsView
        achievements={[badge1, badge2, badge3, badge2, badge3, badge1]}
      />
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
