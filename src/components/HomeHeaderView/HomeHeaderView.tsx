import { View, Text } from "react-native";
import { styles } from "@/src/components/HomeHeaderView/styles";
import PointsView from "@/src/components/PointsView/PointsView";
import { HomeHeaderViewProps } from "@/src/components/HomeHeaderView/props";
import { useAuth } from "@/src/hooks/AuthContext";

export default function HomeHeaderView({ style }: HomeHeaderViewProps) {
  const { user } = useAuth();
  const points = user?.pontuacao.toString() ?? "0";

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>TechNinja</Text>
      <PointsView points={points} background={"primary"} />
    </View>
  );
}
