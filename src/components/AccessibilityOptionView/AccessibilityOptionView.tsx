import React, { useState } from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { styles } from "@/src/components/AccessibilityOptionView/styles";
import TextView from "@/src/components/TextView/TextView";
import { AccessibilityOptionViewProps } from "@/src/components/AccessibilityOptionView/props";
import designSystem from "@/src/styles/theme";

export default function AccessibilityOptionView({
  option,
  style,
  children,
}: AccessibilityOptionViewProps) {
  const [isActive, setIsActive] = useState(false);
  const [circlePosition] = useState(new Animated.Value(0));

  const toggleSwitch = () => {
    setIsActive((prevState) => {
      Animated.timing(circlePosition, {
        toValue: prevState ? 0 : 20,
        duration: 300,
        useNativeDriver: false,
      }).start();

      return !prevState;
    });
  };

  return (
    <View style={[styles.container, style]}>
      <TextView text={option} color={"primary"} style={styles.option} />

      <TouchableOpacity
        style={[
          styles.toggleContainer,
          {
            backgroundColor: isActive
              ? designSystem.colors.action.primary
              : designSystem.colors.background.primaryComponent,
          },
        ]}
        onPress={toggleSwitch}
      >
        <Animated.View
          style={[
            styles.toggleCircle,
            {
              transform: [{ translateX: circlePosition }],
            },
          ]}
        />
        {children}
      </TouchableOpacity>
    </View>
  );
}
