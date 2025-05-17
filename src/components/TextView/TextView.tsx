import React from "react";
import { Text } from "react-native";
import { styles } from "@/src/components/TextView/styles";
import { TextViewProps } from "@/src/components/TextView/props";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";

export default function TextView({ text, color, style }: TextViewProps) {
  const { settings } = useAccessibility();

  return (
    <Text
      style={[styles({ color, lowVisionMode: settings.lowVisionMode }), style]}
    >
      {text}
    </Text>
  );
}
