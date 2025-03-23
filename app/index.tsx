import { StyleSheet, View } from "react-native";
import TitleView from "@/app/components/TitleView/TitleView";
import designSystem from "@/app/styles/theme";
import TextView from "@/app/components/TextView/TextView";

export default function App() {
  return (
    <View>
      <TitleView title={"TechNinja"} style={styles.title} color={"secondary"} />
      <TextView text={"Projeto Integrador"} style={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontFamily: designSystem.fonts.brandFont,
  },
  text: {
    textAlign: "center",
    color: designSystem.colors.text.secondary,
  },
});
