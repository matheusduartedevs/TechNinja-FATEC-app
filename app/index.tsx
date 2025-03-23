import { Alert, StyleSheet, View } from "react-native";
import TitleView from "@/app/components/TitleView/TitleView";
import designSystem from "@/app/styles/theme";
import TextView from "@/app/components/TextView/TextView";
import Button from "@/app/components/Button/Button";

export default function App() {
  return (
    <View>
      <TitleView title={"TechNinja"} style={styles.title} color={"secondary"} />
      <TextView text={"Projeto Integrador"} style={styles.text} />
      <Button
        text={"Login"}
        color={"primary"}
        colorText={"secondary"}
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
