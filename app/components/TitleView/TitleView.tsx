import React from "react";
import { Text } from "react-native";
import { TitleViewProps } from "@/app/components/TitleView/props";
import { styles } from "@/app/components/TitleView/styles";

export default function TitleView({ title, color, style }: TitleViewProps) {
  return <Text style={[styles({ color }), style]}>{title}</Text>;
}
