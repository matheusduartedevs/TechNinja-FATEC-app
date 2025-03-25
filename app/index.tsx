import { Alert, StyleSheet, View } from "react-native";
import TitleView from "@/src/components/TitleView/TitleView";
import designSystem from "@/src/styles/theme";
import TextView from "@/src/components/TextView/TextView";
import ButtonView from "@/src/components/ButtonView/ButtonView";

export default function App() {
  return (
    <View>
      <TitleView title={"TechNinja"} style={styles.title} color={"secondary"} />
      <TextView text={"Projeto Integrador"} style={styles.text} />
      <ButtonView
        text={"Login"}
        color={"primary"}
        colorText={"primary"}
        onPress={() => Alert.alert("Sucesso!", "Clicou")}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontFamily: designSystem.fonts.brandFont,
  },
  text: {
    textAlign: "center",
    color: designSystem.colors.text.secondary,
  },
  button: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
});
