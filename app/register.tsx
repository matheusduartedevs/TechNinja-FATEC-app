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
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAuth } from "@/src/hooks/AuthContext";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register } = useAuth();

  const handleRegister = async () => {
    if (!userName || !email || !password || !passwordConfirm) {
      Toast.show({
        type: "error",
        text1: "Preencha todos os campos",
      });
      return;
    }

    if (password !== passwordConfirm) {
      Toast.show({
        type: "error",
        text1: "As senhas não coincidem",
      });
      return;
    }

    const userData = {
      nome: userName.trim(),
      email: email.trim(),
      senha: password,
    };

    const success = await register(userData);

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
            <ActionHeaderView title={""} />
            <Image source={imageRegister} style={styles.imageRegister} />

            <InputView
              logo={"user"}
              placeholder="Nome de Usuário"
              onChangeText={setUserName}
              value={userName}
            />

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
            <InputView
              logo={"lock"}
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
    marginBottom: 30,
  },
});
