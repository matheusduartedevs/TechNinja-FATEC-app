import {
  StyleSheet,
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
import imageRegister from "@/assets/icons/image-register.png";
import iconRegister from "@/assets/icons/icon-register.png";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAuth } from "@/src/hooks/AuthContext";

export default function LoginScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register } = useAuth();

  const handleRegister = async () => {
    if (!userName || !email || !password || !passwordConfirm) {
      console.error("Preencha todos os campos!");
      return;
    }

    if (password !== passwordConfirm) {
      console.error("As senhas não coincidem!");
      return;
    }

    const userData = {
      nome: userName.trim(),
      email: email.trim(),
      senha: password,
      senhaConfirmada: passwordConfirm,
    };

    try {
      await register(userData);
      router.push("/home");
    } catch (error) {
      console.error("Erro no register:", error);
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
            <Image source={imageRegister} style={styles.imageRegister} />

            <InputView
              logo={iconRegister}
              placeholder="Nome de Usuário"
              onChangeText={setUserName}
              value={userName}
            />

            <InputView
              logo={iconRegister}
              placeholder="E-mail"
              onChangeText={setEmail}
              value={email}
            />
            <InputView
              logo={iconRegister}
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
            />
            <InputView
              logo={iconRegister}
              placeholder="Confirme a senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
              secureTextEntry
            />

            <ButtonView
              text={"Criar conta"}
              color={"primary"}
              onPress={handleRegister}
              style={styles.button}
            />
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
    marginTop: 30,
    alignSelf: "center",
  },
  imageRegister: {
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 30,
  },
});
