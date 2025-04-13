import { Alert, StyleSheet, View, Image } from "react-native";
import designSystem from "@/src/styles/theme";
import TitleView from "@/src/components/TitleView/TitleView";
import TextView from "@/src/components/TextView/TextView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import logo from "@/assets/icons/logo.png";
import { useRouter } from "expo-router";
import { useAuth } from "@/src/hooks/AuthContext";

export default function LauncherScreen() {
  const router = useRouter();
  const { login } = useAuth();

  const mockUser = {
    email: "oconquistador@gmail.com",
    senha: "rei",
  };

  const handleLogin = async () => {
    try {
      await login(mockUser);
      router.push("/home");
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TitleView
        title={"TechNinja"}
        color={"primary"}
        style={{ ...styles.title, marginTop: 25 }}
      />
      <Image source={logo} style={[styles.logo, { marginTop: 70 }]} />

      <TextView
        text={"Desafie seu conhecimento em tecnologia com o TechNinja"}
        color={"primary"}
        style={{
          ...styles.text,
          marginTop: 30,
          marginLeft: 8,
          marginRight: 8,
          fontSize: 26,
        }}
      />

      <ButtonView
        text={"Cadastrar"}
        color={"primary"}
        onPress={() => router.push("/login")}
        style={{ marginTop: 70, marginHorizontal: 33 }}
      />

      <ButtonView
        text={"Já tenho uma conta"}
        colorText={"primary"}
        color={"primaryBackground"}
        onPress={handleLogin}
        style={{
          marginTop: 10,
          marginHorizontal: 33,
          borderColor: "white",
          borderWidth: 1,
        }}
      />
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
    fontFamily: designSystem.fonts.primaryBold,
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
  logo: {
    width: 300,
    height: 276,
    alignSelf: "center",
  },
});
