import { StyleSheet, View, Image, Dimensions } from "react-native";
import designSystem from "@/src/styles/theme";
import TitleView from "@/src/components/TitleView/TitleView";
import TextView from "@/src/components/TextView/TextView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import logo from "@/assets/icons/logo.png";
import { useRouter } from "expo-router";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

const { width, height } = Dimensions.get("window");

export default function LauncherScreen() {
  const router = useRouter();
  const { settings } = useAccessibility();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TitleView
          title="TechNinja"
          color="primary"
          style={[
            styles.title,
            settings.lowVisionMode && {
              fontSize: designSystem.fonts.lowVisionTitleSize,
            },
          ]}
        />
      </View>

      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />

        <TextView
          text="Desafie seu conhecimento em tecnologia com o TechNinja"
          color="primary"
          style={[
            styles.text,
            settings.lowVisionMode && {
              fontSize: designSystem.fonts.lowVisionTitleSize,
            },
          ]}
        />

        <View style={styles.buttons}>
          <ButtonView
            text="Cadastrar"
            color="primary"
            onPress={() => router.push("/register")}
            style={styles.button}
          />

          <ButtonView
            text="Já tenho uma conta"
            colorText="primary"
            color="primaryBackground"
            onPress={() => router.push("/login")}
            style={[styles.button, styles.secondaryButton]}
          />
        </View>
      </View>
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
