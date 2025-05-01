import { StyleSheet, View, ScrollView } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import FooterView from "@/src/components/FooterView/FooterView";
import AccessibilityOptionView from "@/src/components/AccessibilityOptionView/AccessibilityOptionView";

export default function ConfigSecurity() {
  return (
    <View style={styles.container}>
      <ActionHeaderView style={styles.header} title={"Configurações"} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <AccessibilityOptionView
          option={"Autenticação de dois fatores"}
          style={styles.accessibility}
        />

        <ButtonView
          text="Salvar"
          color="primary"
          style={styles.button}
          onPress={() => console.log("Atualizações salvas")}
        />
      </ScrollView>

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
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  accessibility: {
    borderBottomWidth: 1,
    borderBottomColor: designSystem.colors.background.primaryComponent,
    marginBottom: 24,
  },
  button: {
    width: "80%",
    alignSelf: "center",
    marginTop: 32,
  },
  footer: {
    alignSelf: "center",
  },
});
