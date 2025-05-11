import { ActionHeaderViewProps } from "@/src/components/ActionHeaderView/props";
import { TouchableOpacity, Text, SafeAreaView } from "react-native";
import { styleIcon, styles } from "@/src/components/ActionHeaderView/styles";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Feather";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";
import designSystem from "@/src/styles/theme";

export default function ActionHeaderView({
  style,
  title,
  color = "primary",
}: ActionHeaderViewProps) {
  const router = useRouter();
  const { settings } = useAccessibility();

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/home");
    }
  };

  return (
    <SafeAreaView style={[styles.container, style]}>
      <TouchableOpacity onPress={handleBack}>
        <Icon name="arrow-left" size={26} style={styleIcon(color)} />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[styles.title, settings.lowVisionMode && styles.lowVisionTitle]}
      >
        {title}
      </Text>
    </SafeAreaView>
  );
}
