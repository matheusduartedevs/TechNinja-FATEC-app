import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import designSystem from "@/src/styles/theme";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import InputView from "@/src/components/InputView/InputView";
import { useRouter } from "expo-router";
import { useState } from "react";
import TextView from "@/src/components/TextView/TextView";
import { useAuth } from "@/src/hooks/AuthContext";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";

export default function ForgotpassScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const {} = useAuth();

  const handleForgotpass = async () => {
    router.push("/login");
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
            <ActionHeaderView title="" />
            <View style={styles.container}>
              <TextView
                text="Identifique-se para receber um e-mail com as instruções
              para redefinir sua senha"
                color="primary"
                style={styles.text}
              />

              <InputView
                logo={"mail"}
                placeholder="E-mail"
                onChangeText={setEmail}
                value={email}
              />

              <ButtonView
                text={"Enviar email"}
                color={"primary"}
                onPress={handleForgotpass}
                style={styles.button}
              />
            </View>
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
    justifyContent: "center",
    gap: "4%",
    paddingBottom: "25%",
  },
  button: {
    alignSelf: "center",
  },
  text: {
    fontFamily: designSystem.fonts.primaryRegular,
    color: designSystem.colors.text.primary,
    textAlign: "center",
    marginHorizontal: "10%",
  },
});
