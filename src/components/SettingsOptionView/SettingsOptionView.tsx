import { SettingsOptionViewProps } from "@/src/components/SettingsOptionView/props";
import { Image, View, TouchableOpacity } from "react-native";
import { styles } from "@/src/components/SettingsOptionView/styles";
import TextView from "@/src/components/TextView/TextView";
import arrowFoward from "@/assets/icons/arrow-go.png";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

export default function SettingsOptionView({
  option,
  option_two,
  option_three,
  showArrow_two = false,
  showArrow_three = false,
  onPressArrow,
  onPressArrowTwo,
  onPressArrowThree,
  style,
}: SettingsOptionViewProps) {
  const { settings } = useAccessibility();
  const optionsCount = [option, option_two, option_three].filter(
    Boolean,
  ).length;

  const dynamicContainerHeight = settings.lowVisionMode
    ? optionsCount === 1
      ? 80
      : 70 + optionsCount * 35
    : optionsCount === 1
      ? 70
      : 70 + optionsCount * 28;

  const dynamicGap = optionsCount === 2 ? 30 : optionsCount === 3 ? 20 : 0;

  return (
    <View
      style={[
        styles.container,
        { height: dynamicContainerHeight, gap: dynamicGap },
        style,
      ]}
    >
      {option && (
        <TouchableOpacity onPress={onPressArrow}>
          <View style={[styles.option, style]}>
            <TextView text={option} color={"primary"} style={styles.option} />
            <Image source={arrowFoward} />
          </View>
        </TouchableOpacity>
      )}

      {option_two && (
        <TouchableOpacity onPress={onPressArrowTwo}>
          <View style={[styles.option, style]}>
            <TextView
              text={option_two}
              color={"primary"}
              style={styles.option}
            />
            {showArrow_two && <Image source={arrowFoward} />}
          </View>
        </TouchableOpacity>
      )}

      {option_three && (
        <TouchableOpacity onPress={onPressArrowThree}>
          <View style={[styles.option, style]}>
            <TextView
              text={option_three}
              color={"primary"}
              style={styles.option}
            />
            {showArrow_three && <Image source={arrowFoward} />}
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
