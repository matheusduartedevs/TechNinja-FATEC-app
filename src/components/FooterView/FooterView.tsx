import { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/src/components/FooterView/styles";
import TextView from "@/src/components/TextView/TextView";
import { FooterViewProps } from "@/src/components/FooterView/props";

import homeIcon from "@/assets/icons/home.png";
import rankingIcon from "@/assets/icons/ranking.png";
import userIcon from "@/assets/icons/icon.png";
import settingsIcon from "@/assets/icons/config.png";

const options = [
  { name: "Home", icon: homeIcon },
  { name: "Ranking", icon: rankingIcon },
  { name: "Usuário", icon: userIcon },
  { name: "Configurações", icon: settingsIcon },
];

export default function FooterView({ onClick, style }: FooterViewProps) {
  const [selected, setSelected] = useState("Home");

  const handlePress = (option: string) => {
    setSelected(option);
    onClick();
  };

  return (
    <View style={[styles.container, style]}>
      {options.map(({ name, icon }) => (
        <TouchableOpacity
          key={name}
          style={[styles.option, selected === name && styles.selectedOption]}
          onPress={() => handlePress(name)}
        >
          <Image
            source={icon}
            style={[styles.icon, { width: 24, height: 24 }]}
          />
          {selected === name && <TextView text={name} style={styles.text} />}
        </TouchableOpacity>
      ))}
      s
    </View>
  );
}
