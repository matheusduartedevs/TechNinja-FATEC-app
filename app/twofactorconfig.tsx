import { useEffect, useState } from "react";
import { View, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import * as Clipboard from "expo-clipboard";

import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import TextView from "@/src/components/TextView/TextView";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import { generateTwoFactorSecret } from "@/src/services/twofactor";

import designSystem from "@/src/styles/theme";
import { useAuth } from "@/src/hooks/AuthContext";

export default function LinkTwoFactorConfig() {
  const router = useRouter();
  const { user } = useAuth();

  const [secretKey, setSecretKey] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSecret = async () => {
      try {
        const res = await generateTwoFactorSecret(user.email);
        setSecretKey(res.secret);
      } catch (error) {
        console.error("Erro ao gerar secret 2FA:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSecret();
  }, []);

  const handleCopy = async () => {
    await Clipboard.setStringAsync(secretKey);
  };

  const handleNext = () => {
    router.push("/twofactor");
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color={designSystem.colors.action.primary}
        />
      </View>
    );
  }

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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: designSystem.colors.action.primaryBackground,
  },
});
