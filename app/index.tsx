import { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <HomeHeaderView style={styles.header} />

        <TitleView
          title={"TechNinja"}
          style={styles.title}
          color={"secondary"}
        />
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
          style={styles.theme}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: designSystem.colors.action.primaryBackground,
    padding: 5,
    height: "100%",
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  header: {
    marginTop: 30,
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
    marginTop: 40,
  },
  otherInput: {
    marginTop: 40,
  },
  theme: {
    backgroundColor: "green",
    marginTop: 40,
  },
});
