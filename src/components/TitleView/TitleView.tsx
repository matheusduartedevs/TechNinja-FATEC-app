import React from "react";
import { Text } from "react-native";
import { TitleViewProps } from "@/src/components/TitleView/props";
import { styles } from "@/src/components/TitleView/styles";

export default function TitleView({ title, color, style }: TitleViewProps) {
  return <Text style={[styles({ color }), style]}>{title}</Text>;
}
