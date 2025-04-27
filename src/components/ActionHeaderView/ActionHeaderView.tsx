import { ActionHeaderViewProps } from "@/src/components/ActionHeaderView/props";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "@/src/components/ActionHeaderView/styles";
import arrowBack from "@/assets/icons/arrow-back.png";
import TitleView from "@/src/components/TitleView/TitleView";
import { useRouter } from "expo-router";

export default function ActionHeaderView({
  style,
  title,
}: ActionHeaderViewProps) {
  const router = useRouter();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/home");
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={handleBack}>
        <Image source={arrowBack} style={styles.icon} />
      </TouchableOpacity>
      <TitleView title={title} color={"primary"} style={styles.title} />
    </View>
  );
}
