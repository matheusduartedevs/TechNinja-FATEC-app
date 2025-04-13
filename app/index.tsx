import { StyleSheet, View, Image, Dimensions } from "react-native";
import designSystem from "@/src/styles/theme";
import TitleView from "@/src/components/TitleView/TitleView";
import TextView from "@/src/components/TextView/TextView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import logo from "@/assets/icons/logo.png";
import { useRouter } from "expo-router";
import { useAuth } from "@/src/hooks/AuthContext";

const { width, height } = Dimensions.get("window");

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
      <View style={styles.header}>
        <TitleView title="TechNinja" color="primary" style={styles.title} />
      </View>

      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />

        <TextView
          text="Desafie seu conhecimento em tecnologia com o TechNinja"
          color="primary"
          style={styles.text}
        />

<<<<<<< HEAD
        <View style={styles.buttons}>
          <ButtonView
            text="Cadastrar"
            color="primary"
            onPress={() => router.push("/login")}
            style={styles.button}
          />

          <ButtonView
            text="Já tenho uma conta"
            colorText="primary"
            color="primaryBackground"
            onPress={() => router.push("/home")}
            style={[styles.button, styles.secondaryButton]}
          />
        </View>
      </View>
=======
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
>>>>>>> 6cfe9fd (feat: service API calls and initial tests with mock data)
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
    paddingTop: 48,
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  title: {
    fontFamily: designSystem.fonts.brandFont,
    fontSize: designSystem.fonts.titleSize,
    textAlign: "center",
  },
  text: {
    fontFamily: designSystem.fonts.primaryBold,
    textAlign: "center",
    fontSize: 22,
    paddingHorizontal: 8,
  },
  logo: {
    width: width * 0.7,
    height: height * 0.3,
    resizeMode: "contain",
  },
  buttons: {
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
  button: {
    width: "85%",
  },
  secondaryButton: {
    borderColor: "white",
    borderWidth: 1,
  },
});
