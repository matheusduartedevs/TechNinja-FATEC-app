import { StyleSheet, View, ScrollView } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import FooterView from "@/src/components/FooterView/FooterView";
import TextView from "@/src/components/TextView/TextView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import SettingsOptionView from "@/src/components/SettingsOptionView/SettingsOptionView";
import { useRouter } from "expo-router";
import { useAuth } from "@/src/hooks/AuthContext";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

export default function Config() {
  const router = useRouter();

  const { logout } = useAuth();
  const { settings } = useAccessibility();

  return (
    <View style={styles.container}>
      <ActionHeaderView title={"Configurações"} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TextView text={"Geral"} color={"primary"} style={styles.text} />

        <SettingsOptionView
          option={"Minha conta"}
          onPressArrow={() => router.push("/configaccount")}
          option_two={"Acessibilidade"}
          showArrow_two={true}
          onPressArrowTwo={() => router.push("/configaccessbility")}
          option_three={"Segurança"}
          showArrow_three={true}
          onPressArrowThree={() => router.push("/configsecurity")}
        />

        <View style={styles.singleOptionWrapper}>
          <SettingsOptionView
            option={"Sobre esse app"}
            onPressArrow={() => router.push("/configabout")}
          />
        </View>

        <ButtonView
          text="Sair"
          color="primary"
          colorText="primary"
          style={[
            styles.button,
            ...(settings.colorBlindMode
              ? [
                  {
                    backgroundColor:
                      designSystem.colors.action.primaryColorBlind,
                  },
                ]
              : []),
          ]}
          textStyle={
            settings.lowVisionMode
              ? { fontSize: designSystem.fonts.lowVisionTextSize }
              : undefined
          }
          onPress={logout}
        />
      </ScrollView>

      <FooterView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
  scrollContent: {
    marginTop: 60,
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  text: {
    marginBottom: 16,
    marginLeft: 30,
  },
  singleOptionWrapper: {
    marginTop: 24,
  },
  button: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: designSystem.colors.action.tertiary,
    marginTop: 40,
  },
});
