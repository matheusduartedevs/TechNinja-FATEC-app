import { Image, View } from "react-native";
import { ThemeViewProps } from "@/src/components/ThemeView/props";
import { styles } from "@/src/components/ThemeView/styles";
import TitleView from "@/src/components/TitleView/TitleView";
import TextView from "@/src/components/TextView/TextView";

export default function ThemeView({
  theme,
  text,
  icon,
  style,
}: ThemeViewProps) {
  return (
    <View style={[styles.container, style]}>
      <TitleView title={theme} color={"primary"} style={styles.title} />
      <TextView text={text} style={styles.text} />
      <Image source={icon} style={styles.image} />
    </View>
  );
}
