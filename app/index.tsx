import { StyleSheet, View } from "react-native";
import TitleView from "@/app/components/TitleView/TitleView";
import designSystem from "@/app/styles/theme";

export default function App() {
  return (
    <View>
      <TitleView title={"TechNinja"} color={"secondary"} style={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontFamily: designSystem.fonts.brandFont,
  },
});
