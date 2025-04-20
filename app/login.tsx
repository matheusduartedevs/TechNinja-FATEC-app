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
import iconEmail from "@/assets/icons/icon.png";
import iconLock from "@//assets/icons/lock.png";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              logo={iconEmail}
              placeholder="E-mail"
              onChangeText={setEmail}
              value={email}
            />

            <InputView
              logo={iconLock}
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
                  ]}
                >
                  Esqueceu a senha?
                </Text>
              )}
            </Pressable>

            <ButtonView
              text={"Entrar"}
              color={"primary"}
              onPress={() => router.push("/home")}
              style={styles.button}
            />

            <Pressable onPress={() => router.push("/register")}>
              {({ pressed }) => (
                <Text style={styles.link}>
                  Não tem uma conta?{" "}
                  <Text
                    style={{
                      color: pressed
                        ? designSystem.colors.action.primaryHover
                        : designSystem.colors.action.primary,
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
    marginTop: 60,
    marginBottom: 50,
  },
  link: {
    textAlign: "center",
    fontSize: designSystem.fonts.textSize,
    marginTop: 20,
    color: designSystem.colors.text.primary,
  },
});
