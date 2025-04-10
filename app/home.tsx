import { StyleSheet, View } from "react-native";
import HomeHeaderView from "@/src/components/HomeHeaderView/HomeHeaderView";
import TextView from "@/src/components/TextView/TextView";
import designSystem from "@/src/styles/theme";
import ThemeView from "@/src/components/ThemeView/ThemeView";
import FooterView from "@/src/components/FooterView/FooterView";

import dbIcon from "@/assets/icons/banco_de_dados.png";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeHeaderView style={{ marginTop: -100 }} />

      <TextView
        text={"Áreas de Conhecimento"}
        color={"primary"}
        style={{
          ...styles.text,
          marginTop: 16,
          marginLeft: -80,
          marginRight: 16,
          marginBottom: 30,
          fontSize: 24,
        }}
      />
      <ThemeView
        text="Texto explicativo sobre a área de conhecimento"
        theme="Banco de Dados"
        icon={dbIcon}
        style={{ marginHorizontal: 16, marginBottom: 100, marginRight: 500 }}
      />
      <FooterView
        onClick={() => console.log("")}
        style={{ marginLeft: 10, marginBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  header: {
    marginTop: 22,
  },
  headerAction: {
    marginTop: 22,
  },
  user: {
    marginTop: 40,
  },
  title: {
    textAlign: "center",
    fontFamily: designSystem.fonts.brandFont,
  },
  text: {
    textAlign: "center",
    fontFamily: designSystem.fonts.primaryBold,
  },
});
