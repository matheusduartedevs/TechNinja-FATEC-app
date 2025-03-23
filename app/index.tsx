import { StyleSheet, Text, View } from "react-native";
import designSystem from "@/app/styles/theme";

export default function App() {
  return (
    <View>
      <Text style={styles.text}>TechNinja</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: designSystem.colors.text.secondary,
    fontFamily: designSystem.fonts.brandFont,
    fontSize: designSystem.fonts.titleSize,
  },
});
