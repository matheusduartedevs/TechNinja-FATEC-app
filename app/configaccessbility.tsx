import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Switch } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import FooterView from "@/src/components/FooterView/FooterView";
import AccessibilityOptionView from "@/src/components/AccessibilityOptionView/AccessibilityOptionView";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

export default function ConfigAccessibility() {
  const { settings, toggleColorBlindMode, toggleLowVisionMode } =
    useAccessibility();

  const [tempColorBlindMode, setTempColorBlindMode] = useState(
    settings.colorBlindMode,
  );
  const [tempLowVisionMode, setTempLowVisionMode] = useState(
    settings.lowVisionMode,
  );

  const handleSave = async () => {
    if (tempColorBlindMode !== settings.colorBlindMode) toggleColorBlindMode();
    if (tempLowVisionMode !== settings.lowVisionMode) toggleLowVisionMode();
  };

  return (
    <View style={styles.container}>
      <ActionHeaderView style={styles.header} title={"Configurações"} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <AccessibilityOptionView
          option={"Modo Daltônico"}
          style={styles.accessibility}
        >
          <Switch
            value={tempColorBlindMode}
            onValueChange={setTempColorBlindMode}
            thumbColor={
              tempColorBlindMode
                ? designSystem.colors.action.primaryColorBlind
                : designSystem.colors.background.secondaryComponent
            }
            trackColor={{
              false: designSystem.colors.background.primaryComponent,
              true: designSystem.colors.action.primaryColorBlind,
            }}
          />
        </AccessibilityOptionView>

        <AccessibilityOptionView
          option={"Modo Baixa Visão"}
          style={styles.accessibility}
        >
          <Switch
            value={tempLowVisionMode}
            onValueChange={setTempLowVisionMode}
            thumbColor={
              tempLowVisionMode
                ? designSystem.colors.action.primary
                : designSystem.colors.background.secondaryComponent
            }
            trackColor={{
              false: designSystem.colors.background.primaryComponent,
              true: designSystem.colors.action.primary,
            }}
          />
        </AccessibilityOptionView>

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
