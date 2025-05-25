import { useEffect, useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/src/components/FooterView/styles";
import TextView from "@/src/components/TextView/TextView";
import { FooterViewProps } from "@/src/components/FooterView/props";

import homeIcon from "@/assets/icons/home.png";
import rankingIcon from "@/assets/badges/ranking.png";
import userIcon from "@/assets/icons/icon.png";
import settingsIcon from "@/assets/icons/config.png";
import { useRouter, usePathname } from "expo-router";

const options = [
  { name: "Home", icon: homeIcon, path: "/home" },
  { name: "Ranking", icon: rankingIcon, path: "/ranking" },
  { name: "Usuário", icon: userIcon, path: "/profile" },
  { name: "Configurações", icon: settingsIcon, path: "/config" },
] as const;

export default function FooterView({ style }: FooterViewProps) {
  const router = useRouter();
  const pathname = usePathname();

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
          <Image
            source={option.icon}
            style={[styles.icon, { width: 24, height: 24 }]}
          />
          {selected === option.name && (
            <TextView
              text={option.name}
              color={"primary"}
              style={styles.text}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}
