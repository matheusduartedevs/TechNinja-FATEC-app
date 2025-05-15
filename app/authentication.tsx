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
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import TextView from "@/src/components/TextView/TextView";
import InputView from "@/src/components/InputView/InputView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import iconLock from "@//assets/icons/lock.png";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAuth } from "@/src/hooks/AuthContext";

export default function AuthenticationScreen() {
  const router = useRouter();
  const [code, setCode] = useState("");

  const {} = useAuth();

  const handleAuthentication = async () => {
    console.log("Verificação de duas etapas");
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
            <ActionHeaderView title="Verifique sua identidade" />
            <View style={styles.container}>
              <TextView
                text="Insira o código enviado para o seu e-mail"
                color="primary"
                style={styles.text}
              />
              <InputView
                logo={iconLock}
                placeholder="Código de verificação"
                onChangeText={setCode}
                value={code}
              />
              <ButtonView
                text={"Verificar"}
                color={"primary"}
                onPress={handleAuthentication}
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
    fontSize: designSystem.fonts.textSize,
    textAlign: "center",
    marginHorizontal: "10%",
  },
});
