import { ScrollView, StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import LevelCardView from "@/src/components/LevelCardView/LevelCardView";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import FooterView from "@/src/components/FooterView/FooterView";

export default function Levels() {
  return (
    <View style={styles.container}>
      <ActionHeaderView style={styles.headerAction} title="Banco de Dados" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inner}>
          <View style={styles.cardWrapper}>
            <LevelCardView level="Fácil" style={styles.card} />
            <LevelCardView level="Médio" style={styles.card} />
            <LevelCardView level="Difícil" style={styles.card} />
          </View>

          <FooterView onClick={() => console.log("")} style={styles.footer} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
    paddingTop: 48,
    paddingBottom: 40,
    alignItems: "center",
  },
  headerAction: {
    marginBottom: 60,
  },
  scrollContent: {
    flexGrow: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "space-between",
  },
  cardWrapper: {
    alignItems: "center",
    gap: 25,
  },
  card: {
    width: 360,
  },
  footer: {
    alignSelf: "center",
    marginTop: 20,
  },
});
