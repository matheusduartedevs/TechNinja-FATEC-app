import { StyleSheet } from "react-native";
import designSystem from "@/src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 380,
    height: 70,
    borderRadius: 20,
    backgroundColor: designSystem.colors.background.secondaryComponent,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  position: {
    fontFamily: designSystem.fonts.primaryBold,
    width: 30,
    textAlign: "center",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  name: {
    fontFamily: designSystem.fonts.primaryRegular,
    flex: 1,
    marginLeft: 15,
  },
  pointsContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
