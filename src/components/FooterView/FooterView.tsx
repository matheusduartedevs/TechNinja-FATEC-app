import { useEffect, useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/src/components/FooterView/styles";
import TextView from "@/src/components/TextView/TextView";
import { FooterViewProps } from "@/src/components/FooterView/props";
import Icon from "react-native-vector-icons/Feather";
/*
import Icon from "react-native-vector-icons/FontAwesome6";
import homeIcon from "@/assets/icons/home.png";
import rankingIcon from "@/assets/badges/ranking.png";
import userIcon from "@/assets/icons/icon.png";
import settingsIcon from "@/assets/icons/config.png";

 */
import { useRouter, usePathname } from "expo-router";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";
import designSystem from "@/src/styles/theme";

const options = [
  { name: "Home", icon: "home", path: "/home" },
  { name: "Ranking", icon: "ranking-star", path: "/ranking" },
  { name: "Usuário", icon: "user", path: "/profile" },
  { name: "Configurações", icon: "settings", path: "/config" },
] as const;

export default function FooterView({ style }: FooterViewProps) {
  const router = useRouter();
  const pathname = usePathname();

  const { settings } = useAccessibility();

  const [selected, setSelected] = useState("Home");

  useEffect(() => {
    const match = options.find((option) => pathname.startsWith(option.path));
    if (match) {
      setSelected(match.name);
    }
  }, [pathname]);

  const handlePress = (option: (typeof options)[number]) => {
    if (pathname.startsWith(option.path)) return;
    setSelected(option.name);
    router.push(option.path);
  };

  return (
    <View style={[styles.container, style]}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.name}
          style={[
            styles.option,
            selected === option.name && styles.selectedOption,
          ]}
          onPress={() => handlePress(option)}
        >
          <Icon name={option.icon} size={22} style={styles.icon} />
          {selected === option.name && (
            <TextView
              text={option.name}
              color={"primary"}
              style={[
                styles.text,
                settings.lowVisionMode && {
                  fontSize: designSystem.fonts.lowVisionTextSize,
                },
              ]}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}
