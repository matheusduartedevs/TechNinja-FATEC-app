import { ScrollView, StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import FooterView from "@/src/components/FooterView/FooterView";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import SubThemeCardView from "@/src/components/SubThemeCardView/SubThemeCardView";
import banco_de_dados from "@/assets/icons/banco_de_dados.png";
import { useRouter } from "expo-router";

export default function Subthemes() {
  const router = useRouter();

  const navigateToLevels = () => {
    router.push("/levels");
  };

  return (
    <View style={styles.container}>
      <ActionHeaderView title="Banco de Dados" style={styles.header} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inner}>
          <View style={styles.cardWrapper}>
            <SubThemeCardView
              style={styles.card}
              icon={banco_de_dados}
              title="iniciando com banco de dados"
              points="10"
              onPress={navigateToLevels}
            />
            <SubThemeCardView
              style={styles.card}
              icon={banco_de_dados}
              title="iniciando com banco de dados"
              points="10"
            />
            <SubThemeCardView
              style={styles.card}
              icon={banco_de_dados}
              title="iniciando com banco de dados"
              points="10"
            />
          </View>

          <FooterView style={styles.footer} />
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
  header: {
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
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 25,
  },
  footer: {
    alignSelf: "center",
    marginTop: 20,
  },
});
