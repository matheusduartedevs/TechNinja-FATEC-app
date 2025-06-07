import { UserViewProps } from "@/src/components/UserView/props";
import { Image, View } from "react-native";
import TitleView from "@/src/components/TitleView/TitleView";
import TextView from "@/src/components/TextView/TextView";
import { styles } from "@/src/components/UserView/styles";

export default function UserView({
  icon,
  name,
  position,
  badge,
  badgePosition,
  size = "default",
}: UserViewProps) {
  const isSmall = size === "small";
  const isMedium = size === "medium";

  const scale = isSmall ? 0.75 : isMedium ? 0.9 : 1;
  const containerSize = isSmall
    ? { width: 150, height: 140 }
    : isMedium
      ? { width: 140, height: 150 }
      : { width: 200, height: 190 };

  return (
    <View style={[containerSize, { alignItems: "center" }]}>
      <View style={[styles.container, { transform: [{ scale }] }]}>
        {position && (
          <TitleView
            title={position.toString()}
            color={"primary"}
            style={styles.position}
          />
        )}

        <View style={styles.iconWrapper}>
          <View style={styles.iconCircle}>
            <Image source={icon} style={styles.icon} />
          </View>
          {badge && (
            <Image
              source={badge}
              style={[
                styles.badge,
                badgePosition === "top" ? styles.badgeTop : styles.badgeBottom,
              ]}
            />
          )}
          <TextView text={name} color={"primary"} style={styles.name} />
        </View>
      </View>
    </View>
  );
}
