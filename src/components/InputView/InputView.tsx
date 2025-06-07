import React from "react";
import { SafeAreaView, TextInput, View, Text, Image } from "react-native";
import { styles } from "@/src/components/InputView/styles";
import { InputViewProps } from "@/src/components/InputView/props";
import Icon from "react-native-vector-icons/Feather";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";
import designSystem from "@/src/styles/theme";

export default function InputView({
  title,
  logo,
  placeholder,
  onChangeText,
  value,
  style,
  underline = false,
  secureTextEntry = false,
}: InputViewProps) {
  const { settings } = useAccessibility();

  return (
    <SafeAreaView style={[styles.safeArea, style, { width: "100%" }]}>
      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.inputContainer}>
        {logo && <Icon name={logo} size={25} style={styles.logo} />}
        <TextInput
          style={[
            styles.container,
            underline && styles.textUnderline,
            logo ? styles.textLeft : styles.textCenter,
            settings.lowVisionMode && {
              fontSize: designSystem.fonts.lowVisionTextSize,
            },
          ]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry}
        />
      </View>
    </SafeAreaView>
  );
}
