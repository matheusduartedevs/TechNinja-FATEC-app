import { Image, View, FlatList, Pressable } from "react-native";
import { styles } from "@/src/components/AchievementsView/styles";
import { AchievementsViewProps } from "@/src/components/AchievementsView/props";

export default function AchievementsView({
  achievements,
  style,
  onPress,
}: AchievementsViewProps) {
  const limitedAchievements = achievements.slice(0, 3);

  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={onPress}>
        <View style={styles.iconsContainer}>
          <FlatList
            data={limitedAchievements}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={item} style={styles.icon} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatlistContainer}
          />
        </View>
      </Pressable>
    </View>
  );
}
