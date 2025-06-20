import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    height: 60,
    backgroundColor: designSystem.colors.background.secondaryComponent,
    borderRadius: 50,
    marginBottom: 40,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 20,
  },
  selectedOption: {
    backgroundColor: designSystem.colors.background.primaryComponent,
  },
  icon: {},
  text: {
    marginLeft: 15,
    color: designSystem.colors.text.secondary,
    fontFamily: designSystem.fonts.primaryRegular,
  },
});
