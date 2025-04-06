import { ActionHeaderViewProps } from "@/src/components/ActionHeaderView/props";
import { Image, View } from "react-native";
import { styles } from "@/src/components/ActionHeaderView/styles";
import arrowBack from "@/assets/icons/arrow-back.png";
import TitleView from "@/src/components/TitleView/TitleView";

export default function ActionHeaderView({
  style,
  title,
}: ActionHeaderViewProps) {
  return (
    <View style={[styles.container, style]}>
      <Image source={arrowBack} style={styles.icon} />
      <TitleView title={title} color={"primary"} style={styles.title} />
    </View>
  );
}
