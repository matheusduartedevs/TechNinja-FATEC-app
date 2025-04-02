import { SettingsOptionViewProps } from "@/src/components/SettingsOptionView/props";
import { Image, View } from "react-native";
import { styles } from "@/src/components/SettingsOptionView/styles";
import TextView from "@/src/components/TextView/TextView";
import arrowFoward from "@/assets/icons/arrow-go.png";

export default function SettingsOptionView({
  option,
  style,
}: SettingsOptionViewProps) {
  return (
    <View style={[styles.container, style]}>
      <TextView text={option} style={styles.option} />
      <Image source={arrowFoward} />
    </View>
  );
}
