import { Image, View, TouchableOpacity } from "react-native";
import { ThemeViewProps } from "@/src/components/ThemeView/props";
import { styles } from "@/src/components/ThemeView/styles";
import TitleView from "@/src/components/TitleView/TitleView";
import TextView from "@/src/components/TextView/TextView";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";
import designSystem from "@/src/styles/theme";

export default function ThemeView({
  theme,
  text,
  icon,
  style,
  onPress,
}: ThemeViewProps) {
  const { settings } = useAccessibility();

  const dynamicStyle = settings.lowVisionMode
    ? {
        height: 435,
        paddingVertical: 22,
      }
    : {};

  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        dynamicStyle,
        settings.colorBlindMode && {
          backgroundColor: designSystem.colors.action.primaryColorBlind,
        },
      ]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <TitleView
        title={theme}
        color={"primary"}
        style={[
          styles.title,
          settings.lowVisionMode && {
            fontSize: designSystem.fonts.lowVisionTitleSize,
          },
        ]}
      />
      <TextView
        text={text}
        style={[
          styles.text,
          settings.lowVisionMode && {
            fontSize: designSystem.fonts.lowVisionTextSize,
          },
        ]}
        color={"primary"}
      />
      <View style={styles.imageWrapper}>
        <Image
          source={icon}
          style={[
            styles.image,
            settings.lowVisionMode && {
              marginTop: 10,
            },
          ]}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
}
