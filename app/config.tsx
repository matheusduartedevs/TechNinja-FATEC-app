import { StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import FooterView from "@/src/components/FooterView/FooterView";
import TextView from "@/src/components/TextView/TextView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import SettingsOptionView from "@/src/components/SettingsOptionView/SettingsOptionView";
import { useRouter } from "expo-router";

export default function Config() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ActionHeaderView style={{ ...styles.header }} title={"Configurações"} />

      <TextView text={"Geral"} color={"primary"} style={{ ...styles.text }} />
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
        colorText="primary"
        style={{ ...styles.button }}
        onPress={() => console.log("Saindo da conta...")}
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
    marginBottom: "15%",
  },
  text: {
    marginBottom: "2%",
  },
  singleOptionWrapper: {
    marginTop: "15%",
  },
  button: {
    width: "80%",
    marginTop: "30%",
    alignSelf: "center",
    backgroundColor: designSystem.colors.action.tertiary,
  },
  footer: {
    marginTop: "30%",
    alignSelf: "center",
  },
});
