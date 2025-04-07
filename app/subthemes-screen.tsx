import { StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import FooterView from "@/src/components/FooterView/FooterView";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import SubThemeCardView from "@/src/components/SubThemeCardView/SubThemeCardView";
import banco_de_dados from "@/assets/icons/banco_de_dados.png";

export default function SubthemesScreen() {
  return (
    <View style={styles.container}>
      <ActionHeaderView
        style={{ ...styles.headerAction, marginBottom: 40 }}
        title={"Banco de Dados"}
      />

      <SubThemeCardView
        style={{ ...styles.text, marginLeft: 22, marginBottom: 25 }}
        icon={banco_de_dados}
        title={"iniciando com banco de dados"}
        points={"10"}
      />

      <SubThemeCardView
        style={{ ...styles.text, marginLeft: 22, marginBottom: 25 }}
        icon={banco_de_dados}
        title={"iniciando com banco de dados"}
        points={"10"}
      />

      <SubThemeCardView
        style={{ ...styles.text, marginLeft: 22 }}
        icon={banco_de_dados}
        title={"iniciando com banco de dados"}
        points={"10"}
      />

      <View style={{ ...styles.footerContainer, marginLeft: 25 }}>
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
  text: {
    textAlign: "center",
    fontFamily: designSystem.fonts.primaryBold,
  },
  button: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  optionalInput: {
    marginTop: 40,
  },
  otherInput: {
    marginTop: 40,
  },
  theme: {
    backgroundColor: "green",
    marginTop: 40,
  },
  footerContainer: {
    position: "absolute",
    bottom: 44,
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 276,
    alignSelf: "center",
  },
});
