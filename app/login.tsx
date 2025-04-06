import { View } from "react-native";
import { useRouter } from "expo-router";
import ButtonView from "@/src/components/ButtonView/ButtonView";

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <ButtonView
        text="Voltar"
        color="primary"
        onPress={() => router.push("/")}
        style={{ marginTop: 20, marginHorizontal: 20 }}
      />
    </View>
  );
}
