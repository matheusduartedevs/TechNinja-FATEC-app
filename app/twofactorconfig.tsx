import { View, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import * as Clipboard from "expo-clipboard";

import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import TextView from "@/src/components/TextView/TextView";
import ButtonView from "@/src/components/ButtonView/ButtonView";

import designSystem from "@/src/styles/theme";

export default function LinkTwoFactorScreen() {
  const router = useRouter();

  const secretKey = "ABCD 1234 EFGH 5678";

  const handleCopy = async () => {
    await Clipboard.setStringAsync(secretKey);
  };

  const handleNext = () => {
    router.push("/twofactor");
  };

  return (
    <View style={styles.container}>
      <ActionHeaderView title="Ativar autenticação em 2 fatores" />

      <View style={styles.inner}>
        <TextView
          text="Copie a chave abaixo e adicione no seu aplicativo de autenticação (como Google Authenticator ou Authy)."
          color="primary"
          style={styles.text}
        />

        <Pressable style={styles.tokenBox} onPress={handleCopy}>
          <TextView
            text={secretKey}
            color="secondary"
            style={styles.tokenText}
          />
          <TextView
            text="Toque para copiar"
            color="secondary"
            style={styles.copyHint}
          />
        </Pressable>

        <ButtonView
          text="Avançar"
          color="primary"
          onPress={handleNext}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  tokenBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 32,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  tokenText: {
    fontSize: 20,
    fontFamily: designSystem.fonts.primaryBold,
    marginBottom: 8,
  },
  copyHint: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    width: "100%",
    marginTop: 20,
  },
});
