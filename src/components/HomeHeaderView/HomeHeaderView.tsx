import { View, Text } from "react-native";
import { styles } from "@/src/components/HomeHeaderView/styles";
import PointsView from "@/src/components/PointsView/PointsView";

export default function HomeHeaderView() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TechNinja</Text>
      <PointsView points={"200"} />
    </View>
  );
}
