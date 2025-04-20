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
  onPress,
}: ThemeViewProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <TitleView title={theme} color={"primary"} style={styles.title} />
      <TextView text={text} style={styles.text} color={"primary"} />
      <View style={styles.imageWrapper}>
        <Image source={icon} style={styles.image} resizeMode={"contain"} />
      </View>
    </TouchableOpacity>
  );
}
