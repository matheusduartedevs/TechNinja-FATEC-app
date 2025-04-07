import { View, Text, Platform, StatusBar } from "react-native";
import { styles } from "@/src/components/HomeHeaderView/styles";
import PointsView from "@/src/components/PointsView/PointsView";
import { HomeHeaderViewProps } from "@/src/components/HomeHeaderView/props";

export default function HomeHeaderView({ style }: HomeHeaderViewProps) {
  const marginTop = Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 0;
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>TechNinja</Text>
      <PointsView points={"200"} background={"primary"} />
    </View>
  );
}
