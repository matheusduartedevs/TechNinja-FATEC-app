import { StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import LevelCardView from "@/src/components/LevelCardView/LevelCardView";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import FooterView from "@/src/components/FooterView/FooterView";

export default function LevelsScreen() {
  return (
    <View style={styles.container}>
      <ActionHeaderView style={styles.headerAction} title="Banco de Dados" />

      <LevelCardView
        level="Fácil"
        style={[styles.text, styles.card, { marginTop: 160 }]}
      />

      <LevelCardView level="Médio" style={[styles.text, styles.card]} />

      <LevelCardView
        level="Difícil"
        style={[styles.text, styles.card, { marginBottom: 0 }]}
      />

      <View style={styles.footerContainer}>
        <FooterView onClick={() => console.log("corinthians")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
  headerAction: {
    marginTop: 22,
  },
  text: {
    textAlign: "center",
    fontFamily: designSystem.fonts.primaryBold,
  },
  card: {
    marginLeft: 25,
    width: 360,
    marginBottom: 15,
  },
  footerContainer: {
    position: "absolute",
    bottom: 44,
    left: 25,
    alignItems: "center",
  },
});
