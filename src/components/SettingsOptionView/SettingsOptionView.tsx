import { SettingsOptionViewProps } from "@/src/components/SettingsOptionView/props";
import { Image, View, TouchableOpacity } from "react-native";
import { styles } from "@/src/components/SettingsOptionView/styles";
import TextView from "@/src/components/TextView/TextView";
import arrowFoward from "@/assets/icons/arrow-go.png";

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
  const optionsCount = [option, option_two, option_three].filter(
    Boolean,
  ).length;

  // altera o valor da altura do container com base no número de opções passadas como props
  const containerHeight = optionsCount === 1 ? 70 : 70 + optionsCount * 28;

  //altera o valor do gap de acordo com o numero de opcoes dentro do container
  const dynamicGap = optionsCount === 2 ? 30 : optionsCount === 3 ? 20 : 0;

  return (
    <View
      style={[
        styles.container,
        { height: containerHeight, gap: dynamicGap },
        style,
      ]}
    >
      {option && (
        <View style={[styles.option, style]}>
          <TextView text={option} style={styles.option} />
          <TouchableOpacity onPress={onPressArrow}>
            <Image source={arrowFoward} />
          </TouchableOpacity>
        </View>
      )}

      {option_two && (
        <View style={[styles.option, style]}>
          <TextView text={option_two} style={styles.option} />
          {/*}exibe o icone arrow apenas ao passar a propriedade showArrow como true nas props {*/}
          {showArrow_two && (
            <TouchableOpacity onPress={onPressArrowTwo}>
              <Image source={arrowFoward} />
            </TouchableOpacity>
          )}
        </View>
      )}

      {option_three && (
        <View style={[styles.option, style]}>
          <TextView text={option_three} style={styles.option} />
          {showArrow_three && (
            <TouchableOpacity onPress={onPressArrowThree}>
              <Image source={arrowFoward} />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}
