import React from "react";
import { Text } from "react-native";
import { styles } from "@/app/components/TextView/styles";
import { TextViewProps } from "@/app/components/TextView/props";

export default function TextView({ text, style }: TextViewProps) {
  return <Text style={[styles(), style]}>{text}</Text>;
}
