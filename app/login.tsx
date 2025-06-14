import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import designSystem from "@/src/styles/theme";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import InputView from "@/src/components/InputView/InputView";
import imageLogin from "@/assets/icons/image-login.png";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAuth } from "@/src/hooks/AuthContext";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const { settings } = useAccessibility();

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Preencha todos os campos",
      });
      return;
    }

    const userData = {
      email: email,
      senha: password,
    };

    const success = await login(userData);

    if (success) {
      router.push("/home");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <Image source={imageLogin} style={styles.imageLogin} />

            <InputView
              logo={"mail"}
              placeholder="E-mail"
              onChangeText={setEmail}
              value={email}
            />

            <InputView
              logo={"lock"}
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />

            <Pressable onPress={() => router.push("/forgotpass")}>
              {({ pressed }) => (
                <Text
                  style={[
                    {
                      color: pressed
                        ? "#ccc"
                        : designSystem.colors.text.primary,
                    },
                    styles.link,
                    settings.lowVisionMode && {
                      fontSize: designSystem.fonts.lowVisionTextSize,
                    },
                  ]}
                >
                  Esqueceu a senha?
                </Text>
              )}
            </Pressable>

            <ButtonView
              text={"Entrar"}
              color={"primary"}
              onPress={handleLogin}
              style={styles.button}
            />

            <Pressable onPress={() => router.push("/register")}>
              {({ pressed }) => (
                <Text
                  style={[
                    styles.link,
                    settings.lowVisionMode && {
                      fontSize: designSystem.fonts.lowVisionTextSize,
                    },
                  ]}
                >
                  Não tem uma conta?{" "}
                  <Text
                    style={{
                      color: settings.colorBlindMode
                        ? pressed
                          ? designSystem.colors.action.primaryColorBlindHover
                          : designSystem.colors.action.primaryColorBlind
                        : pressed
                          ? designSystem.colors.action.primaryHover
                          : designSystem.colors.action.primary,
                      fontSize: settings.lowVisionMode
                        ? designSystem.fonts.lowVisionTextSize
                        : designSystem.fonts.textSize,
                      fontFamily: designSystem.fonts.primaryBold,
                    }}
                  >
                    Crie uma aqui!
                  </Text>
                </Text>
              )}
            </Pressable>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
    justifyContent: "flex-start",
  },
  button: {
    marginHorizontal: 33,
    marginTop: 100,
    marginBottom: 3,
    alignSelf: "center",
  },
  imageLogin: {
    alignSelf: "center",
    marginBottom: 50,
  },
  link: {
    textAlign: "center",
    fontSize: designSystem.fonts.textSize,
    marginTop: 20,
    color: designSystem.colors.text.primary,
  },
});
