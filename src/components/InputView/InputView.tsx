import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView, TextInput, View, Text, Image } from "react-native";
import { styles } from "@/src/components/InputView/styles";
import { InputViewProps } from "@/src/components/InputView/props";

export default function InputView({
  title,
  logo,
  placeholder,
  onChangeText,
  value,
  style,
  underline = false,
}: InputViewProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.safeArea, style, { width: "100%" }]}>
        {title && <Text style={styles.title}>{title}</Text>}

        <View style={styles.inputContainer}>
          {logo && <Image source={logo} style={styles.logo} />}
          <TextInput
            style={[
              styles.container,
              underline && styles.textUnderline,
              logo ? styles.textLeft : styles.textCenter,
            ]}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            underlineColorAndroid="transparent"
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
