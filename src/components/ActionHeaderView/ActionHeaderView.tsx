import { ActionHeaderViewProps } from "@/src/components/ActionHeaderView/props";
import { TouchableOpacity, View } from "react-native";
import { styleIcon, styles } from "@/src/components/ActionHeaderView/styles";
import TitleView from "@/src/components/TitleView/TitleView";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Feather";

export default function ActionHeaderView({
  style,
  title,
  color = "primary",
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
        <Icon name="arrow-left" size={26} style={styleIcon(color)} />
      </TouchableOpacity>
      <TitleView title={title} color={"primary"} style={styles.title} />
    </View>
  );
}
