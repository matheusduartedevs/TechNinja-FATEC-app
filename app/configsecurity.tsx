import { StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import FooterView from "@/src/components/FooterView/FooterView";
import AccessibilityOptionView from "@/src/components/AccessibilityOptionView/AccessibilityOptionView";

export default function ConfigSecurity() {
  return (
    <View style={styles.container}>
      <ActionHeaderView style={{ ...styles.header }} title={"Configurações"} />

      <AccessibilityOptionView
        option={"Autenticação de dois fatores"}
        style={styles.accessbility}
      />

      <ButtonView
        text="Salvar"
        color="primary"
        style={{ ...styles.button }}
        onPress={() => console.log("Atualizações salvas")}
      />

      <FooterView onClick={() => console.log("..")} style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
    paddingHorizontal: 24,
  },
  header: {
    paddingTop: "5%",
    alignItems: "center",
    marginBottom: "25%",
  },
  accessbility: {
    borderBottomWidth: 1,
    borderBottomColor: designSystem.colors.background.primaryComponent,
    marginBottom: "12%",
  },
  button: {
    width: "80%",
    marginTop: "70%",
    alignSelf: "center",
  },
  footer: {
    marginTop: "50%",
    alignSelf: "center",
  },
});
