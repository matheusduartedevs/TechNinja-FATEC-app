import { View, StyleSheet, TextInput, Keyboard } from "react-native";
import { useRef, useState } from "react";
import { useRouter } from "expo-router";

import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import TextView from "@/src/components/TextView/TextView";
import ButtonView from "@/src/components/ButtonView/ButtonView";

import designSystem from "@/src/styles/theme";
import { useAuth } from "@/src/hooks/AuthContext";
import { verifyTwoFactorToken } from "@/src/services/twofactor";
import Toast from "react-native-toast-message";

export default function TwoFactorScreen() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<(TextInput | null)[]>([]);
  const router = useRouter();

  const handleChange = (value: string, index: number) => {
    if (/^\d$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < 5) {
        inputs.current[index + 1]?.focus();
      } else {
        Keyboard.dismiss();
      }
    } else if (value === "") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
    }
  };

  const { user } = useAuth();

  const handleVerify = async () => {
    const fullCode = code.join("");
    if (fullCode.length !== 6) {
      Toast.show({
        type: "error",
        text1: "Digite os 6 dígitos",
      });
      return;
    }

    try {
      const res = await verifyTwoFactorToken(user.token, fullCode);

      if (res.success) {
        router.push("/home");
      } else {
        Toast.show({
          type: "error",
          text1: "Código inválido",
        });
      }
    } catch (error) {
      console.error("Erro ao verificar token 2FA:", error);
      Toast.show({
        type: "error",
        text1: "Erro na verificação",
      });
    }
  };

  return (
    <View style={styles.container}>
      <ActionHeaderView title="Verificação em 2 Fatores" />

      <View style={styles.inner}>
        <TextView
          text="Digite os 6 dígitos exibidos no seu app de autenticação "
          color="primary"
          style={styles.text}
        />

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleChange(value, index)}
              autoFocus={index === 0}
            />
          ))}
        </View>

        <ButtonView
          text="Verificar"
          color="primary"
          onPress={handleVerify}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 24,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  input: {
    width: 48,
    height: 60,
    borderRadius: 12,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 24,
    fontFamily: designSystem.fonts.primaryBold,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    width: "100%",
    marginTop: 20,
  },
});
