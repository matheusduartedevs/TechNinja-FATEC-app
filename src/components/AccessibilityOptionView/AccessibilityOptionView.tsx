import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import { styles } from "./styles";
import TextView from "../TextView/TextView";
import { AccessibilityOptionViewProps } from "./props";
import designSystem from "@/src/styles/theme";

export default function AccessibilityOptionView({
  option,
  style,
  value,
  onChange,
}: AccessibilityOptionViewProps) {
  const [isActive, setIsActive] = useState(value ?? false);
  const [circlePosition] = useState(new Animated.Value(value ? 20 : 0));

  useEffect(() => {
    if (value !== undefined) {
      setIsActive(value);
      Animated.timing(circlePosition, {
        toValue: value ? 20 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [value]);

  const toggleSwitch = () => {
    const newValue = !isActive;
    setIsActive(newValue);
    onChange?.(newValue);

    Animated.timing(circlePosition, {
      toValue: newValue ? 20 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
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
      </TouchableOpacity>
    </View>
  );
}
