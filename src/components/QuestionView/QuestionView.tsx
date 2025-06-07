import { QuestionViewProps } from "@/src/components/QuestionView/props";
import { View } from "react-native";
import TitleView from "@/src/components/TitleView/TitleView";
import { styles } from "@/src/components/QuestionView/styles";

export default function QuestionView({ question, style }: QuestionViewProps) {
  return (
    <View style={[styles.container, style]}>
      <TitleView title={question} color={"secondary"} style={styles.question} />
    </View>
  );
}
