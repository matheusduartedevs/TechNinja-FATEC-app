import { Image, View, TouchableOpacity } from "react-native";
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
    <TouchableOpacity style={[styles.container, style]} activeOpacity={0.8}>
      <TitleView title={theme} color={"primary"} style={styles.title} />
      <TextView text={text} style={styles.text} color={"primary"} />
      <View style={styles.imageWrapper}>
        <Image source={icon} style={styles.image} resizeMode={"contain"} />
      </View>
    </TouchableOpacity>
  );
}
