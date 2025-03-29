import { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import designSystem from "@/src/styles/theme";
import TitleView from "@/src/components/TitleView/TitleView";
import TextView from "@/src/components/TextView/TextView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import InputView from "@/src/components/InputView/InputView";
import HomeHeaderView from "@/src/components/HomeHeaderView/HomeHeaderView";
import ThemeView from "@/src/components/ThemeView/ThemeView";
import FooterView from "@/src/components/FooterView/FooterView";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import UserView from "@/src/components/UserView/UserView";

import goldenBadge from "@/assets/icons/golden-badge.png";
import userIcon from "@/assets/icons/icon.png";
import dbIcon from "@/assets/icons/banco_de_dados.png";

export default function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <HomeHeaderView style={styles.header} />
        <ActionHeaderView style={styles.headerAction} />

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

        {/*<UserView*/}
        {/*  icon={userIcon}*/}
        {/*  badge={goldenBadge}*/}
        {/*  name="Usuário"*/}
        {/*  position={"1°"}*/}
        {/*  style={styles.user}*/}
        {/*  badgePosition={"bottom"}*/}
        {/*/>*/}

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

      <View style={styles.footerContainer}>
        <FooterView onClick={() => console.log("palmeiras")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  header: {
    marginTop: 22,
  },
  headerAction: {
    marginTop: 22,
  },
  user: {
    marginTop: 40,
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
  footerContainer: {
    position: "absolute",
    bottom: 44,
    alignItems: "center",
  },
});
