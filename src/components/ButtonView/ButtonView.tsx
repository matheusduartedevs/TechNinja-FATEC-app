import React from "react";
import { Pressable, Text } from "react-native";
import { ButtonProps } from "./props";
import { styles } from "@/src/components/ButtonView/styles";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

export default function ButtonView({
  text,
  color = "primary",
  colorText = "secondary",
  onPress,
  style,
}: ButtonProps) {
  const { settings } = useAccessibility();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles({ color, pressed, colorText, settings }).button,
        style,
      ]}
    >
      <Text style={styles({ color, colorText, settings }).text}>{text}</Text>
    </Pressable>
  );
}
