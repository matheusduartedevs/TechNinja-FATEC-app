import { AnswerViewProps } from "@/src/components/AnswerView/props";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "@/src/components/AnswerView/styles";
import TextView from "@/src/components/TextView/TextView";
import designSystem from "@/src/styles/theme";

export default function AnswerView({ answer, style }: AnswerViewProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.container,
        style,
        {
          borderColor: isSelected
            ? designSystem.colors.action.primary
            : "transparent",
        },
      ]}
    >
      <TextView text={answer} style={styles.answer} />
    </TouchableOpacity>
  );
}
