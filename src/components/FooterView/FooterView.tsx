import { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "@/src/components/FooterView/styles";
import TextView from "@/src/components/TextView/TextView";
import { FooterViewProps } from "@/src/components/FooterView/props";
import FeatherIcon from "react-native-vector-icons/Feather";
import FA6Icon from "react-native-vector-icons/FontAwesome6";

import { useRouter, usePathname } from "expo-router";
import { useAccessibility } from "@/src/hooks/AccessibilityContext";
import designSystem from "@/src/styles/theme";

const options = [
  { name: "Home", icon: "home", library: "Feather", path: "/home" },
  {
    name: "Ranking",
    icon: "ranking-star",
    library: "FontAwesome6",
    path: "/ranking",
  },
  { name: "Usuário", icon: "user", library: "FontAwesome6", path: "/profile" },
  {
    name: "Configurações",
    icon: "settings",
    library: "Feather",
    path: "/config",
  },
] as const;

function Icon({
  icon,
  library,
  size,
  style,
}: {
  icon: string;
  library: "Feather" | "FontAwesome6";
  size?: number;
  style?: object;
}) {
  if (library === "Feather") {
    return <FeatherIcon name={icon} size={size} style={style} />;
  }
  return <FA6Icon name={icon} size={size} style={style} />;
}

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
          <Icon
            icon={option.icon}
            library={option.library}
            size={22}
            style={styles.icon}
          />
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
