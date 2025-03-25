import designSystem from "@/src/styles/theme";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

interface InputStyles {
  safeArea: ViewStyle;
  inputContainer: ViewStyle;
  container: TextStyle;
  title: TextStyle;
  logo: ImageStyle;
  inputUnderline: ViewStyle;
  underlineBar: ViewStyle;
  textUnderline: TextStyle;
  textLeft: TextStyle;
  textCenter: TextStyle;
}

export const styles: InputStyles = {
  safeArea: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: designSystem.colors.background.tertiaryComponent,
    borderRadius: 10,
    width: 343,
    height: 64,
    borderWidth: 1,
    borderColor: designSystem.colors.background.secondaryComponent,
  },
  container: {
    flex: 1,
    backgroundColor: designSystem.colors.background.tertiaryComponent,
    borderRadius: 10,
    fontFamily: designSystem.fonts.primaryRegular,
    fontSize: designSystem.fonts.textSize,
    color: designSystem.colors.text.secondary,
  },
  title: {
    fontSize: designSystem.fonts.textSize,
    fontFamily: designSystem.fonts.primaryBold,
    color: designSystem.colors.text.primary,
    marginBottom: 8,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 25,
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
  textLeft: {
    textAlign: "left",
    paddingLeft: 5,
  },
  textCenter: {
    textAlign: "center",
  },
  inputUnderline: {
    backgroundColor: "transparent",
    borderRadius: 0,
  },
  underlineBar: {
    height: 1,
    backgroundColor: designSystem.colors.action.primaryBackground,
    alignSelf: "stretch",
    marginHorizontal: 20,
    marginTop: 2,
  },
};
