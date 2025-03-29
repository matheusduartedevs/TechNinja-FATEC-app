import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import TitleView from "@/src/components/TitleView/TitleView";
import designSystem from "@/src/styles/theme";
import TextView from "@/src/components/TextView/TextView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import InputView from "@/src/components/InputView/InputView";
import userIcon from "@/assets/icons/icon.png";
import dbIcon from "@/assets/icons/banco_de_dados.png";
import HomeHeaderView from "@/src/components/HomeHeaderView/HomeHeaderView";
import ThemeView from "@/src/components/ThemeView/ThemeView";

export default function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <HomeHeaderView />

      <TitleView title={"TechNinja"} style={styles.title} color={"secondary"} />
      <TextView text={"Projeto Integrador"} style={styles.text} />

      <InputView
        placeholder={"Digite o obrigatório"}
        value={text}
        onChangeText={setText}
        style={styles.otherInput}
      />

      <InputView
        title={"Input Opcional"}
        logo={userIcon}
        placeholder={"Digite com props opcionais"}
        underline={true}
        value={text}
        onChangeText={setText}
        style={styles.optionalInput}
      />

      <ButtonView
        text={"Login"}
        color={"primary"}
        colorText={"primary"}
        onPress={() => Alert.alert("Sucesso!", "Clicou")}
        style={styles.button}
      />

      <ThemeView
        theme="Tema Estilizado"
        text="Texto explicativo sobre a área de conhecimento AHAAHIAHISHDIASHDOASDN,AJS"
        icon={dbIcon}
        style={{ backgroundColor: "green", marginTop: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 15,
    width: "100%",
    height: "100%",
  },
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
    marginHorizontal: 30,
  },
  optionalInput: {
    marginTop: 250,
  },
  otherInput: {
    marginTop: 150,
  },
});
