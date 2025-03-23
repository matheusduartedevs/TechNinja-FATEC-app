import React from "react";
import { Pressable, Text } from "react-native";
import { ButtonProps } from "./props";
import { styles } from "./styles";

export default function Button({
  text,
  color = "primary",
  colorText = "secondary",
  onPress,
  style,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles({ color, pressed, colorText }).button,
        style,
      ]}
    >
      <Text style={styles({ color, colorText }).text}>{text}</Text>
    </Pressable>
  );
}
