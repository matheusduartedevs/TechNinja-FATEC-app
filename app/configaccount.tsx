import { StyleSheet, View, Image, ScrollView } from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import InputView from "@/src/components/InputView/InputView";
import { useState } from "react";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import FooterView from "@/src/components/FooterView/FooterView";
import TextView from "@/src/components/TextView/TextView";
import icon from "@/assets/icons/icon_config.png";

export default function ConfigAccount() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ActionHeaderView style={styles.header} title={"Configurações"} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profilePhotoWrapper}>
          <TextView text={"Foto de perfil"} color={"primary"} />
          <Image source={icon} style={styles.profilePhotoIcon} />
        </View>

        <TextView text={"Nome"} color={"primary"} />
        <InputView
          placeholder="Digite um novo nome"
          onChangeText={setUserName}
          value={userName}
          style={styles.input}
        />

        <TextView text={"E-mail"} color={"primary"} />
        <InputView
          placeholder="Digite um novo e-mail"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
        />

        <TextView text={"Senha"} color={"primary"} />
        <InputView
          placeholder="Digite uma nova senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          style={styles.input}
        />

        <ButtonView
          text="Salvar"
          color="primary"
          style={styles.button}
          onPress={() => console.log("Atualizações salvas")}
        />
      </ScrollView>

      <FooterView onClick={() => console.log("..")} style={styles.footer} />
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
  profilePhotoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: designSystem.colors.background.primaryComponent,
    marginBottom: 24,
  },
  profilePhotoIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  input: {
    width: "100%",
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
