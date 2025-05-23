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
  style,
}: UserViewProps) {
  return (
    <View style={[styles.container, style]}>
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
      </View>

      <TextView text={name} color={"primary"} style={styles.name} />
    </View>
  );
}
