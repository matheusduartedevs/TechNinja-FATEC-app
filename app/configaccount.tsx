import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import designSystem from "@/src/styles/theme";
import ActionHeaderView from "@/src/components/ActionHeaderView/ActionHeaderView";
import InputView from "@/src/components/InputView/InputView";
import { useState, useEffect } from "react";
import ButtonView from "@/src/components/ButtonView/ButtonView";
import FooterView from "@/src/components/FooterView/FooterView";
import TextView from "@/src/components/TextView/TextView";
import * as ImagePicker from "expo-image-picker";
import { useAuth } from "@/src/hooks/AuthContext";
import icon from "@/assets/icons/icon_config.png";

export default function ConfigAccount() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);

  const { updateUser, user } = useAuth();

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert(
        "Permissão necessária",
        "Permissão para acessar a galeria é necessária!",
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
      setAvatar(base64Image);
    }
  };

  const handleChanges = async () => {
    const userData = {
      nome: userName?.trim(),
      email: email?.trim(),
      senha: password,
      avatar: avatar || user?.avatar,
    };

    if (!userData.nome || !userData.email) {
      console.error("Nome e email são obrigatórios");
      return;
    }

    try {
      await updateUser(userData);
      alert("Informações do usuário atualizadas com sucesso!");
    } catch (error) {
      console.error("Erro ao alterar as informações do usuário:", error);
    }
  };

  useEffect(() => {
    if (user) {
      setUserName(user.nome);
      setEmail(user.email);
      setAvatar(user.avatar ?? null);
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <ActionHeaderView style={styles.header} title={"Configurações"} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profilePhotoWrapper}>
          <TextView text={"Foto de perfil"} color={"primary"} />
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={avatar ? { uri: avatar } : icon}
              style={styles.profilePhotoIcon}
            />
          </TouchableOpacity>
        </View>

        <TextView text={"Nome"} color={"primary"} />
        <InputView
          placeholder="Digite um novo nome"
          onChangeText={setUserName}
          value={userName}
          style={styles.input}
        />

        <TextView text={"E-mail"} color={"primary"} />
        <InputView
          placeholder="Digite um novo e-mail"
          onChangeText={setEmail}
          value={email}
          style={styles.input}
        />

        <TextView text={"Senha"} color={"primary"} />
        <InputView
          placeholder="Digite uma nova senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          style={styles.input}
        />

        <ButtonView
          text="Salvar"
          color="primary"
          style={styles.button}
          onPress={handleChanges}
        />
      </ScrollView>

      <FooterView style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
    paddingTop: 48,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 60,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  profilePhotoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: designSystem.colors.background.primaryComponent,
    marginBottom: 24,
  },
  profilePhotoIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: "cover",
  },
  input: {
    width: "100%",
    marginBottom: 24,
  },
  button: {
    width: "80%",
    alignSelf: "center",
    marginTop: 32,
  },
  footer: {
    alignSelf: "center",
  },
});
