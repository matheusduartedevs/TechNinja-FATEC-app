import { StyleSheet, View, ScrollView } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import FooterView from "@/src/components/FooterView/FooterView";
import AccessibilityOptionView from "@/src/components/AccessibilityOptionView/AccessibilityOptionView";

export default function ConfigSecurity() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const router = useRouter();

  const handleSave = () => {
    if (twoFactorEnabled) {
      router.push("/twofactorconfig");
    } else {
      console.log("Atualizações salvas");
    }
  };

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
          value={twoFactorEnabled}
          onChange={setTwoFactorEnabled}
        />

        <ButtonView
          text="Salvar"
          color="primary"
          style={styles.button}
          onPress={handleSave}
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
